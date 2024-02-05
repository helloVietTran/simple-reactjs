import React, {useState,useRef, memo, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBorderAll, faChevronDown, faTimes} from '@fortawesome/free-solid-svg-icons'
import './navigation.css'
import Categories from './Categories'
const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [MobileMenu, setMobileMenu] = useState(false); 
  const categoryRef =  useRef();
  useEffect(()=>{
    const handleClickOutSide = (e)=>{
      if(!categoryRef.current.contains(e.target)){
        setShowCategories(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutSide);
    return ()=>{
      document.removeEventListener('mousedown', handleClickOutSide);
    }
  })
    return (
    <>
      <header className='header'>
        <div className="container d_flex">
          <div className="categories"  onClick={()=>setShowCategories(!showCategories)}>
            <FontAwesomeIcon className='categories-icon' icon={faBorderAll}/>
            <h4>Danh Mục</h4>    
            <FontAwesomeIcon className={showCategories ? 'upIcon' : 'rotateIcon'} icon={faChevronDown} />
            <div ref={categoryRef} className={`category-wrapper ${showCategories ? 'Cate-active' : 'Cate-disable'}`}>
              <Categories /> 
            </div>
          </div>      
        <div className='navlink'>
          <ul className={MobileMenu ? 'nav-links-MobileMenu': 'link f_flex capitalize'} onClick={()=> setMobileMenu(false)}>
            <li className='navlink'>
              <NavLink  to='/'>Trang chủ</NavLink>
            </li>
            <li>
              <NavLink to='/pages'>Mua sắm</NavLink>                         
            </li>
            <li>
              <NavLink to='/track'>Theo dõi đơn hàng</NavLink>            
            </li>
            <li>
              <NavLink to='/user'>Tài khoản</NavLink>            
            </li>
            <li>
              <NavLink to='/notification'>Thông báo</NavLink>            
            </li>
            <li>
              <NavLink to='/blog'>Blog</NavLink>            
            </li>
          </ul>
          <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
            {
              MobileMenu? <FontAwesomeIcon className='close home-btn' icon={faTimes} />:
              <FontAwesomeIcon className='open' icon={faBars} />
            }
          </button>

        </div>
        </div>

      </header>
    </>
  )
}
export default memo(Navbar);
