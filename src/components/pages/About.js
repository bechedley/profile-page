import React from 'react';
import '../../styles/Page.css';
import profileImage from '../../assets/images/profile-round.png'

export default function About() {
    return (
        <div className='page justify-content-center'>
            <h1>About Me</h1>
            <img src={profileImage} title="Me on the coast of Slovenia" alt="profile" />
            <p>
                Hi, I'm Bec. <br>
                </br>I'm a full-stack web developer, content creator and marketing manager from Melbourne, Australia. I have experience with React, JavaScript, APIs, Node.js, Express, Sequelize, MySQL2 and MongoDB. I'm also an eCommerce specialist with 5 years experience in online store implementation, user experience, workflows, and wireframing. I design and produce content for both print and digital campaigns, and I've worn just about every marketing hat you can think of. I thrive on deadlines and work well autonomously and as part of a team. In my spare time I enjoy photography, travel, the oxford comma, and a good beach read.
                <br></br>
                If you'd like to work together, please get in touch!
            </p>
        </div>
    );
}