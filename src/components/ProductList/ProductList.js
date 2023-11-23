import React from 'react'
import data from '../../public/data/shoes.json'
import Product from '../Product/Product'
import './ProductList.css';
import logo from '../../public/assets/nike.png'

const ProductList = ({ cart, handleAddProductToCart }) => {

    return (
        <div className='product-list-container'>
            {/* <div className="yellow-corner"></div> */}
            <img src={logo} alt='logo' style={{ width: '50px', height: '20px' }} />
            <h2>Our Products</h2>
            <div className='product-list'>
                {data.shoes.map((product) => (
                    <Product key={product.id} product={product} onAddToCart={handleAddProductToCart} cart={cart} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
