import { Context } from 'koa';
import { Prisma } from './generated/prisma-client/';

export interface ApolloContext {
  ctx: Context;
  db: Prisma;
  user: AuthPayload | null;
}

export type ContextFn = (req: Context) => ApolloContext;

export interface AuthPayload {
  email: string;
  id: string;
  name: string;
  iat: number;
}

export type Resolver<T, R = any, A = any, C = any> = (
  root: R,
  args: A,
  context: C,
  info: string,
) => Promise<T>;

export interface Geolocation {
  lat: number;
  long: number;
}

export interface GeolocationBoundary {
  latMin: number;
  latMax: number;
  longMin: number;
  longMax: number;
}
