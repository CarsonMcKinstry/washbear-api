import { Context } from 'koa';
import { prisma } from './generated/prisma-client';
import { ApolloContext } from './types';

const context = (req: { ctx: Context }): ApolloContext => ({
  ctx: req.ctx,
  db: prisma,
});

export default context;
