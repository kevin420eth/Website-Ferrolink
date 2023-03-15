import './product.css'
import Header from '../Header/Header'
import Showcase from '../Showcase/Showcase'
import React from 'react'

const Product = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Showcase />
            </main>
        </div>
    )
}

export default Product