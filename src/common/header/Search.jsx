import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserCircle, faShoppingBag, faXmarkCircle, faSpinner} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'
import useDelay from '../../hook/useDelay'

 const Search = ({ cartItem }) => {
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false)
  // vấn đề đang gặp là tôi muốn làm sự kiện onBlur ra ngoài là nó hide, nhưng sau này tôi không sử dụng onClick
  // của danh mục sản phẩm được
  // tôi cần làm thêm đoạn nếu ko tìm đc sản phẩm thì ko hiện, nhưng nó bị vướng đoạn trước
  const inputRef = useRef()
  const searchRef = useRef()

  const debounced = useDelay(searchValue, 500)// ham nay de delay get api

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    searchRef.current.classList.add('opacity-75')
  }
 
  const handleClear = () =>{
    setSearchValue('')
    setData([])
    inputRef.current.focus()
    searchRef.current.classList.remove('opacity-75')
  }
  
// call api
  useEffect(() => {
    if(searchValue[0] === ''){
      return;
    }
    const getApi =  async() => {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/shopItems");
      const filterData = res.data.filter((item) =>{
      setTimeout(() => setLoading(false), 100)

        return  item.name.toLowerCase().includes(searchValue.toLowerCase())})
      if(searchValue === '' || searchValue.length < 2)
      {
        setData([])
      }
      else{
        setData(filterData.slice(0 , 6))
      }
    }
    getApi()
    
  },[debounced])

  return (
    <>
    <section className='search'>
      <div className="container height-100 c_flex">
      
        <div className="logo width">
          <Link to='/'> <img src='./images/logo/logo.jpg' alt="" /></Link>
        </div> 
        
        <div className="search-box f_flex">
          <FontAwesomeIcon className='search-icon' icon={faSearch} ref={searchRef} />

          <input type="text" placeholder='Tìm kiếm' ref={inputRef} onChange={handleChange} value={searchValue} />

            { (!loading && searchValue )&& <FontAwesomeIcon icon={faXmarkCircle} onClick={handleClear} className='clear-icon' />}
            {loading && <FontAwesomeIcon icon={faSpinner}  className='load-icon' />}
            
            <SearchResults data={data} />
        </div>
        <div className="icon f_flex width">
          <div className="login">
            <Link to = '/login' className='icon-circle' >
            <FontAwesomeIcon className='icon-cirle' icon={faUserCircle} />
            </Link>
          </div>
          <div className="cart">
            <Link to ='/cart'>
              <FontAwesomeIcon className='icon-cirle' icon={faShoppingBag} />
              <span> {cartItem.length===0 ? '0': cartItem.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Search
//{loading && <FontAwesomeIcon icon={faSpinner} className='load-icon'/>}
// call api