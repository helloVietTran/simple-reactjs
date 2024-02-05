import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import  './NotFound.css'

const NotFoundPage = () => {
  return (
    <>
      <div className="background c_flex mt-2">
        <div className="container not-found">
            <h1>Oooooops!...</h1>
            <h1>That page can not be found</h1>
             <button>
              <Link to = '/' className='back-link'>
                  <FontAwesomeIcon icon={faArrowLeftLong} className='back-icon'/>
                  Back to home
              </Link>
             </button>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage