import React, {useState, useEffect} from "react"
import axios from "axios"
import Slider from "react-slick"
import './TopCate.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const TopCart = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/topCategory')
        .then(res => setProducts(res.data))
        .catch(err => console.log(err))
  }, [])

  function fommatNumber(num){
    if(num < 1e3)
    {
      return num
    }
    else if(num > 1e3){
      return + (num / 1e3).toFixed(2) + 'k'
    }
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  }

  return (
    <>
      <Slider {...settings}>
        {
          products.map((value) => {
          return (          
              <div className='box product' key={value.id}>
                <div className='nametop d_flex' >
                  <span className='tLeft'>{value.name}</span>
                  <span className='tRight'>đã bán: {fommatNumber(value.sold)}</span>
                </div>
                <div className='img'>
                  <img src={value.src} alt='' />
                </div>
              </div> 
          )
        })}
      </Slider>
    </>
  )
}

export default TopCart
