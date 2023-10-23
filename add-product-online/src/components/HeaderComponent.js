import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <Link to="/" className="navbar-brand">Admin Panel</Link>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
