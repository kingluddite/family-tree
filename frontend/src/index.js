import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// styles
import './assets/scss/main.scss';

// custom components
import withSession from './components/withSession';
import App from './components/App';
import Navbar from './components/shared/Navbar';
import Search from './components/genealogy/Search';
import AddGenealogy from './components/genealogy/AddGenealogy';
import GenealogyPage from './components/genealogy/GenealogyPage';
import Profile from './components/profile/Profile';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import StyleGuide from './components/StyleGuide';

const client = new ApolloClient({
  uri: 'http://localhost:4444/graphql',
  fetchOptions: {
    credentials: 'include',
  },
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
  onError: ({ networkError }) => {
    if (networkError) {
      console.log('Network Error', networkError);
    }
  },
});

const Root = ({ refetch, session }) => (
  <Router>
    <div id="wrapper">
      <Navbar session={session} />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/search" component={Search} />
        <Route path="/genealogy/add" component={AddGenealogy} />
        <Route path="/genealogy/:_id" component={GenealogyPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/signin" render={() => <Signin refetch={refetch} />} />
        <Route path="/signup" render={() => <Signup refetch={refetch} />} />
        <Route path="/styleguide" component={StyleGuide} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

const RootWithSession = withSession(Root);

ReactDOM.render(
  <ApolloProvider client={client}>
    <RootWithSession />
  </ApolloProvider>,
  document.getElementById('root')
);
