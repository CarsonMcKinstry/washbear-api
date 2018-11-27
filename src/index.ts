import dotenv from 'dotenv';
import { default as Koa } from 'koa';

import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

import authRouter from './auth';

const nodeEnv = process.env.NODE_ENV || 'development';

if (nodeEnv !== 'production') {
  dotenv.config();
}

const app = new Koa();

const port = process.env.PORT || 4000;

app.use(logger());
app.use(cors());
app.use(bodyParser());

app.use(authRouter.routes());

app.listen(port, () => console.log(`Now listening on port ${port}`));
