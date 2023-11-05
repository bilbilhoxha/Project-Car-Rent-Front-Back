import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <Link to="/products" className="navbar-brand">Admin Panel</Link>
            </div>
            {/* ky eshte butoni per faqene  pare "buttoni 1" */}
            <Link to="/" className="navbar-brand">Home</Link>
            <Link to="/shop" className="navbar-brand">Shop</Link>
            <Link to="/cart" className="navbar-brand">Checkout</Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;