import { gql } from 'apollo-boost';

export const GET_ALL_GENEALOGIES = gql`
  query {
    getAllGenealogies {
      firstName
      lastName
      likes
    }
  }
`;
