import jwt from 'jsonwebtoken';
import { Context, Middleware } from 'koa';
import Router from 'koa-router';

import { login, signUp } from './local';

import passport from './passport';

const authRouter = new Router({
  prefix: '/auth',
});

authRouter
  // local sign up
  .post('/local/signup', signUp)
  .post('/local', login);

export default authRouter;
