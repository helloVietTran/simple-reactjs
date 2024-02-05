import React, { memo } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTiktok} from "@fortawesome/free-brands-svg-icons"
import { faCaretRight, faCaretSquareRight, faEnvelope, faMapMarkerAlt, faPhone} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="container grid-4">
            <div className='footer-detail'>
            <h2 className='contact-info'>Thông tin liên hệ</h2>  
            <div className="divide"></div>         
               <ul>
                <li>
                   <FontAwesomeIcon className='padding-r-5' icon={faMapMarkerAlt} />
                    Hai Bà Trưng, TP.Hà Nội</li>
                <li>
                    <FontAwesomeIcon className='padding-r-5' icon={faPhone} />
                    03844629xx</li>
                <li>
                    <FontAwesomeIcon className='padding-r-5' icon={faEnvelope} />
                    cskh@gmail.com</li>
               </ul>
    
            </div>
            <div className='footer-detail'>
                 <h2>Về chúng tôi</h2>
                 <div className="divide"></div>   
                <ul>
                    <li>

                        <Link to='*'>
                        <FontAwesomeIcon className='padding-r-5' icon={faCaretSquareRight}  />
                          Giới thiệu về shop
                        </Link></li>
                    <li>
                        <Link to='*'>
                        <FontAwesomeIcon className='padding-r-5' icon={faCaretSquareRight}  />
                         Quy định sử dụng
                       </Link>
                    </li>
                    <li>
                        <Link to='*'>
                        <FontAwesomeIcon className='padding-r-5' icon={faCaretSquareRight}  />
                            Chính sách bảo mật
                        </Link>
                    </li>
                    <li>
                        <Link to='*'>
                        <FontAwesomeIcon className='padding-r-5' icon={faCaretSquareRight}  />
                         Câu hỏi thường gặp
                        </Link>
                    </li>
                </ul>
                
            </div>
            <div className='footer-detail'>
                 <h2>Dịch vụ và hỗ trợ</h2>
                 <div className="divide"></div>   
                <ul>
                    <li>
                       <Link to='*'>
                        <FontAwesomeIcon className='padding-r-5' icon={faCaretRight}  />
                            Hướng dẫn mua hàng
                        </Link></li>
                    <li>
                      <Link to='*'>
                        <FontAwesomeIcon className='padding-r-5' icon={faCaretRight} />
                            Hình thức thanh toán
                        </Link></li>
                    <li>
                       <Link to='*'>
                        <FontAwesomeIcon className='padding-r-5' icon={faCaretRight} />
                            Chính sách vận chuyển
                        </Link></li>
                    <li>  
                    <Link to='*'>
                        <FontAwesomeIcon className='padding-r-5' icon={faCaretRight} />
                        Chính sách đổi hàng
                    </Link></li>
                </ul>
                
            </div>
            <div className='footer-detail'>
               <h2>Kết nối với chúng tôi</h2> 
               <div className="divide"></div>   
                <ul>
                    <li>
                        <Link to='*'>
                            <FontAwesomeIcon className='padding-r-5' icon={faFacebook} />
                            Việt Trần
                        </Link>
                    </li>
                    <li>
                       <Link to='*'>
                            <FontAwesomeIcon className='padding-r-5' icon={faInstagram} />
                                Việt Trần
                        </Link>
                    </li>
                    <li>
                       <Link to='*'>  
                            <FontAwesomeIcon className='padding-r-5' icon={faTiktok} />  
                            Việt Trần
                        </Link>
                    </li> 
                </ul>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default memo(Footer) 