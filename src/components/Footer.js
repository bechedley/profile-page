import React from 'react';
import githubIcon from '../assets/images/github-icon-blue.svg'
import linkedInIcon from '../assets/images/linkedin-icon-blue.svg'
import stackIcon from '../assets/images/stack-icon-blue.svg'
import '../styles/Footer.css';

function Footer() {
    return (
      <footer className="footer d-flex justify-content-center align-items-center">
        <a href='https://github.com/bechedley'><img src={githubIcon} title="Github Profile" alt="github profile link" height="50px"/></a>
        <a href='https://stackoverflow.com/users/20970759/becsdev'><img src={stackIcon} title="Stack Overflow Profile" alt="stack overflow profile link" height="50px"/></a>
        <a href='https://www.linkedin.com/in/rebecca-hedley-50351b136/'><img src={linkedInIcon} title="LinkedIn Profile" alt="linkedin profile link" height="50px"/></a>
      </footer>
    );
  }
  
  export default Footer;