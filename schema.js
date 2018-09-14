exports.typeDefs = `
  type Genealogy {
    _id: ID,
    firstName: String!
    lastName: String!
    dateOfBirth: String
    createdDate: String
    description: String
    likes: Int
    username: String
  }
  type User {
    _id: ID,
    username: String!
    password: String!
    email: String!
    joinDate: String
    favorites: [Genealogy]
  }

  type Query {
    getAllGenealogies: [Genealogy]
  }

  type Mutation {
    addGenealogy(firstName: String!, lastName: String!, dateOfBirth: String, description: String, username: String  ): Genealogy
  }
`;