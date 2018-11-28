import { pick } from 'lodash/fp';
import { User } from './generated/prisma-client/';
import { Context } from 'koa';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ApolloContext, AuthPayload } from './types';

if (process.env.NODE_ENV !== 'prduction') {
  dotenv.config();
}

export const getPayload = (user: User) => pick([
  'email',
  'name',
  'id',
  'facebookId'
], user);

export const authRedirect = (ctx: Context) => (err: Error | null, user: User) => {
  const encodedRedirectURL = ctx.cookies.get('r');
  const redirectURL = new Buffer(encodedRedirectURL, 'base64').toString('utf-8');
  if (err) { return ctx.throw(403, err); }

  const userJwt = jwt.sign(user, (process.env.SIGNATURE as string));
  const finalRedirect = `${redirectURL}?access_token=${userJwt}`;

  ctx.redirect(finalRedirect);
};



export function getUserId(context: ApolloContext) {
  const Authorization = context.ctx.request.get('Authorization');

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const decodedJwt = (jwt.verify(token, (process.env.SIGNATURE as string)) as AuthPayload);
    if (!decodedJwt.id) { throw new Error('Not authorized'); }
    return decodedJwt.id;
  }

  throw new Error('Not authenticated');
}

export function verifyAuthorization(context: ApolloContext) {
  const Authorization = context.ctx.request.get('Authorization');

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const decodedJwt = (jwt.verify(token, (process.env.SIGNATURE as string)) as AuthPayload);
    if (!decodedJwt.id) { throw new Error('Not authorized'); }
    return true;
  }

  throw new Error('Not authenticated');
}
