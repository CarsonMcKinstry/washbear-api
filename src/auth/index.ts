import jwt from 'jsonwebtoken';
import { Context, Middleware } from 'koa';
import Router from 'koa-router';

import { facebookCallback, startFacebookAuth } from './facebook';
import { login, signUp } from './local';


const authRouter = new Router({
  prefix: '/auth',
});

authRouter
  // local sign up
  .post('/local/signup', signUp)
  .post('/local', login)
  .get('/facebook', startFacebookAuth)
  .get('/facebook/callback', facebookCallback);

export default authRouter;
