import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavbarUnauth extends Component {
  render() {
    return (
      <>
        <h2>Unauth</h2>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
          <li>
            <NavLink to="/signin">Signin</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </ul>
      </>
    );
  }
}

export default NavbarUnauth;
