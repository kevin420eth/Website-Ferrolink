import React from 'react'
import './footer.css'



const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <section id='footer' className='section footer__section'>
      <div className='footer__link'>
        <a className='footer__link__text' href='#top'>Home</a>
        <a className='footer__link__text' href='/product'>Product</a>
        <a className='footer__link__text' href='#about'>About</a>
        <a className='footer__link__text' href='#service'>Service</a>
        <a className='footer__link__text' href='#contact'>Contact</a>
      </div>
      <p className='footer__copyright__text'>Copyright © {year} Ferrolink Industries Co. All rights reserved.</p>
    </section>
  )
}

export default Footer