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
    register: (_, { input }) => userController.register(input),
    login: (_, { input }) => userController.login(input)
  },
}

module.exports = resolver;