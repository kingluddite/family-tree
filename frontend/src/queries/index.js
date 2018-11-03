import { gql } from 'apollo-boost';

// Genealogy Queries

export const GET_ALL_GENEALOGIES = gql`
  query {
    getAllGenealogies {
      firstName
      lastName
      likes
      createdDate
    }
  }
`;

// Genealogy Mutations

// User Queries

// User Mutations
export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;