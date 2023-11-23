import React from 'react'
import './ItemCart.css'
import minus from '../../public/assets/minus.png'
import plus from '../../public/assets/plus.png'
import trash from '../../public/assets/trash.png'
const ItemCart = ({ product, setCart, cart }) => {
    const handleIncreaseAmount = () => {
        setCart(
            cart.map((item) =>
                item.id === product.id ? { ...item, amount: item.amount + 1 } : item
            )
        );
    }

    const handleDecreaseAmount = () => {
        if (product.amount > 1)
            setCart(
                cart.map((item) =>
                    item.id === product.id ? { ...item, amount: item.amount - 1 } : item
                )
            );
        else
            handleRemoveFromCart();
    };

    const handleRemoveFromCart = () => {
        setCart(cart.filter((item) => item.id !== product.id));
    };


    return (
        <div className='item-container'>
            <div className='img-product-container'>
                <div className='img-product-background' style={{ backgroundColor: product.color }}></div>
                <img src={product.image} alt={product.name} className='image-item' />
            </div>
            <div className='inf-product-container'>
                <p className='name'>{product.name}</p>
                <p className='price'>${product.price}</p>
                <div className='edit-item-container'>
                    <div className='edit-amount-container'>
                        <button className='button' onClick={handleDecreaseAmount}>
                            <img src={minus} alt='minus' style={{ height: '7px', width: '7px' }} />
                        </button>
                        <p className='amount'>{product.amount}</p>
                        <button className='button' onClick={handleIncreaseAmount}>
                            <img src={plus} alt='plus' style={{ height: '7px', width: '7px' }} />
                        </button>
                    </div>
                    <button className='button' style={{ backgroundColor: '#F6C90E' }} onClick={handleRemoveFromCart}>
                        <img src={trash} alt='trash' style={{ height: '15px', width: '15px' }} />
                    </button>
                </div>
            </div>
        </div >
    )
}

export default ItemCart
