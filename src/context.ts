import jwt from 'jsonwebtoken';
import { Context } from 'koa';
import env from './env';
import { prisma } from './generated/prisma-client';
import { ApolloContext, AuthPayload } from './types';

const getUser = (ctx: Context): AuthPayload | null => {
  const authHeader = ctx.request.get('Authorization');

  if (!authHeader) { return null; }

  return jwt.verify(authHeader.replace('Bearer ', ''), env.signature) as AuthPayload;
};

const context = (req: { ctx: Context }): ApolloContext => ({
  ctx: req.ctx,
  db: prisma,
  user: getUser(req.ctx)
});

export default context;
