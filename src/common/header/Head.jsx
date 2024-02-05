import React, {memo} from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Head = () => {

  return (
    <>
    <section className='head '>
      <div className='container  c_flex'>
        <div className = ''>
          <FontAwesomeIcon className='icon' icon={faPhone} />
          <span >+84384 462 9xx</span>
          <FontAwesomeIcon className='icon' icon={faEnvelope} />
          <span>tranvietanh@gmail.com</span>
        </div>
        <div >
          <span>Doanh nghiệp</span>
          <span >Trợ giúp</span>
          <span >
             <img src='./images/flag/EngFlag.png' alt="" />
            EN
          </span>
          <span  >
             <img src='./images/flag/VietNamFlag.webp' alt="" />
             VI 
          </span>
        </div>
      </div>
    </section>
    </>
  )
}
export default memo(Head)
