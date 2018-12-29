import { gql } from 'apollo-boost';

// Genealogy Queries

export const GET_ALL_GENEALOGIES = gql`
  query {
    getAllGenealogies {
      _id
      firstName
      lastName
      likes
      createdDate
    }
  }
`;

export const GET_CURRENT_USER_QUERY = gql`
  query GET_CURRENT_USER_QUERY {
    getCurrentUser {
      username
      email
      joinDate
    }
  }
`;

// Genealogy Mutations

// User Queries

// User Mutations
export const SIGNIN_USER_MUTATION = gql`
  mutation SIGNIN_USER_MUTATION($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
