const path = require('path');
const express = require('express');
const morgan = require('morgan');
const db = require('./db');
const graphqlHTTP = require('express-graphql');
// const schema = require('./schema');
const PORT = process.env.PORT || 8080;
const app = express();
module.exports = app;

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'));

  // body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // auth and api routes
  // app.use(
  //   '/graphql',
  //   graphqlHTTP({
  //     schema,
  //     graphiql: true,
  //   })
  // );

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')));

  // sends index.html
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};
const { ApolloServer, gql } = require('apollo-server-express');
// const { typeDefs, resolvers } = require('./schema');
const typeDefs = require('./schema/schema');
const resolvers = require('./schema/resolvers');

const server = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' }); // app is from an existing express app

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log('Apollo Server on http://localhost:8000/graphql')
  );
};

const syncDb = () => db.sync();

async function bootApp() {
  await syncDb();
  await createApp();
  await startListening();
}

bootApp();
