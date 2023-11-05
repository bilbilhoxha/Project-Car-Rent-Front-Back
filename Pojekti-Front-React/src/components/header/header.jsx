import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="social-icons">
        <a href="https://www.facebook.com">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
   
    </header>
  );
}

export default Header;
