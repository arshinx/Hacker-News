
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

// Bundle schema and resolvers
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

// Start Server
server.start(() => console.log(`Server is running on http://localhost:4000`))
