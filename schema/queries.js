const { GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql')
const { ProjectType, ClientType } = require('./objectTypes.js')
const Client = require('../models/Client.js')
const Project = require('../models/Project.js')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find()
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id)
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find()
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return Client.findById(args.id)
      },
    },
  },
})


module.exports = RootQuery