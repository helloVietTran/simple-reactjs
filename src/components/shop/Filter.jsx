import React from 'react'
import './Shop.css'
const Filter = () => {
    const data = [
        {
          brandImg: "./images/brand/brand-1.png",
          brandName: "Vivo",
        },
        {
          brandImg: "./images/brand/brand-2.png",
          brandName: "Samsung",
        },
        {
          brandImg: "./images/brand/brand-3.png",
          brandName: "Apple",
        },
        {
          brandImg: "./images/brand/brand-4.png",
          brandName: "Xiaomi",
        },
        {
          brandImg: "./images/brand/brand-5.png",
          brandName: "Huawei",
        },
      ]
  return (
   <>
      <div className='filter category'>
        <div className="brand d_flex">
            <h2>Thương hiệu</h2>
            <h3>Shops</h3>
        </div>
        {
            data.map((item, index) => {
                return(                 
                    <div className="box f_flex" key={index}>
                        <img src={item.brandImg} alt="" />
                        <span>{item.brandName}</span>
                    </div>                  
                )
            })
        }
      </div>
     
   </>
  )
}

export default Filter