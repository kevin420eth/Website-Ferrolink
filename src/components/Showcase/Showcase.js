import React from 'react'
import './showcase.css'

const Showcase = () => {
    return (
        <section className='section showcase__section'>
            <div className='showcase__container'>
                <div className='product__category__container'>
                    <a href='#' className='product__category__link'>Hammers</a>
                    <a href='#' className='product__category__link'>Axes & Hatchets</a>
                    <a href='#' className='product__category__link'>Gardening Tools</a>
                    <a href='#' className='product__category__link'>Handles</a>
                    <a href='#' className='product__category__link'>Other Tools</a>
                </div>

                <div className='product__showcase'>
                    <div className='product__showcase__container'>
                        <div className='product__preview'>fsddfff</div>
                        <div className='product__preview'>fff</div>
                        <div className='product__preview'>fff</div>
                        <div className='product__preview'>fff</div>
                        <div className='product__preview'>fff</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase