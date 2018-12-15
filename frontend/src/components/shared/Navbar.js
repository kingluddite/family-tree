import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <NavbarAuth />
    </nav>
  );
};

const NavbarUnauth = () => (
  <ul>
    <li>
      <NavLink to="/" exact>
        Home
      </NavLink>
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
);

const NavbarAuth = () => (
  <ul>
    <li>
      <NavLink to="/" exact>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/search">Search</NavLink>
    </li>
    <li>
      <NavLink to="/family/add">Add Family</NavLink>
    </li>
    <li>
      <NavLink to="/profile">Profile</NavLink>
    </li>
    <li>
      <button>Signout</button>
    </li>
  </ul>
);

export default Navbar;
