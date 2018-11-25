import { Middleware } from 'koa';
import passport from './passport';
import jwt from 'jsonwebtoken';
import { authRedirect } from '../utils';

export const startFacebookAuth: Middleware = async (ctx, next) => {
  return passport.authenticate('facebook')(ctx, next);
};

export const facebookCallback: Middleware = (ctx, next) => {
  return passport.authenticate('facebook', authRedirect(ctx))(ctx, next);
};
