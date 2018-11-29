import { omit } from 'lodash/fp';

// import { User, UserWhereInput, Post } from '../generated/prisma-client';
// import { ApolloContext, Resolver } from "../types";
import { getUserId } from '../utils';
import { QueryToMeResolver, QueryToUserResolver, QueryToUsersResolver, QueryToPostsResolver } from '../schema';
import { ApolloContext } from '../types';

export const me: QueryToMeResolver = async (_, __, context: ApolloContext) => {
  const id = getUserId(context);
  const user = await context.db.user({ id });

  return omit(['password'], user);
}

export const user: QueryToUserResolver = async (_, args, context: ApolloContext) => {
  const { id } = args;
  const user = await context.db.user({ id });

  return omit(['password'], user);
}

export const users: QueryToUsersResolver = async (_, args, context: ApolloContext) => {
  const queriedUsers = await context.db.users();
  return queriedUsers.map(omit(['password']));
}

export const posts: QueryToPostsResolver = async (_, __, context: ApolloContext) => {
  const queriedPosts = await context.db.posts();

  return queriedPosts;
}