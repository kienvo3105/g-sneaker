import React, { useState, useEffect } from 'react'
import ProductList from './components/ProductList/ProductList'
import Cart from './components/Cart/Cart'
import './App.css'
const App = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);


  const handleAddProductToCart = (product) => {
    setCart([...cart, { ...product, amount: 1 }])
  }

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('cart', JSON.stringify(cart));
    };


    window.addEventListener('beforeunload', handleBeforeUnload);


    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [cart]);

  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedState);
    setLoading(false);
  }, [])


  if (loading)
    return null;

  return (
    <div className='App'>
      <ProductList handleAddProductToCart={handleAddProductToCart} cart={cart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  )
}

export default App
