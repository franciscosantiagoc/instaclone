const userController = require("../controllers/user")
const resolver = {
  Query: {
    // User
    getUser: () => {
      console.log("obteniendo usuario");
      return null;
    },
  },
  Mutation: {
    //User
    register: async (_, { input }) => userController.register(input),
  },
}

module.exports = resolver;