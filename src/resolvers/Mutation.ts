import { Post } from '../generated/prisma-client';
import { Resolver, ApolloContext } from '../types';

export const post = (_: any, args: any, context: ApolloContext) => {
  console.log(args);
}