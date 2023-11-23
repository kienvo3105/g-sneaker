import React from 'react';
import './Product.css'
import checkImg from "../../public/assets/check.png"
const Product = ({ product, onAddToCart, cart }) => {
    return (
        <div className='product-container'>
            <div style={{ backgroundColor: product.color }} className='img-container'>
                <img src={product.image} alt={product.name} className='image' />
            </div>
            <h3>{product.name}</h3>
            <p className='description'>{product.description}</p>
            <div className='price-cart'>
                <p className='price'>${product.price}</p>
                {
                    !cart?.some(item => item.id === product.id) ?
                        <button className='button-add-cart' onClick={() => onAddToCart(product)} >Add To Cart</button>
                        :
                        <div className='check-container'>
                            <img src={checkImg} alt='check' style={{ height: '20px', width: '20px', color: '#303841' }} />
                        </div>
                }
            </div>
        </div>
    );
};

export default Product;