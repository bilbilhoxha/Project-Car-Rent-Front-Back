import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import Home from './pages/home';
import Car from './pages/car';
import Login from './pages/login';
import Contact from './pages/contact';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/car" element={<Car />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/contact" element={<Contact />} />
            {/* Add more routes for additional pages */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
