import React from 'react';
import {BiCheck} from 'react-icons/bi';
import './services.css';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Appointment Scheduling System</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Employee/Student Management System</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Blogging Sites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Desktop Applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>All sort of Custom WordPress Websites</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT SECTION */}
        <article className='service'>
          <div className='service__head'>
            <h3>Backend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>C# MVC Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web APIs with Relational Database</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>MicroServices in ASP.NET</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Enterprise Level websites with REST APIs and Relational Database</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Dotnet Product Development</p>
            </li>
          </ul>
        </article>
        {/* END OF BACKEND DEVELOPMENT SECTION */}
        {/* <article className='service'>
          <div className='service__head'>
            <h3>Content Creation </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}
        {/* END OF CONTENT CREATION SECTION */}
      </div>
    </section>
  )
}

export default Services