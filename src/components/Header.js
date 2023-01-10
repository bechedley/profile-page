import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

function Header() {
    return (
      <header className="header">
        <h1>Rebecca Hedley</h1>
        <Navigation />
      </header>
    );
  }
  
  export default Header;