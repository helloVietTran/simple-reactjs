import React, {memo} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faHeadset, faShieldHalved, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import './About.css'
const About = () => {
  return (
    <>
    <div className="background">
        <div className="container grid ">
            <div className="product align">
                <FontAwesomeIcon icon={faTruckFast} className='about-icon' />
               <h2 className='about-item_title'>Giao hàng toàn quốc</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Error laboriosam laborum aut illo placeat </p>
            </div>
            <div className="product align">
                <FontAwesomeIcon icon={faCreditCard} className='about-icon' />
               <h2 className='about-item_title'>Thanh toán nhanh chóng</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Error laboriosam laborum aut illo placeat </p>
            </div>
            <div className="product align">
                <FontAwesomeIcon icon={faShieldHalved} className='about-icon' />
               <h2 className='about-item_title'>An tâm mua sắm</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Error laboriosam laborum aut illo placeat </p>
            </div>
            <div className="product align">
                <FontAwesomeIcon icon={faHeadset} className='about-icon' />
               <h2 className='about-item_title'>Hỗ trợ 24/7</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Error laboriosam laborum aut illo placeat </p>
            </div>
        </div>

    </div>
    </>
  )
}

export default memo(About)