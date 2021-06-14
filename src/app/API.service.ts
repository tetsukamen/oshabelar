/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type Oshaberi = {
  __typename: "Oshaberi";
  id?: string | null;
  owner: string;
  author: string;
  timestamp: number;
  imageKeys?: Array<string | null> | null;
  content: string;
  parentOshaberiId?: string | null;
  userInfo?: Userinfo | null;
  replyOshaberi?: ModelOshaberiConnection | null;
  like?: ModelLikeConnection | null;
};

export type Userinfo = {
  __typename: "Userinfo";
  userId: string;
  nickname?: string | null;
  iconImageKey?: string | null;
  coverImageKey?: string | null;
  profile?: string | null;
};

export type ModelOshaberiConnection = {
  __typename: "ModelOshaberiConnection";
  items?: Array<Oshaberi | null> | null;
  nextToken?: string | null;
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection";
  items?: Array<Like | null> | null;
  nextToken?: string | null;
};

export type Like = {
  __typename: "Like";
  userId: string;
  timestamp: number;
  oshaberiId: string;
  userInfo?: Userinfo | null;
  oshaberi?: Oshaberi | null;
};

export type UpdateUserinfoInput = {
  userId: string;
  nickname?: string | null;
  iconImageKey?: string | null;
  coverImageKey?: string | null;
  profile?: string | null;
};

