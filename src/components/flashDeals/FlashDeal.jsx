import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import FlashCard from './FlashCard';
import './FlashDeal.css'
const FlashDeal = ( {productItems, addToCart, cartItem} ) => {
  return (
    <section className='flash background'>
        <div className="container">
            <div className="f_flex heading">
                <FontAwesomeIcon icon={faBolt} className='sale-icon' />
                <h1>Flash Deals</h1>
            </div>  
            <FlashCard productItems={productItems} addToCart={addToCart} cartItem={cartItem} />  
       </div>
    </section>
  )
}

export default FlashDeal;