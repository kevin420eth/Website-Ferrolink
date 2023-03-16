import React from 'react'
import './showcase.css'
import HammerData from './HammerData'

const Showcase = () => {
    return (
        <section className='section product__showcase__section'>
            <div className='product__showcase__container'>
                <div className='product__category__container'>
                    <a href='/' className='product__category__link'>Hammers</a>
                    <a href='#e' className='product__category__link'>Axes & Hatchets</a>
                    <a href='#e' className='product__category__link'>Gardening Tools</a>
                    <a href='#e' className='product__category__link'>Handles</a>
                    <a href='#e' className='product__category__link'>Other Tools</a>
                </div>

                <div className='product__preview__section'>
                    <div className='product__preview__container'>
                        {HammerData.map((item) => {
                            return (
                                <div className='product__preview' key={item.id}>
                                    <img className='product__preview__image' src={item.image} alt='img' />
                                    <p className='product__preview__name'>{item.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase