import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { AddCommasContext } from '../../context/Context'

const SearchResults = ({data}) => {
    const addCommas = useContext(AddCommasContext);
    
  return (
    <>
        <div className="searchResults" >
         
          {
            data.map((item) => {
                return(
                    <div className="resultItem" key={item.id}>
                        <img src={item.src} alt="" />
                       <div className="resultItem-detail">
                            <h4>{item.name}</h4>
                            <span>{addCommas(item.price)}đ</span>
                       </div>
                    </div>
                )
            })
          }
             
        </div>
    </>
  )
}

export default SearchResults