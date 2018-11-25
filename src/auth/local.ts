import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Middleware } from 'koa';
import md5 from 'md5';
import { prisma, User } from '../generated/prisma-client/index';
import { getPayload } from '../utils';
import passport from './passport';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

export const signUp: Middleware = async (ctx) => {
  const body: { email?: string, password?: string, name?: string} = ctx.request.body || {};
  const { email, password, name } = body;

  if (!email || !password || !name) {
    return ctx.throw(403, 'You must provide a name, password and valid email address');
  }

  const userExists = await prisma.$exists.user({ email });

  if (userExists) {
    return ctx.throw(403, 'A user with this email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const hashedEmail = md5(email);

  const avatar = `https://www.gravatar.com/avatar/${hashedEmail}?d=identicon`;

  const newUser: User = await prisma.createUser({
    avatar,
    email,
    name,
    password: hashedPassword,
  });

  const jwtUser = getPayload(newUser);

  return ctx.body = {
    access_token: jwt.sign(jwtUser, (process.env.SIGNATURE as string)),
  };
};

export const login: Middleware = async (ctx, next) => {
  const encodedRedirectURL = ctx.cookies.get('r');
  const redirectURL = new Buffer(encodedRedirectURL, 'base64').toString('utf-8');
  return passport.authenticate('local', (err, user) => {
    if (err) { return ctx.throw(403, err); }

    const userJwt = jwt.sign(user, (process.env.SIGNATURE as string));
    const finalRedirect = `${redirectURL}?access_token=${userJwt}`;

    ctx.redirect(finalRedirect);
  })(ctx, next);
};