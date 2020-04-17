import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
  render () {
    return (
      <Navbar className="d-flex flex-column">
        <Link to="/">
          <Navbar.Brand className="ml-2">Tromsø Arctic Adventures</Navbar.Brand>
        </Link>
        <Nav>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/activities">
            Activities
          </Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
