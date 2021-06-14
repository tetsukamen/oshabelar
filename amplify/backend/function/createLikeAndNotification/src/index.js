/* Amplify Params - DO NOT EDIT
    var environment = process.env.ENV
    var region = process.env.REGION
    var apiGraphqlapiGraphQLAPIIdOutput = process.env.API_OSHABELAR_GRAPHQLAPIIDOUTPUT
    var apiGraphqlapiGraphQLAPIEndpointOutput = process.env.API_OSHABELAR_GRAPHQLAPIENDPOINTOUTPUT
Amplify Params - DO NOT EDIT */

const AWSAppSyncClient = require('aws-appsync').default;
const gql = require('graphql-tag');
global.fetch = require('node-fetch');

let graphqlClient;

exports.handler = async (event) => {
    // TODO implement
    console.log(event)
    let env;
    let graphql_auth;

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

    // create like
    const likeInput = {
        mutation: gql(createLike),
        variables: {
            input: {
                userId: event.identity.username,
                timestamp: Math.floor(Date.now() / 1000),
                oshaberiId: event.arguments.oshaberiId,
            },
        },
    };
    let res = await graphqlClient.mutate(likeInput);
    console.log(res);
    const like = res.data.createLike;

    // get oshaberi author
    const oshaberiAuthor = like.oshaberi.author;
    console.log(oshaberiAuthor);

    // create notification
    const notificationInput = {
        mutation: gql(createNotification),
        variables: {
            input: {
                userId: oshaberiAuthor,
                timestamp: Math.floor(Date.now() / 1000),
                fromUserId: event.identity.username,
                oshaberiId: event.arguments.oshaberiId,
                haveRead: false,
                action: event.arguments.action,
            }
        }
    }
    res = await graphqlClient.mutate(notificationInput);
    console.log(res);
    const notification = res.data.createNotification;

    return notification;
};

const createLike = /* GraphQL */`
    mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
    ) {
    createLike(input: $input, condition: $condition) {
        userId
        timestamp
        oshaberiId
        userInfo {
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
        }
        oshaberi {
            id
            owner
            author
            timestamp
            imageKeys
            content
            parentOshaberiId
            userInfo {
                userId
                nickname
                iconImageKey
                coverImageKey
                profile
            }
            replyOshaberi {
                nextToken
            }
            like {
                nextToken
            }
        }
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

