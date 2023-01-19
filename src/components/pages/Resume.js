import React from 'react';
import '../../styles/Page.css';

export default function Resume() {
    return (
        <div className='page justify-content-center'>
            <h1>Resume</h1>
            <p>Click the link below to download a copy of my resume.
            </p>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Responsive design</li>
                <li>Javascript</li>
                <li>Handlebars.js</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>Git</li>
                <li>Web APIs</li>
                <li>Third-party APIs</li>
                <li>Server-side APIs</li>
                <li>Node.js</li>
                <li>ES6</li> 
                <li>Express.js</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>NoSQL</li>
                <li>MongoDB</li>
                <li>Progressive Web Applications</li>
                <li>React</li>
            </ul>
        </div>
    );
}