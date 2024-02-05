import React, { useState, useRef, useEffect } from 'react'
import styles from './Login.module.scss'
import classnams from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
// dùng useEffect để tránh gặp lỗi re-render quá nhiều
/*  ;
const [userFocus, setUserFocus] = useState(false);
const [passFocus, setPassFocus] = useState(false);
onFocus={setUserFocus(true)}
 onBlur={setUserFocus(false)}
  onFocus={setPassFocus(true)}  onBlur={setPassFocus(false)}*/
const cx = classnams.bind(styles)
const Login = () => {
  const [hidePass, setHidePass] = useState(true)

  const userRef = useRef()
  const [userName, setUserName] = useState('')
  const [userPass, setUserPass] = useState('')

  const [userNameValidMess, setUserNameValidMess] = useState('');
  const [userPassValidMess, setUserPassValidMess] = useState('');
  const [userNameValid, setUserNameValid] = useState(false);
  const [userPassValid, setUserPassValid] = useState(false);

  const USER_REGEX = /^[a-zA-Z0-9]+$/;
  const PASS_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/;

  useEffect(()=>{
    userRef.current.focus()
  }, [])
 
  const inputType = hidePass ? 'password' : 'text';

  function validator(userName){
    if(userName === '')
    {
      setUserNameValidMess('Tài khoản không được để trống')
      setUserNameValid(true)
    }
    else if(!USER_REGEX.test(userName))
    {
      setUserNameValidMess('Tài khoản không được chứa kí tự đặc biệt')
      setUserNameValid(true)
    }
    else if(userName.length < 6 || userName.length > 16)
    {
      setUserNameValidMess('Tài khoản phải dài 6-16 kí tự')
      setUserNameValid(true)
    }
    return userNameValidMess

  }

  function validatorPass(userPass){
    if(userPass === '')
    {
      setUserPassValidMess('Mật khẩu không được để trống')
      setUserPassValid(true)
    }
    else if(!PASS_REGEX.test(userPass))
    {
      setUserPassValidMess('Mật khẩu phải bao gồm cả chữ, số và không chứa kí tự đặc biệt')
      setUserPassValid(true)
    }
    else if(userPass.length < 6 || userPass.length > 16)
    {
      setUserPassValidMess('Mật khẩu phải dài 6-16 kí tự')
      setUserPassValid(true)
    }
    return userPassValidMess
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    validator(userName)
//validate password
    validatorPass(userPass)
    // neu password va userName chuan thi gui 1 data
    if(!userNameValid && !userPassValid){
      console.log({
        userName,
        userPass
      })
    }
  }


  return (
    <>
      <div className="background c_flex mt-1">
       <div className="container">
          <form onSubmit={handleSubmit} className={cx('login-form')}>
            <h1>Đăng nhập</h1>
             <div className={cx('userName')}>
                <span>Tài khoản</span>
                <input type="text"  onChange={(e) => setUserName(e.target.value)}
                  value={userName} ref={userRef} onFocus={()=> setUserNameValid(false)} 
                />               
             </div>    

             {userNameValid && <div className={cx('error-msg')}>{userNameValidMess}</div>}   

             <div className={cx('password')}>
               <span>Mật khẩu</span>
                <input type={inputType} onChange={(e) => setUserPass(e.target.value)}
                  value={userPass} onFocus={()=> setUserPassValid(false)}
                />              

                 <div className={cx('hide-show-pass')} onClick={() => setHidePass(!hidePass)}>
                    <FontAwesomeIcon icon={ hidePass ? faEyeSlash : faEye} />                   
                  </div>     
                </div>

              {userPassValid && <div className={cx('error-msg')}>{userPassValidMess}</div>}   

               <p>Bằng việc đăng nhập, bạn đồng ý về 
                 <Link to='cookies'> Cookies</Link>
               </p>
              <button className={cx('login-btn')}>
                Đăng nhập
              </button>
              <span className={cx('fotgot-password')}>          
                <Link to='forgot-password'>Quên mật khẩu</Link>
               </span>
              <div className={cx('login-with-social')}>
              <button className={cx('login__google-btn')}>
                  <img src="./images/login/google.webp" alt="" />
                  Đăng nhập với Google
                </button>
                <button className={cx('login__facebook-btn')}>
                  Đăng nhập với Facebook
                  <img src="./images/login/face.webp" className={cx('facebook-icon')} alt="" />         
                </button>
           </div>        
            <div className={cx('make-account')}>
              <span>Bạn không có tài khoản? </span>
              <Link to='/register'>Tạo ngay</Link> 
            </div>      
          </form>
       </div>
       </div>
      
    </>
    
  )
}

export default Login