import { ApolloServer, gql } from 'apollo-server-koa';
import { importSchema } from 'graphql-import';
import { default as Koa } from 'koa';

import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import attachUser from './auth/attachUser';

import authRouter from './auth';

import context from './context';
import resolvers from './resolvers';
const typeDefs = importSchema('./src/schema.graphql');
import schemaDirectives from './directives';

import env from './env';

const server = new ApolloServer({
  context,
  resolvers,
  schemaDirectives,
  typeDefs: gql(typeDefs.replace('scalar Upload', '')),
});

const app = new Koa();

const port = env.port || 4000;

app.use(logger());
app.use(cors());
app.use(bodyParser());

app.use(authRouter.routes());

app.use(attachUser);

server.applyMiddleware({ app });
server.installSubscriptionHandlers(app.listen(port, () =>
  console.log(`🚀 Server ready at ${port}${server.graphqlPath}`),
));
