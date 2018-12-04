import bcrypt from 'bcryptjs';
import passport from 'koa-passport';
import {
  Strategy as LocalStrategy,
  VerifyFunction as LocalVerifyFunction,
} from 'passport-local';
import { prisma, User } from '../generated/prisma-client/index';
import { getPayload } from '../utils';
import { facebookStrategy } from './facebook';

const localHandler: LocalVerifyFunction = async (email, password, next) => {

  try {
    const userExists = await prisma.$exists.user({ email });

    if (!userExists || !email || !password) {
      return next(new Error('Email or password incorrect'), null);
    }

    const user: User = await prisma.user({ email });

    const passwordsMatch = await bcrypt.compare(password, (user.password as string));

    if (!passwordsMatch) {
      return next(new Error('Email or password incorrect'), null);
    }

    return next(null, getPayload(user));
  } catch (err) {
    return next(err, null);
  }
};

export const localStrategy = new LocalStrategy({
  passwordField: 'password',
  usernameField: 'email',
}, localHandler);

passport.use(localStrategy);
passport.use(facebookStrategy);
// passport.use(twitterStrategy);

export default passport;
