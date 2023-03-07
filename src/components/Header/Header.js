import React from 'react'
import './header.css'
import logo from '../../assets/logo192.png'

const Header = () => {
  return (
    <div className='header__container'>
      <a className='header__logo__container' href='https://www.ferrolink.com.tw'>
        <div className='logo__name'>
          Ferrolink
          <span>Industries Co.</span>
        </div>
        <img className='logo__img' src={logo} alt='logo__img' />
      </a>
      <nav className='navbar__container'>
        <a className='navbar__link' href='#top'>Home</a>
        <a className='navbar__link' href='#product'>Product</a>
        <a className='navbar__link' href='#about'>About</a>
        <a className='navbar__link' href='#contact'>Contact</a>
      </nav>
    </div>
  )
}

export default Header