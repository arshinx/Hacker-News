
// Graph QL Yoga
const { GraphQLServer } = require('graphql-yoga')

// GraphQL Schema Query
const typeDefs = `
type Query {
  info: String!
}
`

// Implementation of the GraphQL Schema
const resolvers = {
  Query: {
    info: () => `API for Hackernews`
  }
}
