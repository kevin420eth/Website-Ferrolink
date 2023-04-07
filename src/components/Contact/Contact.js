import React, { useState, useRef } from 'react'
import './contact.css'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const [clientName, setClientName] =useState('')
  const [clientEmail, setClientEmail] =useState('')
  const [clientMessage, setClientMessage] =useState('')

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('service_6soa5u4', 'template_adu9qtl', form.current, 'nKd0EqIv95U-g9IVV')
      .then((result) => {
        setClientName('')
        setClientEmail('')
        setClientMessage('')

        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <section id='contact' className='section contact__section'>
      <h1 className='contact__title'>Contact</h1>
      <div className='contact__container'>
        <div className='contact__options'>
          <a href='mailto:sales@ferrolink.co' className='contact__option'>
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
          <form className='contact__form' ref={form} onSubmit={sendEmail}>
            <label className='input__label' htmlFor='name'>Name</label>
            <input className='form__input' id='name' type='text' value={clientName} name='client_name' onChange={(event)=>{setClientName(event.target.value)}} required></input>

            <label className='input__label' htmlFor='email'>Email</label>
            <input className='form__input' id='email' type='email' value={clientEmail} name='client_email' onChange={(event)=>{setClientEmail(event.target.value)}} required></input>

            <label className='input__label' htmlFor='message'>Message</label>
            <textarea className='form__input' id='message' type='text' rows="4" value={clientMessage} name='client_message' onChange={(event)=>{setClientMessage(event.target.value)}} required></textarea>

            <div className='form__submit'>
              <button className='submit__botton' type='submit' value={clientMessage} name='submit__botton'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact