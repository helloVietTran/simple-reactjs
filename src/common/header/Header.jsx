import React from 'react'
import Navbar from './navigation/Navbar'
import Search from './Search'
import Head from './Head'
import './Header.css'
export const Header = ({cartItem}) => {
  
  return (
    <>
     <Head />
     <Search cartItem={cartItem} />
     <Navbar />
    </>
  )
}


