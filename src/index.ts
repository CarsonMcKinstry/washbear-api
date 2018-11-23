import dotenv from 'dotenv';
import { default as Koa, Middleware } from 'koa';

import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

import authRouter from './auth';

const nodeEnv = process.env.NODE_ENV || 'development';

if (nodeEnv === 'development') {
  dotenv.config();
}

const app = new Koa();

const port = process.env.PORT || 4000;

app.use(logger());
app.use(cors());
app.use(bodyParser());

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

app.use(addRedirectCookie);

app.use(authRouter.routes());

app.listen(port, () => console.log(`Now listening on port ${port}`));
