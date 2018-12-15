import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// graphql
import { Mutation } from 'react-apollo';
import { SIGNIN_USER_MUTATION } from '../../queries';

// custom components
import Error from '../Error';

const initialState = {
  username: '',
  password: '',
};

class Signin extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    refetch: PropTypes.func.isRequired,
  };

  state = {
    ...initialState,
  };

  clearState = () => {
    this.setState({
      ...initialState,
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event, signinUser) => {
    const { history, refetch } = this.props;
    event.preventDefault();
    signinUser().then(async ({ data: { signinUser } }) => {
      localStorage.setItem('token', signinUser.token);
      await refetch();
      this.clearState();
      history.push('/');
    });
  };

  validateForm = () => {
    const { username, password } = this.state;
    const isInvalid = !username || !password;
    return isInvalid; // true or false
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="App">
        <h2 className="App">Signin</h2>
        <Mutation
          mutation={SIGNIN_USER_MUTATION}
          variables={{ username, password }}
        >
          {(signinUser, { data, loading, error }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error</div>;
            console.log(data);

            return (
              <form
                className="form"
                onSubmit={event => this.handleSubmit(event, signinUser)}
              >
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                  value={username}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={password}
                />
                <button
                  type="submit"
                  disabled={loading || this.validateForm()}
                  className="button-primary"
                >
                  Submit
                </button>
                {error && <Error error={error} />}
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default withRouter(Signin);
