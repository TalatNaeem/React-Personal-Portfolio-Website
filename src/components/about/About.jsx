import React from 'react';
import "./about.css";
// import ME from "../../assets/me-about.jpg";
import ME from "../../assets/apni3.jpeg";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About me image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p>Hello, myself Talat Naeem. A result-oriented full-stack engineer with 4+ years of experience having both managerial and technical skills with a demonstrated history of working for different tech companies, along with various individual projects. I am passionate about designing and developing elegant solutions to complex problems and have worked on projects ranging from small-scale applications to large enterprise systems. On this website, you will find a collection of my work and projects, as well as information about my skills and experience. Please feel free to explore.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About