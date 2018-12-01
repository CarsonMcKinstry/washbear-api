import {
  Strategy,
  VerifyFunction,
} from 'passport-facebook';
import { prisma, User } from '../generated/prisma-client/index';
import { getPayload } from '../utils';

import env from '../env';

const facebookHandler: VerifyFunction = async (
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

export const facebookStrategy = new Strategy({
  callbackURL: env.facebookCallback,
  clientID: env.facebookAppId,
  clientSecret: env.facebookAppSecret,
  profileFields: ['id', 'displayName', 'name', 'picture.type(large)'],
}, facebookHandler);