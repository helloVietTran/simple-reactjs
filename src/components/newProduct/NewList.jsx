import React, { useContext, useState, useEffect} from 'react'
import axios from 'axios'
import { AddCommasContext } from '../../context/Context'
const NewList = () => {
  const [products, setProducts] = useState([]);

  const addCommas = useContext(AddCommasContext);

  useEffect(()=>{
    axios.get('http://localhost:3000/newProducts')
        .then(res => setProducts(res.data))
        .catch(err => console.log(err))
  }, [])
  return (
    <>
    <div className="product f_flex">
        {
          products.map((item) => {
           return(
            <div className="new-box" key={item.id}>            
              <img src={item.src} alt="" />
              <div className="new-box-name">
                <h3>{item.name}</h3>
                <h4>{addCommas(item.price)}</h4>
              </div>          
          </div>
           )
          })
        }
    </div>
    </>
  )
}

export default NewList