import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import passport from 'koa-passport';
import { pick } from 'lodash/fp';
import {
  Strategy as FacebookStrategy,
  VerifyFunction as FBVerifyFunction,
} from 'passport-facebook';
import {
  Strategy as LocalStrategy,
  VerifyFunction as LocalVerifyFunction,
} from 'passport-local';
import { prisma, User } from '../generated/prisma-client/index';
import { getPayload } from '../utils';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

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
}

const facebookHandler: FBVerifyFunction = async (
  accessToken,
  refreshToken,
  profile,
  done,
) => {
  const {
    _json : {
      id,
      name,
      picture: {
        url,
      },
    },
  } = profile;
  try {
    const userExists = await prisma.$exists.user({ facebookId: id });

    if (!userExists) {
      const user: User = await prisma.createUser({
        avatar: url,
        facebookId: id,
        name,
      });

      return done(null, getPayload(user));
    }

    const existingUser: User = await prisma.user({ facebookId: id });

    return done(null, getPayload(existingUser));
  } catch (err) {
    return done(err, null);
  }
};

export const localStrategy = new LocalStrategy({
  passwordField: 'password',
  usernameField: 'email',
}, localHandler);

export const facebookStrategy = new FacebookStrategy({
  callbackURL: (process.env.FACEBOOK_CALLBACK as string),
  clientID: (process.env.FACEBOOK_APP_ID as string),
  clientSecret: (process.env.FACEBOOK_APP_SECRET as string),
  profileFields: ['id', 'displayName', 'name', 'picture.type(large)'],
}, facebookHandler);

passport.use(localStrategy);
passport.use(facebookStrategy);

export default passport;
