const express = require('express');
const mongoose = require('mongoose'); // add this
require('dotenv').config({ path: 'variables.env' });

// models
const Genealogy = require('./models/Genealogy');
const User = require('./models/User');

const PORT = process.env.PORT || 4444;

// bring in GraphQL middleware
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

// graphql
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

// Create schemas
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// connect to db (add these lines)
mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('DB connected');
  })
  .catch(err => {
    console.log('Error on start: ' + err.stack);
    process.exit(1);
  });

const app = express();

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Connect schemas with GraphQL
app.use(
  '/graphql',
  graphqlExpress({
    schema,
    context: {
      // pass in mongoose models
      Genealogy,
      User,
    },
  })
);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
