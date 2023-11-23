import React, { useState, useEffect } from 'react'
import ProductList from './components/ProductList/ProductList'
import './App.css'
const App = () => {
  const [cart, setCart] = useState([])

  const handleAddProductToCart = (product) => {
    setCart([...cart, { ...product, amount: 1 }])
  }

  return (
    <div className='App'>
      <ProductList handleAddProductToCart={handleAddProductToCart} cart={cart} />
      <ProductList />
    </div>
  )
}

export default App
