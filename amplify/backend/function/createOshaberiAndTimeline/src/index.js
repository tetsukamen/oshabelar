/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiGraphqlapiGraphQLAPIIdOutput = process.env.API_OSHABELAR_GRAPHQLAPIIDOUTPUT
var apiGraphqlapiGraphQLAPIEndpointOutput = process.env.API_OSHABELAR_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

const AWSAppSyncClient = require('aws-appsync').default;
const gql = require('graphql-tag');
global.fetch = require('node-fetch');

let graphqlClient;

exports.handler = async (event, context, callback) => {
  console.log(event)
  let env;
  let graphql_auth;

  if (event.arguments.content.length > 140) {
    callback('content length is over 140', null);
  }

  if ('AWS_EXECUTION_ENV' in process.env && process.env.AWS_EXECUTION_ENV.startsWith('AWS_Lambda_')) {
    //for cloud env
    env = process.env;
    graphql_auth = {
      type: "AWS_IAM",
      credentials: {
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
        sessionToken: env.AWS_SESSION_TOKEN,
      }
    };
  } else {
    // for local mock
    env = {
      API_OSHABELAR_GRAPHQLAPIENDPOINTOUTPUT: 'http://localhost:20002/graphql',
      REGION: 'us-east-1',
    }
    graphql_auth = {
      type: "AWS_IAM",
      credentials: {
        accessKeyId: 'mock',
        secretAccessKey: 'mock',
        sessionToken: 'mock',
      }
    };
  }
  console.log(env);
  console.log(graphql_auth);

  if (!graphqlClient) {
    graphqlClient = new AWSAppSyncClient({
      url: env.API_OSHABELAR_GRAPHQLAPIENDPOINTOUTPUT,
      region: env.REGION,
      auth: graphql_auth,
      disableOffline: true,
    });
  }


  // make content ojoly
  let content = event.arguments.content;
  for (let words of dict) {
    for (let word of words) {
      content = content.split(word).join(words[0])
    }
  }
  //post oshaberi to the origin
  const oshaberiInput = {
    mutation: gql(createOshaberi),
    variables: {
      input: {
        type: 'oshaberi',
        timestamp: Math.floor(Date.now() / 1000),
        owner: event.identity.username,
        author: event.identity.username,
        content: content,
        imageKeys: event.arguments.imageKeys,
      },
    },
  };
  if (event.arguments.parentOshaberiId) {
    oshaberiInput.variables.input["parentOshaberiId"] = event.arguments.parentOshaberiId;
  }
  const res = await graphqlClient.mutate(oshaberiInput);
  console.log(res);
  const oshaberi = res.data.createOshaberi;


  if (event.arguments.parentOshaberiId) {
    // create notification
    if (event.arguments.parentOshaberiId) {
      // get parent oshaberi author
      const getOshaberiQueryInput = {
        id: event.arguments.parentOshaberiId,
      };
      const getOshaberiResult = await graphqlClient.query({
        query: gql(getOshaberi),
        fetchPolicy: 'network-only',
        variables: getOshaberiQueryInput,
      })
      const parentOshaberiAuthor = getOshaberiResult.data.getOshaberi.author;
      console.log(parentOshaberiAuthor)

      const notificationInput = {
        mutation: gql(createNotification),
        variables: {
          input: {
            userId: parentOshaberiAuthor,
            timestamp: Math.floor(Date.now() / 1000),
            fromUserId: event.identity.username,
            oshaberiId: event.arguments.parentOshaberiId,
            haveRead: false,
            action: "reply",
          }
        }
      }
      const createNotificationInputRes = await graphqlClient.mutate(notificationInput);
      console.log(createNotificationInputRes);
    }
    // end up if this is child oshaberi
    return oshaberi;
  }

  // list followers
  const queryInput = {
    followeeId: event.identity.username,
    limit: 100000,
  }
  console.log(queryInput)
  const listFollowRelationshipsResult = await graphqlClient.query({
    query: gql(listFollowRelationships),
    fetchPolicy: 'network-only',
    variables: queryInput,
  });
  console.log(listFollowRelationshipsResult);
  const followers = listFollowRelationshipsResult.data.listFollowingRelationships.items;
  console.log(followers);

  //oshaberi to timeline
  followers.push({
    followerId: oshaberi.owner,
  })
  const results = await Promise.all(followers.map((follower) => createTimelineForAUser({ follower: follower, oshaberi: oshaberi })));
  console.log(results)

  return oshaberi;
};

const createTimelineForAUser = async ({ follower, oshaberi }) => {
  const timelineInput = {
    mutation: gql(createTimeline),
    variables: {
      input: {
        userId: follower.followerId,
        timestamp: oshaberi.timestamp,
        oshaberiId: oshaberi.id,
      },
    },
  }
  const res = await graphqlClient.mutate(timelineInput);
  console.log(res);
}

const listFollowRelationships = /* GraphQL */ `
  query ListFollowingRelationships(
    $followeeId: String
    $followerId: ModelStringKeyConditionInput
    $filter: ModelFollowingRelationshipFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFollowingRelationships(
      followeeId: $followeeId
      followerId: $followerId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        followeeId
        followerId
        timestamp
      }
      nextToken
    }
  }
`;

const createOshaberi = /* GraphQL */ `
  mutation createOshaberi(
    $input: CreateOshaberiInput!
    $condition: ModelOshaberiConditionInput
  ) {
    createOshaberi(input: $input, condition: $condition) {
        type
        id
        owner
        author
        timestamp
        imageKeys
        content
    }
  }
`;

const createTimeline = /* GraphQL */ `
  mutation CreateTimeline(
    $input: CreateTimelineInput!
    $condition: ModelTimelineConditionInput
  ) {
    createTimeline(input: $input, condition: $condition) {
      userId
      timestamp
      oshaberiId
      oshaberi {
        id
        owner
        author
        timestamp
        imageKeys
        content
      }
    }
  }
`;

const getOshaberi = /* GraphQL */`
  query GetOshaberi($id: ID!) {
    getOshaberi(id: $id) {
      id
      owner
      author
      timestamp
      imageKeys
      content
      parentOshaberiId
    }
  }
`;

const createNotification = /* GraphQL */`
    mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
    ) {
        createNotification(input: $input, condition: $condition) {
            userId
            timestamp
            fromUserId
            fromUser {
                userId
                nickname
                iconImageKey
                coverImageKey
                profile
            }
            oshaberiId
            haveRead
            action
        }
    }
`;

