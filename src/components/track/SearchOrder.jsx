import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './Track.module.scss'

const cx = classNames.bind(styles)
const SearchOrder = () => {
  const [trackValue, setTrackValue] = useState('');
  const [errorTrack, setErrorTrack] = useState(false)
  const [errorTrackMess, setErrorTrackMess] = useState('')
  const [check, setCheck] = useState(false)

  function trackValidation(value){
    const PHONE_REGEX = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

    if(value === ''){
      setErrorTrackMess('Vui lòng nhập số điện thoại của bạn !')
      setErrorTrack(true)
    }
    else if(!PHONE_REGEX.test(value))
    {
      setErrorTrackMess('Số điện thoại không tồn tại')
      setErrorTrack(true)
    }
    
  }

  const handleTrackBlur = () => {
    trackValidation(trackValue)
  }
  
  const handleTrackFocus = () => {
    setErrorTrackMess('')
  }

  const handleTrackClick = () => {
    if(!errorTrack){
      console.log(trackValue)
      setCheck(true)
    }   
  }
 

  return (
    <>
      <div className={cx('search-order')}>
         <h1>Theo Dõi Đơn Hàng - Việt Shop Việt Nam</h1>
         <div className={cx('search-order-box')}>
           <input type="text" placeholder='Nhập số điện thoại của bạn'
              onChange={(e) => setTrackValue(e.target.value)} 
              value={trackValue} onBlur={handleTrackBlur} onFocus={handleTrackFocus} />

            <button onClick={handleTrackClick}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('track-search-icon')}/>
            </button>
            {errorTrack && <span className={cx('text-danger')}>{errorTrackMess}</span>}
         </div>
         
      </div>
    
    </>
  )
}

export default SearchOrder