import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import '../styles/Header.css';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  // Check what the value of `currentPage` is. Depending on the value of currentPage, return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header className="header d-flex justify-content-between align-items-center">
        <h1>Rebecca Hedley</h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      {renderPage()}
    </div>
  );
}
