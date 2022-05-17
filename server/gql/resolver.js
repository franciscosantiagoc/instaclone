const resolver = {
  Query: {
    // User
    getUser: () => {
      console.log("obteniendo usuario");
      return null;
    }
  }
}

module.exports = resolver;