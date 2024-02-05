import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Sale.css'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { AddCommasContext } from '../../context/Context';
const Sale = () => {
    const [product, setProduct] = useState([])

    const addCommas = useContext(AddCommasContext)

    useEffect(()=>{
      axios.get('http://localhost:3000/saleItems')
        .then(res => setProduct(res.data) )
        .catch(err => console.log(err))
    },[])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          {
              breakpoint: 1024,
              settings:{
                   slidesToShow: 5,
              }
          }
      ]
      };

  return (
    <>
    
    <div className="background">
    <div className="container ">
        <div className="heading c_flex">
            <div className="heading-left c_flex">
                <img src="	https://img.icons8.com/windows/32/fa314a/gift.png" alt="" />
                <h2>Sắp hết Sale</h2>
            </div>
            <div>
          
             <span>Tất cả</span>
             <FontAwesomeIcon icon={faCaretRight} className='caret-icon' />
            </div>
        </div>
        <Slider {...settings}>
            {
                product.map((item, index) =>{
                    return(
                        <div className="box" key={index}>
                            <div className="product padding-10 ">
                              <img className='saleImg' src={item.cover} alt="" />
                              <div className="detail">
                                <h3>{item.name}</h3>
                                <span>{addCommas(item.price)}</span>
                              </div>

                            </div>
                         </div>                        
                    )
                })
            }
        </Slider>


          
       
    </div>
    </div>
    </>
  )
}

export default Sale