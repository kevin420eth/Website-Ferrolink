import './product.css'
import React from 'react'
import Header from '../Header/Header'
import Showcase from '../Showcase/Showcase'


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