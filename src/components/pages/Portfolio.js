import React from 'react';
import Project from '../Project';
import blogImage from '../../assets/images/react-portfolio-project-blog.png'
import jateImage from '../../assets/images/react-portfolio-project-jate.png'
import notesImage from '../../assets/images/react-portfolio-project-notes.png'
import weatherImage from '../../assets/images/react-portfolio-project-weather.png'
import schedulerImage from '../../assets/images/react-portfolio-project-scheduler.png'
import quizImage from '../../assets/images/react-portfolio-project-quiz.png'
import '../../styles/Page.css';

function Portfolio() {
    const projectItems = [
        {
            title: 'CMS Blog',
            url: 'https://bechedley-blog.herokuapp.com/homepage',
            repo: 'https://github.com/bechedley/cms-blog',
            img: blogImage,
        },
        {
            title: 'PWA Text Editor',
            url: 'https://bechedley-pwa-editor.herokuapp.com/',
            repo: 'https://github.com/bechedley/pwa-jate-editor',
            img: jateImage,
        },
        {
            title: 'Note Taker',
            url: 'https://bechedley-note-taker.herokuapp.com/notes',
            repo: 'https://github.com/bechedley/note-taker',
            img: notesImage,
        },
        {
            title: 'Weather Dashboard',
            url: 'https://bechedley.github.io/weather-dashboard/',
            repo: 'https://github.com/bechedley/weather-dashboard',
            img: weatherImage,
        },
        {
            title: 'Work Day Scheduler',
            url: 'https://bechedley.github.io/work-day-scheduler/',
            repo: 'https://github.com/bechedley/work-day-scheduler',
            img: schedulerImage,
        },
        {
            title: 'Coding Quiz',
            url: 'https://bechedley.github.io/code-quiz/',
            repo: 'https://github.com/bechedley/code-quiz',
            img: quizImage,
        }
    ]

    return (
        <div className='page'>
            <h1>Portfolio</h1>
            <div className='row justify-content-center'>
            {projectItems.map((projectItem, index) => (
                <Project {...projectItem} key={index}/>
        ))}
        </div>
        </div>
      );

}

export default Portfolio;