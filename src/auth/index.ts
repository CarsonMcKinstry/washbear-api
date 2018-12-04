import { Middleware } from 'koa';
import Router from 'koa-router';
import { authRedirect } from '../utils';
import { login, signUp } from './local';
import passport from './passport';

const authRouter = new Router({
  prefix: '/auth',
});

const acceptedStrategies: string[] = ['facebook']; // add twitter later

const rejectUntrustedStrategies: Middleware = (ctx, next) => {
  const { params: { strategy } } = ctx;

  if (!acceptedStrategies.includes(strategy)) {
    return ctx.throw(400, `${strategy} is not a recognized strategy`);
  }

  return next();
};

const addRedirectCookie: Middleware = (ctx, next) => {
  let { query: { r } } = ctx;
  if (!r) {
    return next();
  }

  if (!r.match(/^https?:\/\//)) {
    r = `http://${r}`;
  }
  const encodedRedirectURL = new Buffer(r).toString('base64');
  ctx.cookies.set('r', encodedRedirectURL, {
    maxAge: 60 * 60 * 1000,
  });
  return next();
};

const startAuth: Middleware = (ctx, next) => {
  const { params: { strategy } } = ctx;
  return passport.authenticate(strategy)(ctx, next);
};

const handleCallback: Middleware = (ctx, next) => {
  const { params: { strategy } } = ctx;
  return passport.authenticate(strategy, authRedirect(ctx))(ctx, next);
};

authRouter
  .use(addRedirectCookie)
  // local sign up
  .post('/local/signup', signUp)
  .post('/local', login)
  .get('/:strategy', rejectUntrustedStrategies)
  .get('/:strategy', startAuth)
  .get('/:strategy/callback', rejectUntrustedStrategies)
  .get('/:strategy/callback', handleCallback);

export default authRouter;
