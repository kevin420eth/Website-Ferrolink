import React from 'react'
import './singleproduct.css'
import Header from '../Header/Header'
import { useParams } from 'react-router'
import Data from '../../Data'

const SingleProduct = () => {
    const { productType, productName } = useParams()

    return (
        <div>
            <Header />
            <section className='single__product__section section'>
                {Data.map((item) => {
                    if (item.category === productType && item.name === productName) {
                        return (
                            <div className='single__product__container'>
                                <ul className="single__product__info">
                                    <li className='single__product__label'>Item Name</li>
                                    <li className="single__product__content">Super huge jumbo hammer{}</li>
                                    <li className="single__product__label">Number</li>
                                    <li className="single__product__content">{item.name}</li>
                                    <li className='single__product__label'>Size</li>
                                    <li className="single__product__content">50x100x50 inches{}</li>
                                    <li className="single__product__label">Weight</li>
                                    <li className="single__product__content">60oz{}</li>
                                    <li className='single__product__label'>Handle Material</li>
                                    <li className="single__product__content">Alloy Steel{}</li>
                                    <li className="single__product__label">Grip Type</li>
                                    <li className="single__product__content">Rubber{}</li>
                                    <li className="single__product__label">About</li>
                                    <li className="single__product__content">This is a hammer</li>
                                </ul>
                                <div className="single__product__showcase">
                                    <img src={item.image} alt={item.img} />
                                </div>
                            </div>
                        )
                    }
                })}
            </section>
        </div>
    )
}

export default SingleProduct