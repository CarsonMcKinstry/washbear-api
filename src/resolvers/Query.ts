import { omit } from 'lodash/fp';
import { User, UserWhereInput, Post } from '../generated/prisma-client';
import { ApolloContext, Resolver } from "../types";
import { getUserId } from '../utils';
import {
  QueryToPostResolver, QueryToUsersResolver, QueryToUserProfileResolver, QueryToMeResolver, QueryToFeedResolver,
  GQLPost
} from '../schema';

export const me: QueryToMeResolver = async (_, __, context: ApolloContext) => {
  if (!context.user) {
    throw new Error('You must be authenticated to do that');
  }
  const user = await context.db.user({ id: context.user.id });

  return omit(['password'], user);
}

export const userProfile: QueryToUserProfileResolver = async (_, args, context: ApolloContext) => {
  const { id } = args;
  const user = await context.db.user({ id });

  return omit(['password'], user);
}

export const users: QueryToUsersResolver = async (_, args, context: ApolloContext) => {
  const queriedUsers = await context.db.users();
  return queriedUsers.map<User>(omit(['password']));
}

export const post: QueryToPostResolver = async (_, args, context: ApolloContext) => {
  const { id } = args;
  const post = await context.db.post({ id });

  return post;
}

export const feed: QueryToFeedResolver = async (_, args, context: ApolloContext) => {
  const queriedPosts = await context.db.posts();

  const postsCount = await context.db.postsConnection({}).aggregate().count();

  return {
    count: postsCount,
    postIds: queriedPosts.map(post => post.id)
  }
}