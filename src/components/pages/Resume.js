import React from 'react';
import '../../styles/Page.css';
import iconGif from '../../assets/images/web-dev-icons-gif.gif'
import resumeDownload from '../../assets/files/web-dev-resume-rhedley.pdf'

export default function Resume() {
    return (
        <div className='page justify-content-center'>
            <h1>Resume</h1>
            <p>Click the link below to download a copy of my resume.
            </p>
            <a href={resumeDownload} download>DOWNLOAD MY RESUME</a>
            <div className='icon-top'>
            <img src={iconGif} title="Icons of tech proficiencies" alt="icons of tech proficiencies" />
            </div>
            <div className='d-flex p3 page-box'>
            <h3>Front-end Proficiencies:</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Responsive design</li>
                <li>Bootstrap and CSS Frameworks</li>
                <li>Javascript</li>
                <li>Handlebars.js</li>
            </ul>
            <h3>Back-end Proficiencies:</h3>
            <ul>
                <li>Git</li>
                <li>Web APIs</li>
                <li>Third-party APIs</li>
                <li>Server-side APIs</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>SQL</li>
                <li>Sequelize</li>
                <li>NoSQL</li>
                <li>MongoDB</li>
                <li>Progressive Web Applications</li>
                <li>React</li>
                <li>MERN</li>
            </ul>
            </div>
        </div>
    );
}