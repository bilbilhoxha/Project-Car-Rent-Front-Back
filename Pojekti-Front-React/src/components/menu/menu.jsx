import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';


const Menu = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="menu">
      <nav className="navbar">
        <Link to="/" className={`menu-item ${menu === "home" ? "active" : ""}`} onClick={() => setMenu("home")}>Home</Link>
        <Link to="/car" className={`menu-item ${menu === "car" ? "active" : ""}`} onClick={() => setMenu("car")}>Car Rental</Link>
        <Link to="/login" className={`menu-item ${menu === "login" ? "active" : ""}`} onClick={() => setMenu("login")}>Login</Link>
        <Link to="/contact" className={`menu-item ${menu === "login" ? "active" : ""}`} onClick={() => setMenu("contact")}>Contact</Link>
      </nav>
    </div>
  );
}

export default Menu;
