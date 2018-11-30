import { omit } from 'lodash/fp';
import { User, UserWhereInput, Post } from '../generated/prisma-client';
import { ApolloContext, Resolver } from "../types";
import { getUserId } from '../utils';

export const me: Resolver<User> = async (_, __, context: ApolloContext) => {
  const id = getUserId(context);
  const user = await context.db.user({ id });

  return omit(['password'], user);
}

export const user: Resolver<User> = async (_, args, context: ApolloContext) => {
  const { id } = args;
  const user = await context.db.user({ id });

  return omit(['password'], user);
}

export const users: Resolver<User[]> = async (_, args, context: ApolloContext) => {
  const queriedUsers = await context.db.users();
  return queriedUsers.map<User>(omit(['password']));
}

export const posts: Resolver<Post[]> = async (_, __, context: ApolloContext) => {
  const queriedPosts = await context.db.posts();

  return queriedPosts;
}

export const post: Resolver<Post> = async (_, args, context: ApolloContext) => {
  const { id } = args;
  const post = await context.db.post({ id });

  return post;
}