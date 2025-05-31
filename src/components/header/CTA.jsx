import React from 'react';
import CV from '../../assets/TalatNaeem.pdf';
// CTA ka matlb hy Call TO Action.... kisi specific kaam k liay koi action method/function bna'na
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA