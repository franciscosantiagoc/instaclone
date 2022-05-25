//se define los tipos que vamos a usar graphql
const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: String
    email: String
    avatar: String
    siteWeb: String
    description: String
    password: String
    createAt: String
  }

  input UserInput {
    name: String! # el signo ! determina que un campo es obligatorio
    username: String!
    email: String!
    password: String!
  }

  type Query {
    # User
    getUser: User
  }
  type Mutation {
    #User
    register(input: UserInput): User
  }
`;

module.exports = typeDefs;