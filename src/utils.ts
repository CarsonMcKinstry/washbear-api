import { pick } from 'lodash/fp';
import { User } from './generated/prisma-client/';
import { Context } from 'koa';
import jwt from 'jsonwebtoken';

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