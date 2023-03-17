import React from 'react'
import './showcase.css'
import ProductData from './Data'
import Header from '../Header/Header'
import { useParams } from 'react-router'

const Showcase = () => {
    const { productType } = useParams()

    return (
        <div>
            <Header />
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
                            {ProductData.map((item) => {
                                if (productType === item.category) {
                                    return (
                                        <a href={`/product/hammer/${item.name}`} className='product__preview' key={item.id}>
                                            <img className='product__preview__image' src={item.image} alt='img' />
                                            <p className='product__preview__name'>{item.name}</p>
                                        </a>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Showcase