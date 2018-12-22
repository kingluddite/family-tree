import React, { Component } from 'react';
import PropTypes from 'prop-types';

// custom components
import NavbarAuth from './NavbarAuth';
import NavbarUnauth from './NavbarUnauth';

class Navbar extends Component {
  static propTypes = {
    session: PropTypes.object,
  };

  static defaultProps = {
    session: null,
  };

  render() {
    const { session } = this.props;

    return (
      <nav>
        {session && session.getCurrentUser ? (
          <NavbarAuth session={session} />
        ) : (
          <NavbarUnauth />
        )}
      </nav>
    );
  }
}

export default Navbar;
