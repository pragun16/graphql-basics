const graphql = require('graphql');
const _ = require('lodash');
const {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt} = graphql;

//dummy db
const books = [
    {id: '1', name: 'Book 1', genre: 'Comic'},
    {id: '2', name: 'Book 2', genre: 'Comic'},
    {id: '3', name: 'Book 3', genre: 'Sci-Fi'}
];

const authors = [
    {id: '1', name: 'Author 1', age: 44},
    {id: '2', name: 'Author 2', age: 23},
    {id: '3', name: 'Author 3', age: 42}
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return _.find(books, {id: args.id});
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return _.find(authors, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});