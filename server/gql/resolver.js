const userController = require("../controllers/user")
const GraphQLUpload = require('graphql-upload/GraphQLUpload.js');

const resolver = {
  Upload: GraphQLUpload,
  Query: {
    // User
   getUser: (_, { id, username }) => userController.getUser(id,username),
  },
  Mutation: {
    //User
    register: (_, { input }) => userController.register(input),
    login: (_, { input }) => userController.login(input),
    updateAvatar: (_, { file }, ctx) => userController.updateAvatar(file, ctx),
    deleteAvatar: (_, {}, ctx) => userController.deleteAvatar(ctx),
  },
}

module.exports = resolver;