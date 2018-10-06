import React, { Component } from 'react';

// graphql
import { Mutation } from 'react-apollo';
import { SIGNUP_USER } from '../../queries';

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

class Signup extends Component {
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
    // console.log(name, ':', value);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event, signupUser) => {
    event.preventDefault();
    // call our signupUser function
    // it is a promise so we can use `then()`
    // within `then()` we get our return `data`
    signupUser().then(({ data: { signupUser } }) => {
      console.log(signupUser);
      this.clearState();
    });
  };

  render() {
    const { username, email, password, passwordConfirmation } = this.state;

    return (
      <div className="App">
        <h2 className="App">Signup</h2>
        <Mutation
          mutation={SIGNUP_USER}
          variables={{ username, email, password }}
        >
          {(signupUser, { data, loading, error }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error</div>;
            console.log(data);

            return (
              <form
                className="form"
                onSubmit={event => this.handleSubmit(event, signupUser)}
              >
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                  value={username}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={this.handleChange}
                  value={email}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={password}
                />
                <input
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Confirm Password"
                  onChange={this.handleChange}
                  value={passwordConfirmation}
                />
                <button className="button-primary">Submit</button>
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default Signup;
