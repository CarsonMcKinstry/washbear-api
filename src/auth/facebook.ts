import { Middleware } from 'koa';
import passport from './passport';
import jwt from 'jsonwebtoken';

export const startFacebookAuth: Middleware = async (ctx, next) => {
  return passport.authenticate('facebook')(ctx, next);
};

export const facebookCallback: Middleware = (ctx, next) => {
  const encodedRedirectURL = ctx.cookies.get('r');
  const redirectURL = new Buffer(encodedRedirectURL, 'base64').toString('utf-8');
  return passport.authenticate('facebook', (err, user) => {
    if (err) { return ctx.throw(403, err); }

    const userJwt = jwt.sign(user, (process.env.SIGNATURE as string));
    const finalRedirect = `${redirectURL}?access_token=${userJwt}`;

    ctx.redirect(finalRedirect);
  })(ctx, next);
};
