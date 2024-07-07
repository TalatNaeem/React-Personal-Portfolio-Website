import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithubSquare} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/talat-naeem-12b9801b3/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/TalatNaeem/' target="_blank"><FaGithubSquare /></a>
        {/* <a href='https://dribble.com' target="_blank"><FiDribbble /></a> */}
    </div>
  )
}

export default HeaderSocials