import React from 'react'
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faPlus, faLongArrowAltRight, faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AddCommasContext } from '../../context/Context';

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className="control-btn control-btn-1" onClick={onClick}>
            <FontAwesomeIcon className='next-btn' icon={faLongArrowAltRight}  />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="control-btn control-btn-2" onClick={onClick}>
            <FontAwesomeIcon className='prev-btn' icon={faLongArrowAltLeft}  />
        </div>
    );
}

const FlashCard = ( { productItems, addToCart}) => { 
    const addCommas = useContext(AddCommasContext);
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings:{
                     slidesToShow: 3,
                     slidesToScroll: 1,
                }
            }
        ]
      };
 
  return (
    <Slider {...settings}>
    {     
        productItems.map((productItem, index) => {
         
            return(
                <div className="box" key={index}>
                <div className="product mtop">
                    <div className="image c_flex " >
                       <span className="discount">{productItem.discount}% Off</span>
                        <img src={productItem.src} alt="" />                                       
                        <div className="product-like">
                            <label>0</label><br />
                            <FontAwesomeIcon icon={faHeart} className='heart-icon' />      
                        </div>
                    </div>
                
                <div className="product-detail">
                    <h3>{productItem.name}</h3>
                    <div className="rate">
                        <FontAwesomeIcon icon={faStar} className='star-icon'/>
                        <FontAwesomeIcon icon={faStar} className='star-icon'/>
                        <FontAwesomeIcon icon={faStar} className='star-icon'/>
                        <FontAwesomeIcon icon={faStar} className='star-icon'/>
                        <FontAwesomeIcon icon={faStar} className='star-icon'/>
                    </div>
                <div className="quantity c_flex">
                    <span className='warehouse-quantity' id={productItem.quantity === 0 ? 'sold-out' : null}>
                         {productItem.quantity === 0 ? 'Hết hàng' : 'Kho: '+ productItem.quantity}
                    </span>             
                    <span className='sold-quantity'>
                          Đã bán: {productItem.sold}
                    </span> 
                </div>  
                    <div className="price">
                        <h4>
                      {addCommas(productItem.price)}đ
                        </h4>
                        <button className={productItem.quantity === 0 ? 'disable' : 'add'}
                             onClick={() => addToCart(productItem)}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </div>
            </div>
            </div>
            )
        })
    }
   
    </Slider>

  )
}

export default FlashCard