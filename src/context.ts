import { Context } from 'koa';
import { prisma } from './generated/prisma-client';
import { ApolloContext, AuthPayload } from './types';
import jwt from 'jsonwebtoken';
import env from './env';

const context = (req: { ctx: Context }): ApolloContext => ({
  ctx: req.ctx,
  db: prisma,
  user: (jwt.verify(req.ctx.request.get('Authorization').replace('Bearer ', ''), env.signature) as AuthPayload)
});

export default context;
