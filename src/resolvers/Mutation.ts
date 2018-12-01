import { Post } from '../generated/prisma-client';
import { Resolver, ApolloContext } from '../types';
import { getUserId } from '../utils';

export const createPost = (_: any, args: any, context: ApolloContext) => {
  try {
    const userId = getUserId(context);
  } catch (err) {
    console.log(err);
  }
}