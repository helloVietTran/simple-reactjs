import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'

const SliderCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:3000/sliderItems')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) =>{
      return <ul style={{marginBlockEnd: '16px'}}>{dots}</ul>
    }
  };
  return (  
    < Slider {...settings}>
    {   
      products.map((value, indexKey) => {
        return(
          <div className="box sliderWrap top" key={indexKey}>
          <div className="left">
            <h1>{value.title}</h1>
            <p>{value.des}</p>
            <button className='btn-primary'>Mua ngay</button>
          </div>
          <div className='right'>
            <img src={value.src} alt="" />
          </div>
        </div>
        )
      })
    }
     </ Slider>

  )
}

export default SliderCard