export type ModelUserinfoConditionInput = {
  nickname?: ModelStringInput | null;
  iconImageKey?: ModelStringInput | null;
  coverImageKey?: ModelStringInput | null;
  profile?: ModelStringInput | null;
  and?: Array<ModelUserinfoConditionInput | null> | null;
  or?: Array<ModelUserinfoConditionInput | null> | null;
  not?: ModelUserinfoConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type CreateFollowingRelationshipInput = {
  followeeId: string;
  followerId: string;
  timestamp: number;
};

export type ModelFollowingRelationshipConditionInput = {
  timestamp?: ModelIntInput | null;
  and?: Array<ModelFollowingRelationshipConditionInput | null> | null;
  or?: Array<ModelFollowingRelationshipConditionInput | null> | null;
  not?: ModelFollowingRelationshipConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type FollowingRelationship = {
  __typename: "FollowingRelationship";
  followeeId: string;
  followerId: string;
  timestamp: number;
  followee?: Userinfo | null;
  follower?: Userinfo | null;
};

export type DeleteFollowingRelationshipInput = {
  followeeId: string;
  followerId: string;
};

export type UpdateNotificationInput = {
  userId: string;
  timestamp: number;
  fromUserId?: string | null;
  oshaberiId?: string | null;
  haveRead?: boolean | null;
  action?: string | null;
};

export type ModelNotificationConditionInput = {
  fromUserId?: ModelStringInput | null;
  oshaberiId?: ModelStringInput | null;
  haveRead?: ModelBooleanInput | null;
  action?: ModelStringInput | null;
  and?: Array<ModelNotificationConditionInput | null> | null;
  or?: Array<ModelNotificationConditionInput | null> | null;
  not?: ModelNotificationConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Notification = {
  __typename: "Notification";
  userId: string;
  timestamp: number;
  fromUserId: string;
  oshaberiId?: string | null;
  haveRead: boolean;
  action: string;
  fromUser?: Userinfo | null;
};

export type CreateUserinfoInput = {
  userId: string;
  nickname?: string | null;
  iconImageKey?: string | null;
  coverImageKey?: string | null;
  profile?: string | null;
};

export type CreateOshaberiInput = {
  id?: string | null;
  owner: string;
  author: string;
  timestamp: number;
  imageKeys?: Array<string | null> | null;
  content: string;
  parentOshaberiId?: string | null;
};

export type ModelOshaberiConditionInput = {
  author?: ModelStringInput | null;
  timestamp?: ModelIntInput | null;
  imageKeys?: ModelStringInput | null;
  content?: ModelStringInput | null;
  parentOshaberiId?: ModelIDInput | null;
  and?: Array<ModelOshaberiConditionInput | null> | null;
  or?: Array<ModelOshaberiConditionInput | null> | null;
  not?: ModelOshaberiConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateTimelineInput = {
  userId: string;
  timestamp: number;
  oshaberiId: string;
};

export type ModelTimelineConditionInput = {
  oshaberiId?: ModelIDInput | null;
  and?: Array<ModelTimelineConditionInput | null> | null;
  or?: Array<ModelTimelineConditionInput | null> | null;
  not?: ModelTimelineConditionInput | null;
};

export type Timeline = {
  __typename: "Timeline";
  userId: string;
  timestamp: number;
  oshaberiId: string;
  oshaberi?: Oshaberi | null;
};

export type CreateNotificationInput = {
  userId: string;
  timestamp: number;
  fromUserId: string;
  oshaberiId?: string | null;
  haveRead: boolean;
  action: string;
};

export type CreateLikeInput = {
  userId: string;
  timestamp: number;
  oshaberiId: string;
};

export type ModelLikeConditionInput = {
  timestamp?: ModelIntInput | null;
  and?: Array<ModelLikeConditionInput | null> | null;
  or?: Array<ModelLikeConditionInput | null> | null;
  not?: ModelLikeConditionInput | null;
};

export type DeleteLikeInput = {
  userId: string;
  oshaberiId: string;
};

export type ModelIntKeyConditionInput = {
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelTimelineFilterInput = {
  userId?: ModelStringInput | null;
  timestamp?: ModelIntInput | null;
  oshaberiId?: ModelIDInput | null;
  and?: Array<ModelTimelineFilterInput | null> | null;
  or?: Array<ModelTimelineFilterInput | null> | null;
  not?: ModelTimelineFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelTimelineConnection = {
  __typename: "ModelTimelineConnection";
  items?: Array<Timeline | null> | null;
  nextToken?: string | null;
};

export type ModelNotificationFilterInput = {
  userId?: ModelStringInput | null;
  timestamp?: ModelIntInput | null;
  fromUserId?: ModelStringInput | null;
  oshaberiId?: ModelStringInput | null;
  haveRead?: ModelBooleanInput | null;
  action?: ModelStringInput | null;
  and?: Array<ModelNotificationFilterInput | null> | null;
  or?: Array<ModelNotificationFilterInput | null> | null;
  not?: ModelNotificationFilterInput | null;
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection";
  items?: Array<Notification | null> | null;
  nextToken?: string | null;
};

export type ModelUserinfoFilterInput = {
  userId?: ModelStringInput | null;
  nickname?: ModelStringInput | null;
  iconImageKey?: ModelStringInput | null;
  coverImageKey?: ModelStringInput | null;
  profile?: ModelStringInput | null;
  and?: Array<ModelUserinfoFilterInput | null> | null;
  or?: Array<ModelUserinfoFilterInput | null> | null;
  not?: ModelUserinfoFilterInput | null;
};

export type ModelUserinfoConnection = {
  __typename: "ModelUserinfoConnection";
  items?: Array<Userinfo | null> | null;
  nextToken?: string | null;
};

export type ModelOshaberiFilterInput = {
  id?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  author?: ModelStringInput | null;
  timestamp?: ModelIntInput | null;
  imageKeys?: ModelStringInput | null;
  content?: ModelStringInput | null;
  parentOshaberiId?: ModelIDInput | null;
  and?: Array<ModelOshaberiFilterInput | null> | null;
  or?: Array<ModelOshaberiFilterInput | null> | null;
  not?: ModelOshaberiFilterInput | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelFollowingRelationshipFilterInput = {
  followeeId?: ModelStringInput | null;
  followerId?: ModelStringInput | null;
  timestamp?: ModelIntInput | null;
  and?: Array<ModelFollowingRelationshipFilterInput | null> | null;
  or?: Array<ModelFollowingRelationshipFilterInput | null> | null;
  not?: ModelFollowingRelationshipFilterInput | null;
};

export type ModelFollowingRelationshipConnection = {
  __typename: "ModelFollowingRelationshipConnection";
  items?: Array<FollowingRelationship | null> | null;
  nextToken?: string | null;
};

export type ModelIDKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelLikeFilterInput = {
  userId?: ModelStringInput | null;
  timestamp?: ModelIntInput | null;
  oshaberiId?: ModelIDInput | null;
  and?: Array<ModelLikeFilterInput | null> | null;
  or?: Array<ModelLikeFilterInput | null> | null;
  not?: ModelLikeFilterInput | null;
};

export type CreateOshaberiAndTimelineMutation = {
  __typename: "Oshaberi";
  id?: string | null;
  owner: string;
  author: string;
  timestamp: number;
  imageKeys?: Array<string | null> | null;
  content: string;
  parentOshaberiId?: string | null;
  userInfo?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
  replyOshaberi?: {
    __typename: "ModelOshaberiConnection";
    items?: Array<{
      __typename: "Oshaberi";
      id?: string | null;
      owner: string;
      author: string;
      timestamp: number;
      imageKeys?: Array<string | null> | null;
      content: string;
      parentOshaberiId?: string | null;
      userInfo?: {
        __typename: "Userinfo";
        userId: string;
        nickname?: string | null;
        iconImageKey?: string | null;
        coverImageKey?: string | null;
        profile?: string | null;
      } | null;
      replyOshaberi?: {
        __typename: "ModelOshaberiConnection";
        items?: Array<{
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      like?: {
        __typename: "ModelLikeConnection";
        items?: Array<{
          __typename: "Like";
          userId: string;
          timestamp: number;
          oshaberiId: string;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  like?: {
    __typename: "ModelLikeConnection";
    items?: Array<{
      __typename: "Like";
      userId: string;
      timestamp: number;
      oshaberiId: string;
      userInfo?: {
        __typename: "Userinfo";
        userId: string;
        nickname?: string | null;
        iconImageKey?: string | null;
        coverImageKey?: string | null;
        profile?: string | null;
      } | null;
      oshaberi?: {
        __typename: "Oshaberi";
        id?: string | null;
        owner: string;
        author: string;
        timestamp: number;
        imageKeys?: Array<string | null> | null;
        content: string;
        parentOshaberiId?: string | null;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        replyOshaberi?: {
          __typename: "ModelOshaberiConnection";
          nextToken?: string | null;
        } | null;
        like?: {
          __typename: "ModelLikeConnection";
          nextToken?: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type CreateLikeAndNotificationMutation = {
  __typename: "Like";
  userId: string;
  timestamp: number;
  oshaberiId: string;
  userInfo?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
  oshaberi?: {
    __typename: "Oshaberi";
    id?: string | null;
    owner: string;
    author: string;
    timestamp: number;
    imageKeys?: Array<string | null> | null;
    content: string;
    parentOshaberiId?: string | null;
    userInfo?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    replyOshaberi?: {
      __typename: "ModelOshaberiConnection";
      items?: Array<{
        __typename: "Oshaberi";
        id?: string | null;
        owner: string;
        author: string;
        timestamp: number;
        imageKeys?: Array<string | null> | null;
        content: string;
        parentOshaberiId?: string | null;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        replyOshaberi?: {
          __typename: "ModelOshaberiConnection";
          nextToken?: string | null;
        } | null;
        like?: {
          __typename: "ModelLikeConnection";
          nextToken?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    like?: {
      __typename: "ModelLikeConnection";
      items?: Array<{
        __typename: "Like";
        userId: string;
        timestamp: number;
        oshaberiId: string;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        oshaberi?: {
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
};

export type UpdateUserInfoMutation = {
  __typename: "Userinfo";
  userId: string;
  nickname?: string | null;
  iconImageKey?: string | null;
  coverImageKey?: string | null;
  profile?: string | null;
};

export type CreateFollowRelationshipMutation = {
  __typename: "FollowingRelationship";
  followeeId: string;
  followerId: string;
  timestamp: number;
  followee?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
  follower?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
};

export type DeleteFollowRelationshipMutation = {
  __typename: "FollowingRelationship";
  followeeId: string;
  followerId: string;
  timestamp: number;
  followee?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
  follower?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
};

export type UpdateNotificationMutation = {
  __typename: "Notification";
  userId: string;
  timestamp: number;
  fromUserId: string;
  oshaberiId?: string | null;
  haveRead: boolean;
  action: string;
  fromUser?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
};

export type CreateUserInfoMutation = {
  __typename: "Userinfo";
  userId: string;
  nickname?: string | null;
  iconImageKey?: string | null;
  coverImageKey?: string | null;
  profile?: string | null;
};

export type CreateOshaberiMutation = {
  __typename: "Oshaberi";
  id?: string | null;
  owner: string;
  author: string;
  timestamp: number;
  imageKeys?: Array<string | null> | null;
  content: string;
  parentOshaberiId?: string | null;
  userInfo?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
  replyOshaberi?: {
    __typename: "ModelOshaberiConnection";
    items?: Array<{
      __typename: "Oshaberi";
      id?: string | null;
      owner: string;
      author: string;
      timestamp: number;
      imageKeys?: Array<string | null> | null;
      content: string;
      parentOshaberiId?: string | null;
      userInfo?: {
        __typename: "Userinfo";
        userId: string;
        nickname?: string | null;
        iconImageKey?: string | null;
        coverImageKey?: string | null;
        profile?: string | null;
      } | null;
      replyOshaberi?: {
        __typename: "ModelOshaberiConnection";
        items?: Array<{
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      like?: {
        __typename: "ModelLikeConnection";
        items?: Array<{
          __typename: "Like";
          userId: string;
          timestamp: number;
          oshaberiId: string;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  like?: {
    __typename: "ModelLikeConnection";
    items?: Array<{
      __typename: "Like";
      userId: string;
      timestamp: number;
      oshaberiId: string;
      userInfo?: {
        __typename: "Userinfo";
        userId: string;
        nickname?: string | null;
        iconImageKey?: string | null;
        coverImageKey?: string | null;
        profile?: string | null;
      } | null;
      oshaberi?: {
        __typename: "Oshaberi";
        id?: string | null;
        owner: string;
        author: string;
        timestamp: number;
        imageKeys?: Array<string | null> | null;
        content: string;
        parentOshaberiId?: string | null;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        replyOshaberi?: {
          __typename: "ModelOshaberiConnection";
          nextToken?: string | null;
        } | null;
        like?: {
          __typename: "ModelLikeConnection";
          nextToken?: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type CreateTimelineMutation = {
  __typename: "Timeline";
  userId: string;
  timestamp: number;
  oshaberiId: string;
  oshaberi?: {
    __typename: "Oshaberi";
    id?: string | null;
    owner: string;
    author: string;
    timestamp: number;
    imageKeys?: Array<string | null> | null;
    content: string;
    parentOshaberiId?: string | null;
    userInfo?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    replyOshaberi?: {
      __typename: "ModelOshaberiConnection";
      items?: Array<{
        __typename: "Oshaberi";
        id?: string | null;
        owner: string;
        author: string;
        timestamp: number;
        imageKeys?: Array<string | null> | null;
        content: string;
        parentOshaberiId?: string | null;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        replyOshaberi?: {
          __typename: "ModelOshaberiConnection";
          nextToken?: string | null;
        } | null;
        like?: {
          __typename: "ModelLikeConnection";
          nextToken?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    like?: {
      __typename: "ModelLikeConnection";
      items?: Array<{
        __typename: "Like";
        userId: string;
        timestamp: number;
        oshaberiId: string;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        oshaberi?: {
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
};

export type CreateNotificationMutation = {
  __typename: "Notification";
  userId: string;
  timestamp: number;
  fromUserId: string;
  oshaberiId?: string | null;
  haveRead: boolean;
  action: string;
  fromUser?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
};

export type CreateLikeMutation = {
  __typename: "Like";
  userId: string;
  timestamp: number;
  oshaberiId: string;
  userInfo?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
  oshaberi?: {
    __typename: "Oshaberi";
    id?: string | null;
    owner: string;
    author: string;
    timestamp: number;
    imageKeys?: Array<string | null> | null;
    content: string;
    parentOshaberiId?: string | null;
    userInfo?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    replyOshaberi?: {
      __typename: "ModelOshaberiConnection";
      items?: Array<{
        __typename: "Oshaberi";
        id?: string | null;
        owner: string;
        author: string;
        timestamp: number;
        imageKeys?: Array<string | null> | null;
        content: string;
        parentOshaberiId?: string | null;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        replyOshaberi?: {
          __typename: "ModelOshaberiConnection";
          nextToken?: string | null;
        } | null;
        like?: {
          __typename: "ModelLikeConnection";
          nextToken?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    like?: {
      __typename: "ModelLikeConnection";
      items?: Array<{
        __typename: "Like";
        userId: string;
        timestamp: number;
        oshaberiId: string;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        oshaberi?: {
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
};

export type DeleteLikeMutation = {
  __typename: "Like";
  userId: string;
  timestamp: number;
  oshaberiId: string;
  userInfo?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
  oshaberi?: {
    __typename: "Oshaberi";
    id?: string | null;
    owner: string;
    author: string;
    timestamp: number;
    imageKeys?: Array<string | null> | null;
    content: string;
    parentOshaberiId?: string | null;
    userInfo?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    replyOshaberi?: {
      __typename: "ModelOshaberiConnection";
      items?: Array<{
        __typename: "Oshaberi";
        id?: string | null;
        owner: string;
        author: string;
        timestamp: number;
        imageKeys?: Array<string | null> | null;
        content: string;
        parentOshaberiId?: string | null;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        replyOshaberi?: {
          __typename: "ModelOshaberiConnection";
          nextToken?: string | null;
        } | null;
        like?: {
          __typename: "ModelLikeConnection";
          nextToken?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    like?: {
      __typename: "ModelLikeConnection";
      items?: Array<{
        __typename: "Like";
        userId: string;
        timestamp: number;
        oshaberiId: string;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        oshaberi?: {
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
};

export type GetTimelineQuery = {
  __typename: "Timeline";
  userId: string;
  timestamp: number;
  oshaberiId: string;
  oshaberi?: {
    __typename: "Oshaberi";
    id?: string | null;
    owner: string;
    author: string;
    timestamp: number;
    imageKeys?: Array<string | null> | null;
    content: string;
    parentOshaberiId?: string | null;
    userInfo?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    replyOshaberi?: {
      __typename: "ModelOshaberiConnection";
      items?: Array<{
        __typename: "Oshaberi";
        id?: string | null;
        owner: string;
        author: string;
        timestamp: number;
        imageKeys?: Array<string | null> | null;
        content: string;
        parentOshaberiId?: string | null;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        replyOshaberi?: {
          __typename: "ModelOshaberiConnection";
          nextToken?: string | null;
        } | null;
        like?: {
          __typename: "ModelLikeConnection";
          nextToken?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    like?: {
      __typename: "ModelLikeConnection";
      items?: Array<{
        __typename: "Like";
        userId: string;
        timestamp: number;
        oshaberiId: string;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        oshaberi?: {
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
};

export type ListTimelinesQuery = {
  __typename: "ModelTimelineConnection";
  items?: Array<{
    __typename: "Timeline";
    userId: string;
    timestamp: number;
    oshaberiId: string;
    oshaberi?: {
      __typename: "Oshaberi";
      id?: string | null;
      owner: string;
      author: string;
      timestamp: number;
      imageKeys?: Array<string | null> | null;
      content: string;
      parentOshaberiId?: string | null;
      userInfo?: {
        __typename: "Userinfo";
        userId: string;
        nickname?: string | null;
        iconImageKey?: string | null;
        coverImageKey?: string | null;
        profile?: string | null;
      } | null;
      replyOshaberi?: {
        __typename: "ModelOshaberiConnection";
        items?: Array<{
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      like?: {
        __typename: "ModelLikeConnection";
        items?: Array<{
          __typename: "Like";
          userId: string;
          timestamp: number;
          oshaberiId: string;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetNotificationQuery = {
  __typename: "Notification";
  userId: string;
  timestamp: number;
  fromUserId: string;
  oshaberiId?: string | null;
  haveRead: boolean;
  action: string;
  fromUser?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
};

export type ListNotificationsQuery = {
  __typename: "ModelNotificationConnection";
  items?: Array<{
    __typename: "Notification";
    userId: string;
    timestamp: number;
    fromUserId: string;
    oshaberiId?: string | null;
    haveRead: boolean;
    action: string;
    fromUser?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetUserinfoQuery = {
  __typename: "Userinfo";
  userId: string;
  nickname?: string | null;
  iconImageKey?: string | null;
  coverImageKey?: string | null;
  profile?: string | null;
};

export type ListUserinfosQuery = {
  __typename: "ModelUserinfoConnection";
  items?: Array<{
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetOshaberiQuery = {
  __typename: "Oshaberi";
  id?: string | null;
  owner: string;
  author: string;
  timestamp: number;
  imageKeys?: Array<string | null> | null;
  content: string;
  parentOshaberiId?: string | null;
  userInfo?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
  replyOshaberi?: {
    __typename: "ModelOshaberiConnection";
    items?: Array<{
      __typename: "Oshaberi";
      id?: string | null;
      owner: string;
      author: string;
      timestamp: number;
      imageKeys?: Array<string | null> | null;
      content: string;
      parentOshaberiId?: string | null;
      userInfo?: {
        __typename: "Userinfo";
        userId: string;
        nickname?: string | null;
        iconImageKey?: string | null;
        coverImageKey?: string | null;
        profile?: string | null;
      } | null;
      replyOshaberi?: {
        __typename: "ModelOshaberiConnection";
        items?: Array<{
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      like?: {
        __typename: "ModelLikeConnection";
        items?: Array<{
          __typename: "Like";
          userId: string;
          timestamp: number;
          oshaberiId: string;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  like?: {
    __typename: "ModelLikeConnection";
    items?: Array<{
      __typename: "Like";
      userId: string;
      timestamp: number;
      oshaberiId: string;
      userInfo?: {
        __typename: "Userinfo";
        userId: string;
        nickname?: string | null;
        iconImageKey?: string | null;
        coverImageKey?: string | null;
        profile?: string | null;
      } | null;
      oshaberi?: {
        __typename: "Oshaberi";
        id?: string | null;
        owner: string;
        author: string;
        timestamp: number;
        imageKeys?: Array<string | null> | null;
        content: string;
        parentOshaberiId?: string | null;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        replyOshaberi?: {
          __typename: "ModelOshaberiConnection";
          nextToken?: string | null;
        } | null;
        like?: {
          __typename: "ModelLikeConnection";
          nextToken?: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type ListOshaberisQuery = {
  __typename: "ModelOshaberiConnection";
  items?: Array<{
    __typename: "Oshaberi";
    id?: string | null;
    owner: string;
    author: string;
    timestamp: number;
    imageKeys?: Array<string | null> | null;
    content: string;
    parentOshaberiId?: string | null;
    userInfo?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    replyOshaberi?: {
      __typename: "ModelOshaberiConnection";
      items?: Array<{
        __typename: "Oshaberi";
        id?: string | null;
        owner: string;
        author: string;
        timestamp: number;
        imageKeys?: Array<string | null> | null;
        content: string;
        parentOshaberiId?: string | null;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        replyOshaberi?: {
          __typename: "ModelOshaberiConnection";
          nextToken?: string | null;
        } | null;
        like?: {
          __typename: "ModelLikeConnection";
          nextToken?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    like?: {
      __typename: "ModelLikeConnection";
      items?: Array<{
        __typename: "Like";
        userId: string;
        timestamp: number;
        oshaberiId: string;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        oshaberi?: {
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type ListOshaberisBySpecificOwnerQuery = {
  __typename: "ModelOshaberiConnection";
  items?: Array<{
    __typename: "Oshaberi";
    id?: string | null;
    owner: string;
    author: string;
    timestamp: number;
    imageKeys?: Array<string | null> | null;
    content: string;
    parentOshaberiId?: string | null;
    userInfo?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    replyOshaberi?: {
      __typename: "ModelOshaberiConnection";
      items?: Array<{
        __typename: "Oshaberi";
        id?: string | null;
        owner: string;
        author: string;
        timestamp: number;
        imageKeys?: Array<string | null> | null;
        content: string;
        parentOshaberiId?: string | null;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        replyOshaberi?: {
          __typename: "ModelOshaberiConnection";
          nextToken?: string | null;
        } | null;
        like?: {
          __typename: "ModelLikeConnection";
          nextToken?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    like?: {
      __typename: "ModelLikeConnection";
      items?: Array<{
        __typename: "Like";
        userId: string;
        timestamp: number;
        oshaberiId: string;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        oshaberi?: {
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type ListOshaberiByParentOshaberiQuery = {
  __typename: "ModelOshaberiConnection";
  items?: Array<{
    __typename: "Oshaberi";
    id?: string | null;
    owner: string;
    author: string;
    timestamp: number;
    imageKeys?: Array<string | null> | null;
    content: string;
    parentOshaberiId?: string | null;
    userInfo?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    replyOshaberi?: {
      __typename: "ModelOshaberiConnection";
      items?: Array<{
        __typename: "Oshaberi";
        id?: string | null;
        owner: string;
        author: string;
        timestamp: number;
        imageKeys?: Array<string | null> | null;
        content: string;
        parentOshaberiId?: string | null;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        replyOshaberi?: {
          __typename: "ModelOshaberiConnection";
          nextToken?: string | null;
        } | null;
        like?: {
          __typename: "ModelLikeConnection";
          nextToken?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    like?: {
      __typename: "ModelLikeConnection";
      items?: Array<{
        __typename: "Like";
        userId: string;
        timestamp: number;
        oshaberiId: string;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        oshaberi?: {
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetFollowingRelationshipQuery = {
  __typename: "FollowingRelationship";
  followeeId: string;
  followerId: string;
  timestamp: number;
  followee?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
  follower?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
};

export type ListFollowingRelationshipsQuery = {
  __typename: "ModelFollowingRelationshipConnection";
  items?: Array<{
    __typename: "FollowingRelationship";
    followeeId: string;
    followerId: string;
    timestamp: number;
    followee?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    follower?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type ListFollowingRelationshipByFolloweeQuery = {
  __typename: "ModelFollowingRelationshipConnection";
  items?: Array<{
    __typename: "FollowingRelationship";
    followeeId: string;
    followerId: string;
    timestamp: number;
    followee?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    follower?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type ListFollowingRelationshipByFollowerQuery = {
  __typename: "ModelFollowingRelationshipConnection";
  items?: Array<{
    __typename: "FollowingRelationship";
    followeeId: string;
    followerId: string;
    timestamp: number;
    followee?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    follower?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetLikeQuery = {
  __typename: "Like";
  userId: string;
  timestamp: number;
  oshaberiId: string;
  userInfo?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
  oshaberi?: {
    __typename: "Oshaberi";
    id?: string | null;
    owner: string;
    author: string;
    timestamp: number;
    imageKeys?: Array<string | null> | null;
    content: string;
    parentOshaberiId?: string | null;
    userInfo?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    replyOshaberi?: {
      __typename: "ModelOshaberiConnection";
      items?: Array<{
        __typename: "Oshaberi";
        id?: string | null;
        owner: string;
        author: string;
        timestamp: number;
        imageKeys?: Array<string | null> | null;
        content: string;
        parentOshaberiId?: string | null;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        replyOshaberi?: {
          __typename: "ModelOshaberiConnection";
          nextToken?: string | null;
        } | null;
        like?: {
          __typename: "ModelLikeConnection";
          nextToken?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    like?: {
      __typename: "ModelLikeConnection";
      items?: Array<{
        __typename: "Like";
        userId: string;
        timestamp: number;
        oshaberiId: string;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        oshaberi?: {
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
};

export type ListLikesQuery = {
  __typename: "ModelLikeConnection";
  items?: Array<{
    __typename: "Like";
    userId: string;
    timestamp: number;
    oshaberiId: string;
    userInfo?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    oshaberi?: {
      __typename: "Oshaberi";
      id?: string | null;
      owner: string;
      author: string;
      timestamp: number;
      imageKeys?: Array<string | null> | null;
      content: string;
      parentOshaberiId?: string | null;
      userInfo?: {
        __typename: "Userinfo";
        userId: string;
        nickname?: string | null;
        iconImageKey?: string | null;
        coverImageKey?: string | null;
        profile?: string | null;
      } | null;
      replyOshaberi?: {
        __typename: "ModelOshaberiConnection";
        items?: Array<{
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      like?: {
        __typename: "ModelLikeConnection";
        items?: Array<{
          __typename: "Like";
          userId: string;
          timestamp: number;
          oshaberiId: string;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type ListLikesByOshaberiIdQuery = {
  __typename: "ModelLikeConnection";
  items?: Array<{
    __typename: "Like";
    userId: string;
    timestamp: number;
    oshaberiId: string;
    userInfo?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    oshaberi?: {
      __typename: "Oshaberi";
      id?: string | null;
      owner: string;
      author: string;
      timestamp: number;
      imageKeys?: Array<string | null> | null;
      content: string;
      parentOshaberiId?: string | null;
      userInfo?: {
        __typename: "Userinfo";
        userId: string;
        nickname?: string | null;
        iconImageKey?: string | null;
        coverImageKey?: string | null;
        profile?: string | null;
      } | null;
      replyOshaberi?: {
        __typename: "ModelOshaberiConnection";
        items?: Array<{
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      like?: {
        __typename: "ModelLikeConnection";
        items?: Array<{
          __typename: "Like";
          userId: string;
          timestamp: number;
          oshaberiId: string;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type ListLikesBySpecificUserIdQuery = {
  __typename: "ModelLikeConnection";
  items?: Array<{
    __typename: "Like";
    userId: string;
    timestamp: number;
    oshaberiId: string;
    userInfo?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    oshaberi?: {
      __typename: "Oshaberi";
      id?: string | null;
      owner: string;
      author: string;
      timestamp: number;
      imageKeys?: Array<string | null> | null;
      content: string;
      parentOshaberiId?: string | null;
      userInfo?: {
        __typename: "Userinfo";
        userId: string;
        nickname?: string | null;
        iconImageKey?: string | null;
        coverImageKey?: string | null;
        profile?: string | null;
      } | null;
      replyOshaberi?: {
        __typename: "ModelOshaberiConnection";
        items?: Array<{
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      like?: {
        __typename: "ModelLikeConnection";
        items?: Array<{
          __typename: "Like";
          userId: string;
          timestamp: number;
          oshaberiId: string;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateOshaberiSubscription = {
  __typename: "Oshaberi";
  id?: string | null;
  owner: string;
  author: string;
  timestamp: number;
  imageKeys?: Array<string | null> | null;
  content: string;
  parentOshaberiId?: string | null;
  userInfo?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
  replyOshaberi?: {
    __typename: "ModelOshaberiConnection";
    items?: Array<{
      __typename: "Oshaberi";
      id?: string | null;
      owner: string;
      author: string;
      timestamp: number;
      imageKeys?: Array<string | null> | null;
      content: string;
      parentOshaberiId?: string | null;
      userInfo?: {
        __typename: "Userinfo";
        userId: string;
        nickname?: string | null;
        iconImageKey?: string | null;
        coverImageKey?: string | null;
        profile?: string | null;
      } | null;
      replyOshaberi?: {
        __typename: "ModelOshaberiConnection";
        items?: Array<{
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      like?: {
        __typename: "ModelLikeConnection";
        items?: Array<{
          __typename: "Like";
          userId: string;
          timestamp: number;
          oshaberiId: string;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  like?: {
    __typename: "ModelLikeConnection";
    items?: Array<{
      __typename: "Like";
      userId: string;
      timestamp: number;
      oshaberiId: string;
      userInfo?: {
        __typename: "Userinfo";
        userId: string;
        nickname?: string | null;
        iconImageKey?: string | null;
        coverImageKey?: string | null;
        profile?: string | null;
      } | null;
      oshaberi?: {
        __typename: "Oshaberi";
        id?: string | null;
        owner: string;
        author: string;
        timestamp: number;
        imageKeys?: Array<string | null> | null;
        content: string;
        parentOshaberiId?: string | null;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        replyOshaberi?: {
          __typename: "ModelOshaberiConnection";
          nextToken?: string | null;
        } | null;
        like?: {
          __typename: "ModelLikeConnection";
          nextToken?: string | null;
        } | null;
      } | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreateTimelineSubscription = {
  __typename: "Timeline";
  userId: string;
  timestamp: number;
  oshaberiId: string;
  oshaberi?: {
    __typename: "Oshaberi";
    id?: string | null;
    owner: string;
    author: string;
    timestamp: number;
    imageKeys?: Array<string | null> | null;
    content: string;
    parentOshaberiId?: string | null;
    userInfo?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    replyOshaberi?: {
      __typename: "ModelOshaberiConnection";
      items?: Array<{
        __typename: "Oshaberi";
        id?: string | null;
        owner: string;
        author: string;
        timestamp: number;
        imageKeys?: Array<string | null> | null;
        content: string;
        parentOshaberiId?: string | null;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        replyOshaberi?: {
          __typename: "ModelOshaberiConnection";
          nextToken?: string | null;
        } | null;
        like?: {
          __typename: "ModelLikeConnection";
          nextToken?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    like?: {
      __typename: "ModelLikeConnection";
      items?: Array<{
        __typename: "Like";
        userId: string;
        timestamp: number;
        oshaberiId: string;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        oshaberi?: {
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
};

export type OnCreateNotificationSubscription = {
  __typename: "Notification";
  userId: string;
  timestamp: number;
  fromUserId: string;
  oshaberiId?: string | null;
  haveRead: boolean;
  action: string;
  fromUser?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
};

export type OnUpdateNotificationSubscription = {
  __typename: "Notification";
  userId: string;
  timestamp: number;
  fromUserId: string;
  oshaberiId?: string | null;
  haveRead: boolean;
  action: string;
  fromUser?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
};

export type OnCreateUserinfoSubscription = {
  __typename: "Userinfo";
  userId: string;
  nickname?: string | null;
  iconImageKey?: string | null;
  coverImageKey?: string | null;
  profile?: string | null;
};

export type OnUpdateUserinfoSubscription = {
  __typename: "Userinfo";
  userId: string;
  nickname?: string | null;
  iconImageKey?: string | null;
  coverImageKey?: string | null;
  profile?: string | null;
};

export type OnCreateFollowingRelationshipSubscription = {
  __typename: "FollowingRelationship";
  followeeId: string;
  followerId: string;
  timestamp: number;
  followee?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
  follower?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
};

export type OnDeleteFollowingRelationshipSubscription = {
  __typename: "FollowingRelationship";
  followeeId: string;
  followerId: string;
  timestamp: number;
  followee?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
  follower?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
};

export type OnCreateLikeSubscription = {
  __typename: "Like";
  userId: string;
  timestamp: number;
  oshaberiId: string;
  userInfo?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
  oshaberi?: {
    __typename: "Oshaberi";
    id?: string | null;
    owner: string;
    author: string;
    timestamp: number;
    imageKeys?: Array<string | null> | null;
    content: string;
    parentOshaberiId?: string | null;
    userInfo?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    replyOshaberi?: {
      __typename: "ModelOshaberiConnection";
      items?: Array<{
        __typename: "Oshaberi";
        id?: string | null;
        owner: string;
        author: string;
        timestamp: number;
        imageKeys?: Array<string | null> | null;
        content: string;
        parentOshaberiId?: string | null;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        replyOshaberi?: {
          __typename: "ModelOshaberiConnection";
          nextToken?: string | null;
        } | null;
        like?: {
          __typename: "ModelLikeConnection";
          nextToken?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    like?: {
      __typename: "ModelLikeConnection";
      items?: Array<{
        __typename: "Like";
        userId: string;
        timestamp: number;
        oshaberiId: string;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        oshaberi?: {
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
};

export type OnDeleteLikeSubscription = {
  __typename: "Like";
  userId: string;
  timestamp: number;
  oshaberiId: string;
  userInfo?: {
    __typename: "Userinfo";
    userId: string;
    nickname?: string | null;
    iconImageKey?: string | null;
    coverImageKey?: string | null;
    profile?: string | null;
  } | null;
  oshaberi?: {
    __typename: "Oshaberi";
    id?: string | null;
    owner: string;
    author: string;
    timestamp: number;
    imageKeys?: Array<string | null> | null;
    content: string;
    parentOshaberiId?: string | null;
    userInfo?: {
      __typename: "Userinfo";
      userId: string;
      nickname?: string | null;
      iconImageKey?: string | null;
      coverImageKey?: string | null;
      profile?: string | null;
    } | null;
    replyOshaberi?: {
      __typename: "ModelOshaberiConnection";
      items?: Array<{
        __typename: "Oshaberi";
        id?: string | null;
        owner: string;
        author: string;
        timestamp: number;
        imageKeys?: Array<string | null> | null;
        content: string;
        parentOshaberiId?: string | null;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        replyOshaberi?: {
          __typename: "ModelOshaberiConnection";
          nextToken?: string | null;
        } | null;
        like?: {
          __typename: "ModelLikeConnection";
          nextToken?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    like?: {
      __typename: "ModelLikeConnection";
      items?: Array<{
        __typename: "Like";
        userId: string;
        timestamp: number;
        oshaberiId: string;
        userInfo?: {
          __typename: "Userinfo";
          userId: string;
          nickname?: string | null;
          iconImageKey?: string | null;
          coverImageKey?: string | null;
          profile?: string | null;
        } | null;
        oshaberi?: {
          __typename: "Oshaberi";
          id?: string | null;
          owner: string;
          author: string;
          timestamp: number;
          imageKeys?: Array<string | null> | null;
          content: string;
          parentOshaberiId?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateOshaberiAndTimeline(
    content: string,
    imageKeys?: Array<string | null>,
    parentOshaberiId?: string
  ): Promise<CreateOshaberiAndTimelineMutation> {
    const statement = `mutation CreateOshaberiAndTimeline($content: String!, $imageKeys: [String], $parentOshaberiId: String) {
        createOshaberiAndTimeline(content: $content, imageKeys: $imageKeys, parentOshaberiId: $parentOshaberiId) {
          __typename
          id
          owner
          author
          timestamp
          imageKeys
          content
          parentOshaberiId
          userInfo {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
          replyOshaberi {
            __typename
            items {
              __typename
              id
              owner
              author
              timestamp
              imageKeys
              content
              parentOshaberiId
              userInfo {
                __typename
                userId
                nickname
                iconImageKey
                coverImageKey
                profile
              }
              replyOshaberi {
                __typename
                items {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
                nextToken
              }
              like {
                __typename
                items {
                  __typename
                  userId
                  timestamp
                  oshaberiId
                }
                nextToken
              }
            }
            nextToken
          }
          like {
            __typename
            items {
              __typename
              userId
              timestamp
              oshaberiId
              userInfo {
                __typename
                userId
                nickname
                iconImageKey
                coverImageKey
                profile
              }
              oshaberi {
                __typename
                id
                owner
                author
                timestamp
                imageKeys
                content
                parentOshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                replyOshaberi {
                  __typename
                  nextToken
                }
                like {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      content
    };
    if (imageKeys) {
      gqlAPIServiceArguments.imageKeys = imageKeys;
    }
    if (parentOshaberiId) {
      gqlAPIServiceArguments.parentOshaberiId = parentOshaberiId;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOshaberiAndTimelineMutation>(
      response.data.createOshaberiAndTimeline
    );
  }
  async CreateLikeAndNotification(
    oshaberiId: string,
    action: string
  ): Promise<CreateLikeAndNotificationMutation> {
    const statement = `mutation CreateLikeAndNotification($oshaberiId: String!, $action: String!) {
        createLikeAndNotification(oshaberiId: $oshaberiId, action: $action) {
          __typename
          userId
          timestamp
          oshaberiId
          userInfo {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
          oshaberi {
            __typename
            id
            owner
            author
            timestamp
            imageKeys
            content
            parentOshaberiId
            userInfo {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            replyOshaberi {
              __typename
              items {
                __typename
                id
                owner
                author
                timestamp
                imageKeys
                content
                parentOshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                replyOshaberi {
                  __typename
                  nextToken
                }
                like {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
            like {
              __typename
              items {
                __typename
                userId
                timestamp
                oshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                oshaberi {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      oshaberiId,
      action
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLikeAndNotificationMutation>(
      response.data.createLikeAndNotification
    );
  }
  async UpdateUserInfo(
    input: UpdateUserinfoInput,
    condition?: ModelUserinfoConditionInput
  ): Promise<UpdateUserInfoMutation> {
    const statement = `mutation UpdateUserInfo($input: UpdateUserinfoInput!, $condition: ModelUserinfoConditionInput) {
        updateUserInfo(input: $input, condition: $condition) {
          __typename
          userId
          nickname
          iconImageKey
          coverImageKey
          profile
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserInfoMutation>response.data.updateUserInfo;
  }
  async CreateFollowRelationship(
    input: CreateFollowingRelationshipInput,
    condition?: ModelFollowingRelationshipConditionInput
  ): Promise<CreateFollowRelationshipMutation> {
    const statement = `mutation CreateFollowRelationship($input: CreateFollowingRelationshipInput!, $condition: ModelFollowingRelationshipConditionInput) {
        createFollowRelationship(input: $input, condition: $condition) {
          __typename
          followeeId
          followerId
          timestamp
          followee {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
          follower {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFollowRelationshipMutation>(
      response.data.createFollowRelationship
    );
  }
  async DeleteFollowRelationship(
    input: DeleteFollowingRelationshipInput,
    condition?: ModelFollowingRelationshipConditionInput
  ): Promise<DeleteFollowRelationshipMutation> {
    const statement = `mutation DeleteFollowRelationship($input: DeleteFollowingRelationshipInput!, $condition: ModelFollowingRelationshipConditionInput) {
        deleteFollowRelationship(input: $input, condition: $condition) {
          __typename
          followeeId
          followerId
          timestamp
          followee {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
          follower {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFollowRelationshipMutation>(
      response.data.deleteFollowRelationship
    );
  }
  async UpdateNotification(
    input: UpdateNotificationInput,
    condition?: ModelNotificationConditionInput
  ): Promise<UpdateNotificationMutation> {
    const statement = `mutation UpdateNotification($input: UpdateNotificationInput!, $condition: ModelNotificationConditionInput) {
        updateNotification(input: $input, condition: $condition) {
          __typename
          userId
          timestamp
          fromUserId
          oshaberiId
          haveRead
          action
          fromUser {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateNotificationMutation>response.data.updateNotification;
  }
  async CreateUserInfo(
    input: CreateUserinfoInput,
    condition?: ModelUserinfoConditionInput
  ): Promise<CreateUserInfoMutation> {
    const statement = `mutation CreateUserInfo($input: CreateUserinfoInput!, $condition: ModelUserinfoConditionInput) {
        createUserInfo(input: $input, condition: $condition) {
          __typename
          userId
          nickname
          iconImageKey
          coverImageKey
          profile
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserInfoMutation>response.data.createUserInfo;
  }
  async CreateOshaberi(
    input: CreateOshaberiInput,
    condition?: ModelOshaberiConditionInput
  ): Promise<CreateOshaberiMutation> {
    const statement = `mutation CreateOshaberi($input: CreateOshaberiInput!, $condition: ModelOshaberiConditionInput) {
        createOshaberi(input: $input, condition: $condition) {
          __typename
          id
          owner
          author
          timestamp
          imageKeys
          content
          parentOshaberiId
          userInfo {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
          replyOshaberi {
            __typename
            items {
              __typename
              id
              owner
              author
              timestamp
              imageKeys
              content
              parentOshaberiId
              userInfo {
                __typename
                userId
                nickname
                iconImageKey
                coverImageKey
                profile
              }
              replyOshaberi {
                __typename
                items {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
                nextToken
              }
              like {
                __typename
                items {
                  __typename
                  userId
                  timestamp
                  oshaberiId
                }
                nextToken
              }
            }
            nextToken
          }
          like {
            __typename
            items {
              __typename
              userId
              timestamp
              oshaberiId
              userInfo {
                __typename
                userId
                nickname
                iconImageKey
                coverImageKey
                profile
              }
              oshaberi {
                __typename
                id
                owner
                author
                timestamp
                imageKeys
                content
                parentOshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                replyOshaberi {
                  __typename
                  nextToken
                }
                like {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOshaberiMutation>response.data.createOshaberi;
  }
  async CreateTimeline(
    input: CreateTimelineInput,
    condition?: ModelTimelineConditionInput
  ): Promise<CreateTimelineMutation> {
    const statement = `mutation CreateTimeline($input: CreateTimelineInput!, $condition: ModelTimelineConditionInput) {
        createTimeline(input: $input, condition: $condition) {
          __typename
          userId
          timestamp
          oshaberiId
          oshaberi {
            __typename
            id
            owner
            author
            timestamp
            imageKeys
            content
            parentOshaberiId
            userInfo {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            replyOshaberi {
              __typename
              items {
                __typename
                id
                owner
                author
                timestamp
                imageKeys
                content
                parentOshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                replyOshaberi {
                  __typename
                  nextToken
                }
                like {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
            like {
              __typename
              items {
                __typename
                userId
                timestamp
                oshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                oshaberi {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTimelineMutation>response.data.createTimeline;
  }
  async CreateNotification(
    input: CreateNotificationInput,
    condition?: ModelNotificationConditionInput
  ): Promise<CreateNotificationMutation> {
    const statement = `mutation CreateNotification($input: CreateNotificationInput!, $condition: ModelNotificationConditionInput) {
        createNotification(input: $input, condition: $condition) {
          __typename
          userId
          timestamp
          fromUserId
          oshaberiId
          haveRead
          action
          fromUser {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateNotificationMutation>response.data.createNotification;
  }
  async CreateLike(
    input: CreateLikeInput,
    condition?: ModelLikeConditionInput
  ): Promise<CreateLikeMutation> {
    const statement = `mutation CreateLike($input: CreateLikeInput!, $condition: ModelLikeConditionInput) {
        createLike(input: $input, condition: $condition) {
          __typename
          userId
          timestamp
          oshaberiId
          userInfo {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
          oshaberi {
            __typename
            id
            owner
            author
            timestamp
            imageKeys
            content
            parentOshaberiId
            userInfo {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            replyOshaberi {
              __typename
              items {
                __typename
                id
                owner
                author
                timestamp
                imageKeys
                content
                parentOshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                replyOshaberi {
                  __typename
                  nextToken
                }
                like {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
            like {
              __typename
              items {
                __typename
                userId
                timestamp
                oshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                oshaberi {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLikeMutation>response.data.createLike;
  }
  async DeleteLike(
    input: DeleteLikeInput,
    condition?: ModelLikeConditionInput
  ): Promise<DeleteLikeMutation> {
    const statement = `mutation DeleteLike($input: DeleteLikeInput!, $condition: ModelLikeConditionInput) {
        deleteLike(input: $input, condition: $condition) {
          __typename
          userId
          timestamp
          oshaberiId
          userInfo {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
          oshaberi {
            __typename
            id
            owner
            author
            timestamp
            imageKeys
            content
            parentOshaberiId
            userInfo {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            replyOshaberi {
              __typename
              items {
                __typename
                id
                owner
                author
                timestamp
                imageKeys
                content
                parentOshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                replyOshaberi {
                  __typename
                  nextToken
                }
                like {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
            like {
              __typename
              items {
                __typename
                userId
                timestamp
                oshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                oshaberi {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLikeMutation>response.data.deleteLike;
  }
  async GetTimeline(
    userId: string,
    timestamp: number
  ): Promise<GetTimelineQuery> {
    const statement = `query GetTimeline($userId: String!, $timestamp: Int!) {
        getTimeline(userId: $userId, timestamp: $timestamp) {
          __typename
          userId
          timestamp
          oshaberiId
          oshaberi {
            __typename
            id
            owner
            author
            timestamp
            imageKeys
            content
            parentOshaberiId
            userInfo {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            replyOshaberi {
              __typename
              items {
                __typename
                id
                owner
                author
                timestamp
                imageKeys
                content
                parentOshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                replyOshaberi {
                  __typename
                  nextToken
                }
                like {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
            like {
              __typename
              items {
                __typename
                userId
                timestamp
                oshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                oshaberi {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userId,
      timestamp
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTimelineQuery>response.data.getTimeline;
  }
  async ListTimelines(
    userId?: string,
    timestamp?: ModelIntKeyConditionInput,
    filter?: ModelTimelineFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListTimelinesQuery> {
    const statement = `query ListTimelines($userId: String, $timestamp: ModelIntKeyConditionInput, $filter: ModelTimelineFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listTimelines(userId: $userId, timestamp: $timestamp, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            userId
            timestamp
            oshaberiId
            oshaberi {
              __typename
              id
              owner
              author
              timestamp
              imageKeys
              content
              parentOshaberiId
              userInfo {
                __typename
                userId
                nickname
                iconImageKey
                coverImageKey
                profile
              }
              replyOshaberi {
                __typename
                items {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
                nextToken
              }
              like {
                __typename
                items {
                  __typename
                  userId
                  timestamp
                  oshaberiId
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userId) {
      gqlAPIServiceArguments.userId = userId;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTimelinesQuery>response.data.listTimelines;
  }
  async GetNotification(
    userId: string,
    timestamp: number
  ): Promise<GetNotificationQuery> {
    const statement = `query GetNotification($userId: String!, $timestamp: Int!) {
        getNotification(userId: $userId, timestamp: $timestamp) {
          __typename
          userId
          timestamp
          fromUserId
          oshaberiId
          haveRead
          action
          fromUser {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userId,
      timestamp
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetNotificationQuery>response.data.getNotification;
  }
  async ListNotifications(
    userId?: string,
    timestamp?: ModelIntKeyConditionInput,
    filter?: ModelNotificationFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListNotificationsQuery> {
    const statement = `query ListNotifications($userId: String, $timestamp: ModelIntKeyConditionInput, $filter: ModelNotificationFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listNotifications(userId: $userId, timestamp: $timestamp, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            userId
            timestamp
            fromUserId
            oshaberiId
            haveRead
            action
            fromUser {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userId) {
      gqlAPIServiceArguments.userId = userId;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListNotificationsQuery>response.data.listNotifications;
  }
  async GetUserinfo(userId: string): Promise<GetUserinfoQuery> {
    const statement = `query GetUserinfo($userId: String!) {
        getUserinfo(userId: $userId) {
          __typename
          userId
          nickname
          iconImageKey
          coverImageKey
          profile
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserinfoQuery>response.data.getUserinfo;
  }
  async ListUserinfos(
    userId?: string,
    filter?: ModelUserinfoFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListUserinfosQuery> {
    const statement = `query ListUserinfos($userId: String, $filter: ModelUserinfoFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listUserinfos(userId: $userId, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userId) {
      gqlAPIServiceArguments.userId = userId;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUserinfosQuery>response.data.listUserinfos;
  }
  async GetOshaberi(id: string): Promise<GetOshaberiQuery> {
    const statement = `query GetOshaberi($id: ID!) {
        getOshaberi(id: $id) {
          __typename
          id
          owner
          author
          timestamp
          imageKeys
          content
          parentOshaberiId
          userInfo {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
          replyOshaberi {
            __typename
            items {
              __typename
              id
              owner
              author
              timestamp
              imageKeys
              content
              parentOshaberiId
              userInfo {
                __typename
                userId
                nickname
                iconImageKey
                coverImageKey
                profile
              }
              replyOshaberi {
                __typename
                items {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
                nextToken
              }
              like {
                __typename
                items {
                  __typename
                  userId
                  timestamp
                  oshaberiId
                }
                nextToken
              }
            }
            nextToken
          }
          like {
            __typename
            items {
              __typename
              userId
              timestamp
              oshaberiId
              userInfo {
                __typename
                userId
                nickname
                iconImageKey
                coverImageKey
                profile
              }
              oshaberi {
                __typename
                id
                owner
                author
                timestamp
                imageKeys
                content
                parentOshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                replyOshaberi {
                  __typename
                  nextToken
                }
                like {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOshaberiQuery>response.data.getOshaberi;
  }
  async ListOshaberis(
    filter?: ModelOshaberiFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOshaberisQuery> {
    const statement = `query ListOshaberis($filter: ModelOshaberiFilterInput, $limit: Int, $nextToken: String) {
        listOshaberis(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            owner
            author
            timestamp
            imageKeys
            content
            parentOshaberiId
            userInfo {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            replyOshaberi {
              __typename
              items {
                __typename
                id
                owner
                author
                timestamp
                imageKeys
                content
                parentOshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                replyOshaberi {
                  __typename
                  nextToken
                }
                like {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
            like {
              __typename
              items {
                __typename
                userId
                timestamp
                oshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                oshaberi {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOshaberisQuery>response.data.listOshaberis;
  }
  async ListOshaberisBySpecificOwner(
    owner?: string,
    timestamp?: ModelIntKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelOshaberiFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOshaberisBySpecificOwnerQuery> {
    const statement = `query ListOshaberisBySpecificOwner($owner: String, $timestamp: ModelIntKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelOshaberiFilterInput, $limit: Int, $nextToken: String) {
        listOshaberisBySpecificOwner(owner: $owner, timestamp: $timestamp, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            owner
            author
            timestamp
            imageKeys
            content
            parentOshaberiId
            userInfo {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            replyOshaberi {
              __typename
              items {
                __typename
                id
                owner
                author
                timestamp
                imageKeys
                content
                parentOshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                replyOshaberi {
                  __typename
                  nextToken
                }
                like {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
            like {
              __typename
              items {
                __typename
                userId
                timestamp
                oshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                oshaberi {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOshaberisBySpecificOwnerQuery>(
      response.data.listOshaberisBySpecificOwner
    );
  }
  async ListOshaberiByParentOshaberi(
    parentOshaberiId?: string,
    timestamp?: ModelIntKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelOshaberiFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOshaberiByParentOshaberiQuery> {
    const statement = `query ListOshaberiByParentOshaberi($parentOshaberiId: ID, $timestamp: ModelIntKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelOshaberiFilterInput, $limit: Int, $nextToken: String) {
        listOshaberiByParentOshaberi(parentOshaberiId: $parentOshaberiId, timestamp: $timestamp, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            owner
            author
            timestamp
            imageKeys
            content
            parentOshaberiId
            userInfo {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            replyOshaberi {
              __typename
              items {
                __typename
                id
                owner
                author
                timestamp
                imageKeys
                content
                parentOshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                replyOshaberi {
                  __typename
                  nextToken
                }
                like {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
            like {
              __typename
              items {
                __typename
                userId
                timestamp
                oshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                oshaberi {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
              }
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (parentOshaberiId) {
      gqlAPIServiceArguments.parentOshaberiId = parentOshaberiId;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOshaberiByParentOshaberiQuery>(
      response.data.listOshaberiByParentOshaberi
    );
  }
  async GetFollowingRelationship(
    followeeId: string,
    followerId: string
  ): Promise<GetFollowingRelationshipQuery> {
    const statement = `query GetFollowingRelationship($followeeId: String!, $followerId: String!) {
        getFollowingRelationship(followeeId: $followeeId, followerId: $followerId) {
          __typename
          followeeId
          followerId
          timestamp
          followee {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
          follower {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      followeeId,
      followerId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFollowingRelationshipQuery>(
      response.data.getFollowingRelationship
    );
  }
  async ListFollowingRelationships(
    followeeId?: string,
    followerId?: ModelStringKeyConditionInput,
    filter?: ModelFollowingRelationshipFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListFollowingRelationshipsQuery> {
    const statement = `query ListFollowingRelationships($followeeId: String, $followerId: ModelStringKeyConditionInput, $filter: ModelFollowingRelationshipFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listFollowingRelationships(followeeId: $followeeId, followerId: $followerId, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            followeeId
            followerId
            timestamp
            followee {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            follower {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (followeeId) {
      gqlAPIServiceArguments.followeeId = followeeId;
    }
    if (followerId) {
      gqlAPIServiceArguments.followerId = followerId;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFollowingRelationshipsQuery>(
      response.data.listFollowingRelationships
    );
  }
  async ListFollowingRelationshipByFollowee(
    followeeId?: string,
    timestamp?: ModelIntKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelFollowingRelationshipFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFollowingRelationshipByFolloweeQuery> {
    const statement = `query ListFollowingRelationshipByFollowee($followeeId: String, $timestamp: ModelIntKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelFollowingRelationshipFilterInput, $limit: Int, $nextToken: String) {
        listFollowingRelationshipByFollowee(followeeId: $followeeId, timestamp: $timestamp, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            followeeId
            followerId
            timestamp
            followee {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            follower {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (followeeId) {
      gqlAPIServiceArguments.followeeId = followeeId;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFollowingRelationshipByFolloweeQuery>(
      response.data.listFollowingRelationshipByFollowee
    );
  }
  async ListFollowingRelationshipByFollower(
    followerId?: string,
    timestamp?: ModelIntKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelFollowingRelationshipFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFollowingRelationshipByFollowerQuery> {
    const statement = `query ListFollowingRelationshipByFollower($followerId: String, $timestamp: ModelIntKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelFollowingRelationshipFilterInput, $limit: Int, $nextToken: String) {
        listFollowingRelationshipByFollower(followerId: $followerId, timestamp: $timestamp, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            followeeId
            followerId
            timestamp
            followee {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            follower {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (followerId) {
      gqlAPIServiceArguments.followerId = followerId;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFollowingRelationshipByFollowerQuery>(
      response.data.listFollowingRelationshipByFollower
    );
  }
  async GetLike(userId: string, oshaberiId: string): Promise<GetLikeQuery> {
    const statement = `query GetLike($userId: String!, $oshaberiId: ID!) {
        getLike(userId: $userId, oshaberiId: $oshaberiId) {
          __typename
          userId
          timestamp
          oshaberiId
          userInfo {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
          oshaberi {
            __typename
            id
            owner
            author
            timestamp
            imageKeys
            content
            parentOshaberiId
            userInfo {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            replyOshaberi {
              __typename
              items {
                __typename
                id
                owner
                author
                timestamp
                imageKeys
                content
                parentOshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                replyOshaberi {
                  __typename
                  nextToken
                }
                like {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
            like {
              __typename
              items {
                __typename
                userId
                timestamp
                oshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                oshaberi {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userId,
      oshaberiId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLikeQuery>response.data.getLike;
  }
  async ListLikes(
    userId?: string,
    oshaberiId?: ModelIDKeyConditionInput,
    filter?: ModelLikeFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListLikesQuery> {
    const statement = `query ListLikes($userId: String, $oshaberiId: ModelIDKeyConditionInput, $filter: ModelLikeFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listLikes(userId: $userId, oshaberiId: $oshaberiId, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            userId
            timestamp
            oshaberiId
            userInfo {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            oshaberi {
              __typename
              id
              owner
              author
              timestamp
              imageKeys
              content
              parentOshaberiId
              userInfo {
                __typename
                userId
                nickname
                iconImageKey
                coverImageKey
                profile
              }
              replyOshaberi {
                __typename
                items {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
                nextToken
              }
              like {
                __typename
                items {
                  __typename
                  userId
                  timestamp
                  oshaberiId
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userId) {
      gqlAPIServiceArguments.userId = userId;
    }
    if (oshaberiId) {
      gqlAPIServiceArguments.oshaberiId = oshaberiId;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLikesQuery>response.data.listLikes;
  }
  async ListLikesByOshaberiId(
    oshaberiId?: string,
    timestamp?: ModelIntKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelLikeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLikesByOshaberiIdQuery> {
    const statement = `query ListLikesByOshaberiId($oshaberiId: ID, $timestamp: ModelIntKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelLikeFilterInput, $limit: Int, $nextToken: String) {
        listLikesByOshaberiId(oshaberiId: $oshaberiId, timestamp: $timestamp, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            userId
            timestamp
            oshaberiId
            userInfo {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            oshaberi {
              __typename
              id
              owner
              author
              timestamp
              imageKeys
              content
              parentOshaberiId
              userInfo {
                __typename
                userId
                nickname
                iconImageKey
                coverImageKey
                profile
              }
              replyOshaberi {
                __typename
                items {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
                nextToken
              }
              like {
                __typename
                items {
                  __typename
                  userId
                  timestamp
                  oshaberiId
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (oshaberiId) {
      gqlAPIServiceArguments.oshaberiId = oshaberiId;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLikesByOshaberiIdQuery>response.data.listLikesByOshaberiId;
  }
  async ListLikesBySpecificUserId(
    userId?: string,
    timestamp?: ModelIntKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelLikeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLikesBySpecificUserIdQuery> {
    const statement = `query ListLikesBySpecificUserId($userId: String, $timestamp: ModelIntKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelLikeFilterInput, $limit: Int, $nextToken: String) {
        listLikesBySpecificUserId(userId: $userId, timestamp: $timestamp, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            userId
            timestamp
            oshaberiId
            userInfo {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            oshaberi {
              __typename
              id
              owner
              author
              timestamp
              imageKeys
              content
              parentOshaberiId
              userInfo {
                __typename
                userId
                nickname
                iconImageKey
                coverImageKey
                profile
              }
              replyOshaberi {
                __typename
                items {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
                nextToken
              }
              like {
                __typename
                items {
                  __typename
                  userId
                  timestamp
                  oshaberiId
                }
                nextToken
              }
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userId) {
      gqlAPIServiceArguments.userId = userId;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLikesBySpecificUserIdQuery>(
      response.data.listLikesBySpecificUserId
    );
  }
  OnCreateOshaberiListener: Observable<
    SubscriptionResponse<OnCreateOshaberiSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateOshaberi {
        onCreateOshaberi {
          __typename
          id
          owner
          author
          timestamp
          imageKeys
          content
          parentOshaberiId
          userInfo {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
          replyOshaberi {
            __typename
            items {
              __typename
              id
              owner
              author
              timestamp
              imageKeys
              content
              parentOshaberiId
              userInfo {
                __typename
                userId
                nickname
                iconImageKey
                coverImageKey
                profile
              }
              replyOshaberi {
                __typename
                items {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
                nextToken
              }
              like {
                __typename
                items {
                  __typename
                  userId
                  timestamp
                  oshaberiId
                }
                nextToken
              }
            }
            nextToken
          }
          like {
            __typename
            items {
              __typename
              userId
              timestamp
              oshaberiId
              userInfo {
                __typename
                userId
                nickname
                iconImageKey
                coverImageKey
                profile
              }
              oshaberi {
                __typename
                id
                owner
                author
                timestamp
                imageKeys
                content
                parentOshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                replyOshaberi {
                  __typename
                  nextToken
                }
                like {
                  __typename
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateOshaberiSubscription>>;

  OnCreateTimelineListener(
    userId: string
  ): Observable<SubscriptionResponse<OnCreateTimelineSubscription>> {
    const statement = `subscription OnCreateTimeline($userId: String!) {
        onCreateTimeline(userId: $userId) {
          __typename
          userId
          timestamp
          oshaberiId
          oshaberi {
            __typename
            id
            owner
            author
            timestamp
            imageKeys
            content
            parentOshaberiId
            userInfo {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            replyOshaberi {
              __typename
              items {
                __typename
                id
                owner
                author
                timestamp
                imageKeys
                content
                parentOshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                replyOshaberi {
                  __typename
                  nextToken
                }
                like {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
            like {
              __typename
              items {
                __typename
                userId
                timestamp
                oshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                oshaberi {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
              }
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userId
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateTimelineSubscription>>;
  }

  OnCreateNotificationListener(
    userId: string
  ): Observable<SubscriptionResponse<OnCreateNotificationSubscription>> {
    const statement = `subscription OnCreateNotification($userId: String!) {
        onCreateNotification(userId: $userId) {
          __typename
          userId
          timestamp
          fromUserId
          oshaberiId
          haveRead
          action
          fromUser {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userId
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnCreateNotificationSubscription>>;
  }

  OnUpdateNotificationListener(
    userId: string
  ): Observable<SubscriptionResponse<OnUpdateNotificationSubscription>> {
    const statement = `subscription OnUpdateNotification($userId: String!) {
        onUpdateNotification(userId: $userId) {
          __typename
          userId
          timestamp
          fromUserId
          oshaberiId
          haveRead
          action
          fromUser {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userId
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<SubscriptionResponse<OnUpdateNotificationSubscription>>;
  }

  OnCreateUserinfoListener: Observable<
    SubscriptionResponse<OnCreateUserinfoSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUserinfo {
        onCreateUserinfo {
          __typename
          userId
          nickname
          iconImageKey
          coverImageKey
          profile
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateUserinfoSubscription>>;

  OnUpdateUserinfoListener: Observable<
    SubscriptionResponse<OnUpdateUserinfoSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUserinfo {
        onUpdateUserinfo {
          __typename
          userId
          nickname
          iconImageKey
          coverImageKey
          profile
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateUserinfoSubscription>>;

  OnCreateFollowingRelationshipListener: Observable<
    SubscriptionResponse<OnCreateFollowingRelationshipSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFollowingRelationship {
        onCreateFollowingRelationship {
          __typename
          followeeId
          followerId
          timestamp
          followee {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
          follower {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnCreateFollowingRelationshipSubscription>
  >;

  OnDeleteFollowingRelationshipListener: Observable<
    SubscriptionResponse<OnDeleteFollowingRelationshipSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFollowingRelationship {
        onDeleteFollowingRelationship {
          __typename
          followeeId
          followerId
          timestamp
          followee {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
          follower {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnDeleteFollowingRelationshipSubscription>
  >;

  OnCreateLikeListener: Observable<
    SubscriptionResponse<OnCreateLikeSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLike {
        onCreateLike {
          __typename
          userId
          timestamp
          oshaberiId
          userInfo {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
          oshaberi {
            __typename
            id
            owner
            author
            timestamp
            imageKeys
            content
            parentOshaberiId
            userInfo {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            replyOshaberi {
              __typename
              items {
                __typename
                id
                owner
                author
                timestamp
                imageKeys
                content
                parentOshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                replyOshaberi {
                  __typename
                  nextToken
                }
                like {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
            like {
              __typename
              items {
                __typename
                userId
                timestamp
                oshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                oshaberi {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateLikeSubscription>>;

  OnDeleteLikeListener: Observable<
    SubscriptionResponse<OnDeleteLikeSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLike {
        onDeleteLike {
          __typename
          userId
          timestamp
          oshaberiId
          userInfo {
            __typename
            userId
            nickname
            iconImageKey
            coverImageKey
            profile
          }
          oshaberi {
            __typename
            id
            owner
            author
            timestamp
            imageKeys
            content
            parentOshaberiId
            userInfo {
              __typename
              userId
              nickname
              iconImageKey
              coverImageKey
              profile
            }
            replyOshaberi {
              __typename
              items {
                __typename
                id
                owner
                author
                timestamp
                imageKeys
                content
                parentOshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                replyOshaberi {
                  __typename
                  nextToken
                }
                like {
                  __typename
                  nextToken
                }
              }
              nextToken
            }
            like {
              __typename
              items {
                __typename
                userId
                timestamp
                oshaberiId
                userInfo {
                  __typename
                  userId
                  nickname
                  iconImageKey
                  coverImageKey
                  profile
                }
                oshaberi {
                  __typename
                  id
                  owner
                  author
                  timestamp
                  imageKeys
                  content
                  parentOshaberiId
                }
              }
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteLikeSubscription>>;
}
