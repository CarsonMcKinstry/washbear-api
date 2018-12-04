import jwt from 'jsonwebtoken';
import { Middleware } from 'koa';
import env from '../env';
import { prisma } from '../generated/prisma-client';

const attachUser: Middleware = (ctx, next) => {
  const authorization = ctx.request.get('Authorization');

  if (!authorization) {
    return next();
  }
  try {
    const token = jwt.verify(authorization.replace('Bearer ', ''), env.signature);

    ctx.user = token;

    return next();
  } catch (err) {
    return next();
  }
};

export default attachUser;
