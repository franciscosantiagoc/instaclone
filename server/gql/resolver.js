const User = require("../models/user");

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
    register: async (_, { input }) => {
      console.log('registrando usuario'); 
      const newUser = input;
      newUser.email = newUser.email.toLowerCase();
      newUser.username = newUser.username.toLowerCase();
      
      const { email, username, password } = newUser;

      //Revisamos si el email esta en uso
      const foundEmail = await User.findOne({ email });
      if(foundEmail) throw new Error("El email ya está en uso");

      //Revisamos si el username esta en uso
      const foundUsername = await User.findOne({ username });
      if(foundUsername) throw new Error("El username ya está en uso");

      //Encriptar password

      try {
        const user = new User(newUser);
        user.save();
        return user;
      } catch (error) {
        console.log('error', error)
      }
    }
  },
}

module.exports = resolver;