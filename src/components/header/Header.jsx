import React from 'react';
import CTA from './CTA';
import "./header.css";
// import ME from '../../assets/me.png';
import ME from '../../assets/developer.gif';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Talat Naeem</h1>
        <h5 className='text_light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt='apni tasveer hy'></img>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header