const dict = [
  //「です」群
  // ["ですよ", "だよ"], //仕込み（うまくいきませんわ）
  ["ですの", "です"],
  ["ですの", "ですのの"], //ですので, 元々ですの　の場合の修復
  ["ですが", "ですのが"], //ですが　の場合の修復
  ["ですし", "ですのし"], //ですし
  ["ですから", "ですのから"], //ですから
  ["ですの", "ですのか"], //ですか？
  ["ですかしら", "ですのっけ"],
  ["ですわよね", "ですのよね"], //（必須ではありませんの）
  ["んですの", "のですの"], //　ひっかけないか怪しい
  ["ものですの", "もんですの"], //上がひっかけた
  //「でした」群
  // ["でしたよ", "だったよ"], //仕込み（文中のときうまくいきませんの）
  ["でしたの", "でした"],
  ["でしたの", "でしたのの"], //でしたので, 元々でしたの
  ["でしたが", "でしたのが"], //でしたが
  ["でしたの", "でしたのか"], //でしたか？
  ["でしたし", "でしたのし"], //でしたし
  ["だったかしら", "でしたのっけ"],
  ["でしたわよね", "でしたのよね"],
  //「ます」群
  //["ますね", "るね"], //仕込み
  ["ますわ", "ます"],
  ["ますわ", "ますわわ"],
  ["ますの", "ますわの"], 　 //修復　ますので
  ["ますが", "ますわが"], 　 //修復　ますが
  ["ますけ", "ますわけ"], //ますけど、ますけれど
  ["ますの", "ますわか"], //修復　ますか？
  ["ますし", "ますわし"], //
  ["ますと", "ますわと"],
  ["ますよう", "ますわよう"], //くださいますよう等
  ["ますます", "ますわますわ"], //益々
  ["ありがとうございます", "ありがとうございますわ"], //修復
  //「ました」群
  //["ましたよ","たよ"], //仕込み
  ["ましたわ", "ました"],
  ["ましたわ", "ましたわわ"],
  ["ましたが", "ましたわが"],
  ["ましたけ", "ましたわけ"],
  ["ましたの", "ましたわの"],
  ["ましたし", "ましたわし"],
  ["ましたの", "ましたわか"], //修復　ましたか？
  ["ましたら", "ましたわら"],
  ["ありがとうございました", "ありがとうございましたわ"],
  //「ません」群
  ["ませんの", "ません"],
  ["ませんこと", "ませんのか"], //修復　ませんか→ませんこと
  ["ませんが", "ませんのが"], //
  ["ませんの", "ませんのの"], //
  ["ませんし", "ませんのし"], //
  ["ませんでした", "ませんのでした"], //修復
  ["ませんわよね", "ませんのよね"],
  //「かしら」群
  ["うかしら", "うか", "だろうか"],
  ["うかしら", "うかしらしら"],
  ["うか", "うかしらら"], //修復
  ["うかは", "うかしらは"], //どうかは
  ["うかが", "うかしらが"], //どうかが
  ["うかしら", "うかしらな"],
  ["うかどうか", "うかしらどうか"],
  ["かしら", "でしょうかしら"], //修復
  ["なのかしら", "なんかしら"], //なんでしょうか→なんかしら→なのかしら
  ["ますかしら", "ますのかしら"], //修復
  ["いうか", "いうかしら", "言うかしら"], //修復
  ["でしたかしら", "だっけ", "だったっけ"],
  //「くださいまし」群
  ["くださいまし", "ください", "下さい", "くださいましまし"],
  ["くださいます", "くださいまします"],
  ["くださいませ", "くださいましませ"],
  //「（単語）」
  ["わたくし", "わたし", "私", "僕", "俺"],
  ["ごめんあそばせ", "ごめん", "失礼しますわ", "失礼しましたわ"],
  ["ごめんあそばせ", "ごめんあそばせなさい", "ごめんあそばせね", "ごめんあそばせよ", "ごめんあそばせくださいまし"], //修復
  ["恐れ入ります", "すみません", "すいません", "恐れ入りますでしたの", "恐れ入りますでしたの"],
  ["ごきげんよう", "さようなら", "さよなら", "こんにちは", "おはようございます", "おはよう", "こんばんは"],
  ["お姉さま", "先輩", "みなさん", "皆さん"],
  ["お庭", "ツイッター", "Twitter", "twitter"],
  ["（うふふ）", "（笑）"],
  ["おハーブ生えますわ", "草生える", "草生えた"],
  // 下品語
  ["おしも", "くそ", "クソ", "うんち", "うんこ"],
  ["お手洗い", "トイレ", "便所"],
  ["いけない", "だめ", "ダメ"],
  // 
  ["さま", "様", "君", "くん", "さん"],
  // 敬語
  ["申す", "言う"],
  ["なさる", "する"],
  ["いらっしゃる", "来る", "おる", "いる"],
  ["お聞きになって", "聞いて"],
  ["伺う", "聞く"],
  ["伺った", "聞いた", "きいた"],
  ["存ずる", "思う"],
  ["存じ上げる", "知っている", "知ってる"],
  ["頂戴する", "もらう"],
  ["頂戴した", "もらった"],
  ["拝見する", "見る"],
  ["拝見した", "見た"],
  ["頂く", "食べる", "たべる", "飲む", "のむ"],
  ["頂いた", "食べた", "たべた", "のんだ", "のんだ"],
  ["お会いする", "会う"],
  ["お会いした", "会った"],
];