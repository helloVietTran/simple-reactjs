import React, {memo} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import NewList from './NewList'
import './NewProduct.css'


const NewProduct = () => {
  return (
    <>
    <div className='background'>
    <div className="container ">
       <div className="heading c_flex">
       <div className='heading-left c_flex'>
            <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" alt="" />
            <h2>Mới lên kệ</h2>
        </div>
        <div >
            <span>Tất cả</span>
             <FontAwesomeIcon icon={faCaretRight} className='caret-icon' />
        </div>
       
       </div>
       <NewList />
    </div>
    </div>
    </>
  )
}

export default memo(NewProduct)