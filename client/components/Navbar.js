import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav-wrapper">
          <div className="container">
            <Link to="/" className="brand-logo">
              Grapevine
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
