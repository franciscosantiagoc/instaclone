const jwt = require('jsonwebtoken')
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const express = require("express");
const graphqlUploadExpress = require('graphql-upload/graphqlUploadExpress.js');
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

async function server() {
  const serverApollo = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {//desestructuramos req de headers
      const token = req.headers.authorization;
      if( token ) {
        try {
          const user = jwt.verify(
            token.replace('Bearer ',''),
            process.env.SECRET_KEY,
          );
          return {
            user
          }
        } catch (error) {
          console.log('Error', Error)
          throw new Error("Token invalido");
        }
      }
    }
  });

  await serverApollo.start();
  const app = express();

  

  app.use(graphqlUploadExpress());
  serverApollo.applyMiddleware({ app });

  app.use('/', (req, res) => {
    console.log('Principal ejecutado correctamente')
    res.send('<h1>Servidor ejecutado correctamente</h1>')
  });

  await app.listen(process.env.PORT || 3001, () => {
    console.log(`Servidor ON http://localhost:${ process.env.PORT || 3001 }`);
  });
  /* serverApollo.listen().then(({ url }) => {//cachamos la respuesta de la promesa, pero nos interesa solo la url, por lo que destructuramos
    console.log(`Servidor ON ${ url }`);
  }) */
}