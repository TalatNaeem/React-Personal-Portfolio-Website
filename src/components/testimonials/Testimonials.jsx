import React from 'react';
import "./testimonials.css";
import ME from "../../assets/me-about.jpg";
import AVTR1 from "../../assets/me-about.jpg";
import AVTR2 from "../../assets/me-about.jpg";
import AVTR3 from "../../assets/me-about.jpg";
import AVTR4 from "../../assets/me-about.jpg";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import AVTR1 from "../../assets/avarat1.jpg";
// import AVTR2 from "../../assets/avarat2.jpg";
// import AVTR3 from "../../assets/avarat3.jpg";
// import AVTR4 from "../../assets/avarat4.jpg";

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow 1',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium ipsa explicabo fuga perspiciatis, velit ratione quia! Velit, possimus nam",
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow 2',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium ipsa explicabo fuga perspiciatis, velit ratione quia! Velit, possimus nam",
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow 3',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium ipsa explicabo fuga perspiciatis, velit ratione quia! Velit, possimus nam",
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow 4',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium ipsa explicabo fuga perspiciatis, velit ratione quia! Velit, possimus nam",
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
            <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar} />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
          )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials