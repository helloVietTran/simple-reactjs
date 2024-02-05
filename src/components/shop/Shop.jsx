import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import Filter from './Filter'
import './Shop.css'
import Pager from '../../common/pagination/Pager'
import ItemList from './ItemList'

const Shop = ({ addToCart }) => {
  //buoc 1: xử lí lấy sản phẩm ở index 1 và index 2
  // bước 2: Lấy nút phân trang được ấn, set lại cho setCurrentPage
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage] = useState(9);

  useEffect(() =>
  {
    const fetchApi = async () => {
      setLoading(true)
      const res = await axios.get("http://localhost:3000/shopItems");
      setProduct(res.data)
      setLoading(false)
    }
     fetchApi()
  }
  , [])

  // get Current Page
  const indexLastItem = currentPage * itemPerPage ;
  const indexFirstItem = indexLastItem - itemPerPage ;

  const currentProduct = product.slice(indexFirstItem, indexLastItem);
  // xử lí dữ liệu, dữ liệu này mới đc truyền đi

  const handleChangePage = (number) => setCurrentPage(number);
  
  const totalProduct = product.length;
  return (
    <>
    <div className="background mtop-1">
        <div className="container d_flex">
            <Filter />
            <div className="shop">
              <div className="heading d_flex">
                <h2> Mobile phone</h2>
                <span>Tất cả
                  <FontAwesomeIcon icon={faCaretRight} className='caret-icon' />
                </span>
              </div>
              <div className="item-list">
                <ItemList addToCart={addToCart} currentProduct={currentProduct} loading={loading}/>                        
              </div>
              <Pager handleChangePage= {handleChangePage} totalProduct={totalProduct} 
                itemPerPage={itemPerPage} currentPage={currentPage}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shop