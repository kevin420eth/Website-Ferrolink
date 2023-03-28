import React from 'react'
import './showcase.css'
import ProductData from '../../Data'
import Header from '../Header/Header'
import { useParams } from 'react-router'
import ShowcaseSwiper from './ShowcaseSwiper'

const Showcase = () => {
    const { productType } = useParams()
    let count = 0

    return (
        <div>
            <Header />
            <section className='section product__showcase__section'>
                <div className='product__showcase__container'>
                    <div className='product__category__container'>
                        <a href='/product/hammer' className='product__category__link'>Hammers</a>
                        <a href='/product/axe' className='product__category__link'>Axes & Hatchets</a>
                        <a href='/product/gardening' className='product__category__link'>Gardening Tools</a>
                        <a href='/product/handle' className='product__category__link'>Handles</a>
                        <a href='/product/other' className='product__category__link'>Other Tools</a>
                    </div>

                    <div className='product__preview__section'>
                        <div className='product__preview__container'>
                            <ShowcaseSwiper />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Showcase