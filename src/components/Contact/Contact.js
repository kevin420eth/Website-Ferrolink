import React from 'react'
import './contact.css'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'


const Contact = () => {
  return (
    <section id='contact' className='section contact__section'>
      <h1 className='contact__title'>Contact</h1>
      <div className='contact__container'>
        <div className='contact__options'>
          <a href='mailto:webmaster@example.com' className='contact__option'>
            <AiOutlineMail className='contact__option__icon' />
            <p className='contact__option__text'>Email</p>
          </a>
          <a href='https://api.whatsapp.com/send?phone=886968719602&text=Hello!' className='contact__option' target='_blank' rel="noreferrer">
            <AiOutlineWhatsApp className='contact__option__icon' />
            <p className='contact__option__text'>Whapsapp</p>
          </a>
          <a href='mailto:webmaster@example.com' className='contact__option' target='_blank' rel="noreferrer">
            <RiMessengerLine className='contact__option__icon' />
            <p className='contact__option__text'>Messenger</p>
          </a>
        </div>
        <div className='contact__form__section'>
          <p className='form__title'>Inquiry</p>
          <form className='contact__form' action='' method='post'>
            <label className='input__label' for='name'>Name</label>
            <input className='form__input' id='name' type='text' required></input>
            <label className='input__label' for='email'>Email</label>
            <input className='form__input' id='email' type='email' required></input>
            <label className='input__label' for='message'>Message</label>
            <textarea className='form__input' id='message' type='text' rows="4" required></textarea>
            <div className='form__submit'>
              <input type='button' value='Submit' />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact