const { GraphQLSchema } = require('graphql')
const RootQuery = require('./queries.js')
const RootMutation = require('./mutations.js')

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})
