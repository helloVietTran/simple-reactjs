import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Pagination.module.scss'

const cx = classNames.bind(styles)
const PaginationItem = ({ number, handleChangePage}) => {

  return (
    <>
        <button className={cx('pagination-btn')} onClick={() => handleChangePage(number)}>
            <Link>{number}</Link>
        </button>
    </>
  )
}

export default PaginationItem