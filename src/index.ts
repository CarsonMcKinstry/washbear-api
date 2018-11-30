import dotenv from 'dotenv';
import { default as Koa } from 'koa';
import { ApolloServer, gql } from 'apollo-server-koa';
import { importSchema } from 'graphql-import';
import fs from 'fs';

import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

import authRouter from './auth';

import context from './context';
import resolvers from './resolvers';

const nodeEnv = process.env.NODE_ENV || 'development';

if (nodeEnv !== 'production') {
  dotenv.config();
}

const typeDefs = importSchema('./src/schema.graphql');


const server = new ApolloServer({
  context,
  resolvers,
  typeDefs: gql(typeDefs.replace('scalar Upload', '')),
});

const app = new Koa();

const port = process.env.PORT || 4000;

// app.use(logger());
app.use(cors());
app.use(bodyParser());

app.use(authRouter.routes());

server.applyMiddleware({ app });
server.installSubscriptionHandlers(app.listen(port, () =>
  console.log(`🚀 Server ready at ${port}${server.graphqlPath}`),
));