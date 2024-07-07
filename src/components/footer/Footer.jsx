import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>TALAT NAEEM</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/talat.naeem.397" target="_blank"><FaFacebookF /></a>
        <a href="https://www.instagram.com/talat.naeem.397/" target="_blank"><BsInstagram /></a>
        <a href="https://twitter.com/TalatNaeem6" target="_blank"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; TALAT NAEEM. All rights reserved.</small>
      </div>
    </footer>
    )
}

export default Footer