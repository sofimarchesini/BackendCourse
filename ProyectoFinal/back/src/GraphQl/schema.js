import {makeExecutableSchema} from '@graphql-tools/schema';
import {resolvers} from './resolvers.js';

const typeDefs = `
    type Query {
        Products: [Product],
        Product(id: String!): Product
    },
    
    type Mutation {
        createProduct(title: String!, thumbnail: String!, price: Float!, image: String!): Product
    },
    
    type Product {
        id: String
        title: String
        thumbnail: String
        price: Float
        image: String
    } 
`;

export default makeExecutableSchema({
    typeDefs,
    resolvers
})