import React from 'react';

import { Query } from 'react-apollo';
import { GET_ALL_GENEALOGIES } from '../queries';

// custom components
import GenealogyItem from './genealogy/GenealogyItem';

const App = () => (
  <div>
    <h1>Home</h1>
    <Query query={GET_ALL_GENEALOGIES}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error</div>;
        console.log(data);
        return (
          <ul>
            {data.getAllGenealogies.map(genealogy => (
              <GenealogyItem key={genealogy._id} {...genealogy} />
            ))}
          </ul>
        );
      }}
    </Query>
  </div>
);
export default App;
