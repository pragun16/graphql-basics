const express = require('express');
const graphqlHTTP = require('express-graphql'); // allows express to understand graphql queries
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Listening to requests on port 4000");
});