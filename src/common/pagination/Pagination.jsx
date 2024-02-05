import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import styles from './Pagination.module.scss'
import classNames from 'classnames/bind'
import PaginationItem from './PaginationItem'

const cx = classNames.bind(styles)
export const Pagination = ({handleChangePage, totalProduct, itemPerPage, currentPage}) => {   
    const prevRef = useRef();
    const nextRef = useRef()
    const btnList = [];
    for(let i = 1; i <= Math.ceil(totalProduct / itemPerPage); i++)
    {
        btnList.push(i)
    }

    const handlePrevPage = () => {
        if(currentPage  === 1)
        {
            prevRef.current.classList.add(cx('nav-disable'))
            return;
        }
        else{
            prevRef.current.classList.remove(cx('nav-disable'))
            handleChangePage(currentPage - 1);
        }
    }
    const handleNextPage = () => {
        if(currentPage === btnList.length){
             return;
         }
        else{
            handleChangePage(currentPage + 1);
        }
    }
   
  return (
    <>
        <div className={cx('pagination')}>

        <ul className={cx('pagination-list')}> 
            <button className={cx('pagination-btn')} onClick={handlePrevPage} ref={prevRef}>
                <FontAwesomeIcon className={cx('pagination-icon')} icon={faArrowLeft} />
            </button>    
                {
                btnList.map((value) => {
                    return(
                        <PaginationItem key={value} number={value} handleChangePage={handleChangePage} 
                            currentPage={currentPage}/>                
                    )
                  })
                }
            <button className={cx('pagination-btn')} onClick={handleNextPage} ref={nextRef}>
                <FontAwesomeIcon className={cx('pagination-icon')} icon={faArrowRight} />
            </button>
        </ul>
        </div>
    </>
  )
}


