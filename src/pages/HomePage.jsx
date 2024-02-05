import React from 'react'
import Home from '../components/slider/SliderHome'
import FlashDeal from '../components/flashDeals/FlashDeal'
import TopCate from '../components/topCategory/TopCate'
import NewProduct from '../components/newProduct/NewProduct'
import Sale from '../components/sale/Sale'
import Banner from '../components/banner/Banner'
import About from '../components/about/About'
import Shop from '../components/shop/Shop'

const HomePage = ({ productItems, cartItem, addToCart}) => {
  return (
    <>
      <Home />
      <FlashDeal productItems={productItems} cartItem={cartItem} addToCart={addToCart} />
      <TopCate />
      <NewProduct />
      <Sale />
      <Shop productItems={productItems} cartItem={cartItem} addToCart={addToCart} />
      <Banner />
      <About />
    </>

  )
}

export default HomePage