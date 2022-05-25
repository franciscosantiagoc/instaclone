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
    register: (_, { input }) => {
      console.log('registrando usuario'); 
      console.log(input);
      return null;
    }
  },
}

module.exports = resolver;