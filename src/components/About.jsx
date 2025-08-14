import React from 'react';
import '../index.css';
import Dwi from '../assets/dwi.jpg';
import Project from './Project';
import Contact from "./Contact";
import Technologies from './Technologies';

const About = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

 

  return (
    <div className="about-container">
      <div className="left-column">
        <img src={Dwi} alt="Dwi Wahyu Susilowati" className="profile-photo" />
        <h2 className="name">Dwi Wahyu Susilowati</h2>

        <div className="navigation-buttons">
          <button 
            className="project-button" 
              onClick={() => scrollTo('bio')}
            >
              Home
          </button>
          <button className="project-button" onClick={() => scrollTo('projects')}>Project</button>
          <button className="project-button" onClick={() => scrollTo('technologies')}>
            Technologies
          </button>
        <button className="project-button" onClick={() => scrollTo('Contact')}>Contact</button>

        </div>
      </div>

      <div className="right-column">
        <div className="bio" id="bio">
          <p>
            Hi, I'm Dwi Wahyu Susilowati, a backend developer specializing in Java-based application development.
            I also have full-stack capabilities, working comfortably with React.js, Node.js, PostgreSQL, and SQLyog.
          </p>
          <p>
            I’m passionate about building efficient, secure, and user-friendly applications. I believe in writing
            clean, maintainable code and collaborating closely to deliver solutions that truly meet user needs.
          </p>
          <p>
            Whether working on back-end logic or full-stack projects, I’m always eager to learn, grow, and contribute
            to meaningful digital experiences.
          </p>
        </div>

        {/* Project dipisahkan ke komponen sendiri */}
        <Project />


        {/* Teknologi dipisahkan ke komponen sendiri */}
        <Technologies />
        <Contact />
      </div>
    </div>
  );
};

export default About;
