import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faPlus, faHeart} from '@fortawesome/free-solid-svg-icons'
import './Shop.css'
import { AddCommasContext } from '../../context/Context'
const ItemList = ({ addToCart, currentProduct, loading}) => {
    const addCommas = useContext(AddCommasContext)
  return (
    <>  
                    {
                    currentProduct.map((value)=>{
                        return(
                          
                            <div className="product" key={value.id}>
                              <div className='image'>
                                <img className='product-img' src={value.src} alt="" />
                                <span className='discount'>{value.discount + '%'} Off</span>
                                <div className="product-like">
                                    <label>0</label><br />
                                    <FontAwesomeIcon icon={faHeart} className='heart-icon'  />               
                                </div>
                              </div>
                              <div className="product-detail">
                                <h3>{value.name}</h3>
                                <div className="rate">
                                  <FontAwesomeIcon icon={faStar} className='star-icon'/>
                                  <FontAwesomeIcon icon={faStar} className='star-icon'/>
                                  <FontAwesomeIcon icon={faStar} className='star-icon'/>
                                  <FontAwesomeIcon icon={faStar} className='star-icon'/>
                                  <FontAwesomeIcon icon={faStar} className='star-icon'/>
                                </div>
                                <div className="quantity c_flex">
                                <span className='warehouse-quantity' id={value.quantity === 0 ? 'sold-out' : null}>
                                     {value.quantity === 0 ? 'Hết hàng' : 'Kho: '+ value.quantity}
                                </span>
                                  <span className='sold-quantity'>
                                        Đã bán: {value.sold}
                                  </span>
                                </div>  
                                <div className="price">
                                  <h4>
                                    {addCommas(value.price)}đ
                                  </h4>
                                  <button className={value.quantity === 0 ? 'disable' : 'add'}
                                    onClick={() => addToCart(value)}>
                                     <FontAwesomeIcon icon={faPlus} />
                                  </button>
                                </div>
                              </div>
                            
                          </div>
                          
                        )
                      })
                    }

    </>
  )
}

export default ItemList