import { Context } from 'koa';
import { prisma } from './generated/prisma-client';
import { ApolloContext, AuthPayload } from './types';
import jwt from 'jsonwebtoken';
import env from './env';

const getUser = (context: Context): AuthPayload | null => {
  const authHeader = context.request.get('Authorization');

  if (!authHeader) return null;

  return <AuthPayload>jwt.verify(authHeader.replace('Bearer ', ''), env.signature);
}

const context = (req: { ctx: Context }): ApolloContext => ({
  ctx: req.ctx,
  db: prisma,
  user: getUser(req.ctx)
});

export default context;
