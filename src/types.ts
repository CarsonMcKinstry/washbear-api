import { Context } from 'koa';
import { Prisma } from './generated/prisma-client/';

export interface ApolloContext {
  ctx: Context;
  db: Prisma;
}

export type ContextFn = (req: Context) => ApolloContext;

export interface AuthPayload {
  email: string;
  id: string;
  name: string;
  iat: number;
}

export type Resolver<T,R = any,A = any,C = any> = (
  root: R,
  args: A,
  context: C,
  info: string,
) => Promise<T>;