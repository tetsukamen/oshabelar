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


  //post oshaberi to the origin
  const oshaberiInput = {
    mutation: gql(createOshaberi),
    variables: {
      input: {
        timestamp: Math.floor(Date.now() / 1000),
        owner: event.identity.username,
        author: event.identity.username,
        content: event.arguments.content,
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

  // end up if this is child oshaberi
  if (event.arguments.parentOshaberiId) {
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