import React from 'react'
import './navigation.css'
const Categories = () => {
      const data = [
        {
        cateImg: './images/category/cat1.png',
        cateName: 'Thời trang'
        },
        {
        cateImg: './images/category/music.png',
        cateName: 'Âm nhạc'
        },
        {
        cateImg: './images/category/electronic.png',
        cateName: 'Đồ điện gia dụng'
        },
        {
        cateImg: './images/category/car.png',
        cateName: 'Xe hơi'
        },
        {
        cateImg: './images/category/cat5.png',
        cateName: 'Quà tặng'
        },
        {
        cateImg: './images/category/pet.png',
        cateName: 'Thú cưng'
        },
        {
        cateImg: './images/category/beauty.png',
        cateName: 'Sức khỏe và làm đẹp'
        },
        {
        cateImg: './images/category/glocery.jpg',
        cateName: 'Thực phẩm'
        },
        {
        cateImg: './images/category/cat9.png',
        cateName: 'Đồ chơi cho bé'
        },
        {
        cateImg: './images/category/book.jpg',
        cateName: 'Tủ sách'
        },
         ]
  return (
    <>
      <div className='category category-1'> 
         {
            data.map((value, index) =>{
                return (
                    <div className="box f_flex" key={index}>
                        <img src={value.cateImg} alt="" />
                        <span>{value.cateName}</span>
                    </div>
                )
            }
         )}
      </div>
    </>

  )
}

export default Categories