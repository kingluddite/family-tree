const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
  scalar ObjectID

  type Genealogy {
    _id: ObjectID
    firstName: String!
    lastName: String!
    createdDate: String
    likes: Int
    username: String
  }

  type User {
    _id: ObjectID
    username: String!
    password: String!
    email: String!
    joinDate: String
    favorites: [Genealogy]
  }

  type Query {
    getAllGenealogies: [Genealogy]
    getCurrentUser: User
  }

  type Mutation {
    addGenealogy(
      firstName: String!
      lastName: String!
      dateOfBirth: String
      description: String
      username: String
    ): Genealogy

    signinUser(username: String!, password: String!): Token
    signupUser(username: String!, email: String!, password: String!): Token
  }

  type Token {
    token: String!
  }
`;
