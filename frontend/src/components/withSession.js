import React from 'react';

import { Query } from 'react-apollo';

import { GET_CURRENT_USER_QUERY } from '../queries';

const withSession = Component => props => (
  <Query query={GET_CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return null;
      console.log(data); // add this

      return <Component {...props} />;
    }}
  </Query>
);

export default withSession;
