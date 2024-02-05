import React, {memo} from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <>
    <div className="background">
    <div className="container f_flex gap-2">
        <div className="Banner-left">
            <img src="./images/banner/banner-1.png" alt="" />
        </div>
        <div className="Banner-right">
            <img src="./images/banner/banner-2.png" alt="" />
        </div>
    </div>
    </div>
    </>
  )
}

export default memo(Banner)