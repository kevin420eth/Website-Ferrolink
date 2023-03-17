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
            <section className='section'>
                {Data.map((item) => {
                    if (item.category === productType && item.name === productName) {
                        return (
                            <div>
                                <p>{item.name}</p>
                                <img src={item.image} alt={item.img} />
                            </div>
                        )
                    }
                })}
            </section>
        </div>
    )
}

export default SingleProduct