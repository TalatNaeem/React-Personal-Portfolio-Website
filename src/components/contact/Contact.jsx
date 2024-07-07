import React, { useRef } from 'react';

import "./contact.css";
import {MdOutlineEmail} from 'react-icons/md';
import {RiLinkedinBoxFill, RiLinkedinBoxLine, RiLinkedinLine, RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t4do40u', 'template_udt7x5j', form.current, 'y0_ZHToToW0s0KCIl')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>talatnaeemgondal@gmail.com</h5>
            <a href="mailto:talatnaeemgondal@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiLinkedinBoxFill className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Talat Naeem</h5>
            {/* https://www.facebook.com/talat.naeem.397 */}
            <a href="https://www.linkedin.com/in/talat-naeem/" target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+923161641274</h5>
            <a href="https://api.whatsapp.com/send?phone=+923161641274" target="_blank">Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="" placeholder='your full name' required />
          <input type="email" name="email" id="" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact