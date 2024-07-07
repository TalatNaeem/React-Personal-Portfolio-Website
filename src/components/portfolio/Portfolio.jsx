import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/try1.jpg';
import IMG2 from '../../assets/try1.png';
import IMG3 from '../../assets/try1.png';
import IMG4 from '../../assets/try1.png';
import IMG5 from '../../assets/try1.png';
import IMG6 from '../../assets/try1.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'REACT: Blogs Posting Website',
    github: 'https://github.com/TalatNaeem/BlogsApp-React',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Angular: Personal Portfolio Website.',
    github: 'https://github.com/TalatNaeem/React-Personal-Portfolio-Website',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG6,
    title: 'Angular: HR system with MUI',
    github: 'https://github.com/TalatNaeem/angular-materialUI',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: IMG3,
    title: '.Net Core: CRUD REST API.',
    github: 'https://github.com/TalatNaeem/DotnetCoreCRUDAPI',
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: IMG4,
    title: '.Net Core: Migration SQL Script.',
    github: 'https://github.com/TalatNaeem/Dotnet5.0to6.0Shifting',
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: IMG5,
    title: 'Online Ticket Reservation System',
    github: 'https://github.com/TalatNaeem/SMD-Android-Bus-Reservation-App',
    demo: 'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Some Recent Projects</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              {/* <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div> */}
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target="_blank">Github</a>
                {/* <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a> */}
              </div>
            </article>
            )
          })
        }
      </div>
      <div className='extra_margin'></div>
    </section>
  )
}

export default Portfolio