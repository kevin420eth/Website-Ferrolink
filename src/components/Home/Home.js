import React from 'react'
import './home.css'
import video from '../../assets/materials/1.mp4'
import HomeTypewriter from './HomeTypeWriter'

const Home = () => {
  return (
    <section className='home__section'>
      <div className='home__container'>
        <div className='showcase__container'>
          <video className='showcase__video' src={video} muted autoPlay loop></video>
        </div>
        <div className='home__title'>
          <HomeTypewriter />
        </div>
      </div>
    </section>
  )
}

export default Home