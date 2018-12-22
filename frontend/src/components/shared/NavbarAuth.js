import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavbarAuth extends Component {
  render() {
    const { session } = this.props;
    return (
      <>
        <h2>Auth</h2>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/cologne/add">Add Cologne</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <button>Signout</button>
          </li>
        </ul>
        <h2>
          Welcome <strong>{session.getCurrentUser.username}</strong>
        </h2>
      </>
    );
  }
}

export default NavbarAuth;
