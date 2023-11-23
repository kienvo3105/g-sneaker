import React from 'react'
import ItemCart from '../ItemCart/ItemCart'
import logo from '../../public/assets/nike.png'
import '../ProductList/ProductList.css';
import './Cart.css'
const Cart = ({ cart, setCart }) => {
    return (
        <div className='product-list-container'>
            {/* <div className="yellow-corner"></div> */}
            <img src={logo} alt='logo' style={{ width: '50px', height: '20px' }} />
            <div className='title-container'>
                <h2>Your Cart</h2>
                <h2>${cart?.reduce((sum, value) => sum + (value.price * value.amount), 0).toFixed(2)}</h2>
            </div>

            <div className='product-list'>
                {cart.length !== 0 ?
                    cart.map((product) => (
                        <ItemCart key={product.id} product={product} setCart={setCart} cart={cart} />
                    ))
                    :
                    <p style={{ fontSize: '12px', color: '#303841' }}>Your cart is empty</p>
                }
            </div>
        </div>
    )
}

export default Cart
