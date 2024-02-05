import React from 'react'
import styles from './Pagination.module.scss'
import classNames from 'classnames/bind'
import { Pagination } from './Pagination'
const cx = classNames.bind(styles)
const Pager = ({handleChangePage, totalProduct, itemPerPage, currentPage}) => {
  return (
    <>
        <div className={cx('pagerContainer')}>
            <Pagination handleChangePage={handleChangePage} totalProduct={totalProduct}
             itemPerPage={itemPerPage} currentPage={currentPage}
              />
        </div>
    </>
  )
}

export default Pager
