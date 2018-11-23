import dotenv from 'dotenv';
import { default as Koa } from 'koa';

import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

const nodeEnv = process.env.NODE_ENV || 'development';

if (nodeEnv === 'development') {
  dotenv.config();
}

const app = new Koa();

const port = process.env.PORT || 4000;

app.use(logger());
app.use(cors());
app.use(bodyParser());

app.listen(port, () => console.log(`Now listening on port ${port}`));
