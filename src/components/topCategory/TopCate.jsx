import React, {memo} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./TopCate.css"
import TopCart from "./TopCart"
import { faBorderAll, faCaretRight } from "@fortawesome/free-solid-svg-icons"

const TopCate = () => {

  return (
    <>
      <section className='TopCate background'>
        <div className='container'>
          <div className='heading c_flex '>
            <div className='heading-left  c_flex'>
             <FontAwesomeIcon icon={faBorderAll} className="border-icon" />
             <h2>Bán chạy nhất</h2>
            </div>
            <div className='heading-right '>
              <span>Tất cả</span>
              <FontAwesomeIcon icon={faCaretRight} className="caret-icon" />
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  )
}

export default memo(TopCate)
