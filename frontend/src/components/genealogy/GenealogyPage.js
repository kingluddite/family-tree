import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';

// GraphQL
import { GET_GENEALOGY } from '../../queries';

class GenealogyPage extends Component {
  render() {
    const { match } = this.props;
    const { _id } = match.params;

    return (
      <Query query={GET_GENEALOGY} variables={{ _id }}>
        {({ data, loading, error }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error</div>;
          console.log(data);

          return <div>Genealogy Page</div>;
        }}
      </Query>
    );
  }
}

export default withRouter(GenealogyPage);
