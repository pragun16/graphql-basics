const express = require('express');
const graphqlHTTP = require('express-graphql'); // allows express to understand graphql queries
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect("mongodb://pragun:password@ds119489.mlab.com:19489/graphql-demo");
mongoose.connection.once('open', () => {
    console.log("Connection to mLabs successful.");
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Listening to requests on port 4000.");
});