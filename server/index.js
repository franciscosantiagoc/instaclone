const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolver");
require("dotenv").config({ path:".env" });

mongoose.connect(process.env.DATABASE, 
  {}, 
  (err, _) => { //cuando no usamos una variable, no es buena practica dejarla ahi, es recomendable marcarla como: _
  if(err) {
    console.log("Error de conexion con la BD", err);
  }else{
    console.log("Conexion correcta")
    server();
  }
});

function server() {
  const serverApollo = new ApolloServer({
    typeDefs,
    resolvers,
  });

  serverApollo.listen().then(({ url }) => {
    console.log(`Servidor ON ${ url }`);
  })
}