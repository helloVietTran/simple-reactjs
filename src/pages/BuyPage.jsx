import React from 'react'
import Shop from '../components/shop/Shop'
const BuyPage = ({ productItems, cartItem, addToCart}) => {
  return (
    <>
      <Shop productItems={productItems} cartItem={cartItem} addToCart={addToCart} /> 
       
    </>
  )
}

export default BuyPage