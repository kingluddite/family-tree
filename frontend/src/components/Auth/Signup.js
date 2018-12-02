import React, { Component } from 'react';

// graphql
import { Mutation } from 'react-apollo';
import { SIGNUP_USER } from '../../queries';

// custom components
import Error from '../Error';

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
      // console.log(signupUser);
      localStorage.setItem('token', signupUser.token);
      this.clearState();
    });
  };

  validateForm = () => {
    const { username, email, password, passwordConfirmation } = this.state;
    const isInvalid =
      !username ||
      !email ||
      !password ||
      !passwordConfirmation ||
      password !== passwordConfirmation;
    return isInvalid; // true or false
  };

  render() {
    const { username, email, password, passwordConfirmation } = this.state;

    return (
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <h2>Signup</h2>
          </div>
        </section>
        <Mutation
          mutation={SIGNUP_USER}
          variables={{ username, email, password }}
        >
          {(signupUser, { data, loading, error }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error</div>;
            // console.log(data);

            return (
              <>
                <section id="two">
                  <div className="inner">
                    <div className="grid-wrapper">
                      <div className="col-6">
                        <h2 className="align-center">Register</h2>
                        <form
                          className="form"
                          onSubmit={event =>
                            this.handleSubmit(event, signupUser)
                          }
                        >
                          <div className="mb-5">
                            <input
                              type="text"
                              name="username"
                              placeholder="Username"
                              onChange={this.handleChange}
                              value={username}
                            />
                          </div>
                          <div className="mb-5">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              onChange={this.handleChange}
                              value={email}
                            />
                          </div>
                          <div className="mb-5">
                            <input
                              type="password"
                              name="password"
                              placeholder="Password"
                              onChange={this.handleChange}
                              value={password}
                            />
                          </div>
                          <div className="mb-5">
                            <input
                              type="password"
                              name="passwordConfirmation"
                              placeholder="Confirm Password"
                              onChange={this.handleChange}
                              value={passwordConfirmation}
                            />
                          </div>
                          <div className="mb-5">
                            <button
                              type="submit"
                              disabled={loading || this.validateForm()}
                              className="button-primary"
                            >
                              Submit
                            </button>
                            {error && <Error error={error} />}
                          </div>
                        </form>
                      </div>
                      <div className="col-6">
                        <p>
                          <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas rerum necessitatibus fuga ex sequi
                            incidunt repellat. Voluptates eum molestias iusto.
                            Nulla ex accusantium animi saepe ullam deserunt
                            voluptates in repellat.
                          </span>
                          <span>
                            Necessitatibus fugiat nisi labore rem, molestiae
                            ipsa dolores ab velit qui illo corrupti minus et
                            cumque consequatur vitae officia doloremque quisquam
                            non maxime? Necessitatibus temporibus aut cumque
                            dolor excepturi odit.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* END .inner */}
                </section>
                {/* END section#two */}
                <section id="three">
                  <div className="inner">
                    <div className="grid-wrapper">
                      <div className="col-3">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Temporibus delectus totam quod error dolores,
                          cupiditate voluptatem optio autem quos, soluta
                          reprehenderit, sed quia. Similique sit, esse error cum
                          eaque assumenda.
                        </p>
                      </div>
                      <div className="col-3">
                        <p>
                          Autem eius dicta tempore similique maxime facere
                          inventore fugiat quibusdam tenetur libero
                          reprehenderit debitis esse minima cum, aspernatur
                          natus iusto illo magni suscipit at illum itaque vel?
                          Quo, ipsam at!
                        </p>
                      </div>
                      <div className="col-3">
                        <p>
                          Ab debitis quaerat quod. Dicta nam, dignissimos
                          mollitia vitae nemo sequi quia reiciendis explicabo
                          doloribus totam magni optio culpa praesentium rerum
                          deserunt distinctio. Ea dolores iusto veniam dolore at
                          facilis.
                        </p>
                      </div>
                      <div className="col-3">
                        <p>
                          Accusantium quidem mollitia minus voluptas cupiditate.
                          Inventore aliquam ab totam labore quam natus, alias
                          autem vitae quia, quidem iure sit exercitationem
                          eveniet adipisci esse soluta facilis voluptatem
                          aliquid perspiciatis? Ipsum?
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* END .inner */}
                </section>
                {/* END section#three */}
              </>
            );
          }}
        </Mutation>
      </div>
      //  END #main
    );
  }
}

export default Signup;
