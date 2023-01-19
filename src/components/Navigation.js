import React from 'react';
import '../styles/Navigation.css';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // If current page is About, set the current page to 'nav-link-active', otherwise set it to 'nav-link'
          className={currentPage === 'About' ? 'page-active' : 'nav-item'}
        >
          ABOUT ME
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'page-active' : 'nav-item'}
        >
          PORTFOLIO
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'page-active' : 'nav-item'}
        >
          RESUME
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'page-active' : 'nav-item'}
        >
          CONTACT
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
