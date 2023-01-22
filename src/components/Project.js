import React from 'react';
import githubIcon from '../assets/images/github-icon-blue.svg'
import '../styles/Project.css';

function Project(props) {

    return (
        <div className='col-auto'>
        <div className="project card" style={{
            backgroundImage: `url(${props.img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='overlay'>
                <a href={props.url} target="_blank" rel="noreferrer"><h2 className="card-title d-flex">{props.title}</h2></a>
                <a href={props.repo} target="_blank" rel="noreferrer"><img src={githubIcon} title="Github Profile" alt="github profile link" height="50px" className='git-image d-flex'/></a>
            </div>
        </div>
        </div>
    );

}

export default Project;