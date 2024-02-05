import React, { useState, useRef, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './Register.module.scss'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const cx = classNames.bind(styles)

const Register = () => {
  const [password, setPassword] = useState('')
  const { register, getValues, handleSubmit,reset,  formState: { errors }} = useForm({// reset để xóa data
    mode: 'all',// thực hiện blur và nhập input
    criteriaMode: 'firstError',// nhận được lỗi đầu tiên 
  })

  const handleSubmitData = (data)=>{
    alert('Successfully!')
    reset(data)
  }
  return (
    <>
      <div className="background c_flex mt-2">
      
        <div className="container c_flex ">
          <form className={cx('register-form')} onSubmit={handleSubmit(handleSubmitData)}>
             <h1>Đăng ký tài khoản</h1>
             <div className={cx('user-name')}>
                <label htmlFor='userName'>Tài khoản</label>
                <input  type="text"  placeholder= 'Nhập tài khoản' 
                 {...register('userName',{
                  required: 'Tài khoản không được để trống',            
                  minLength:{
                    value: 6,
                    message: 'Tài khoản dài 6-16 kí tự'
                  },
                  pattern:{
                    value: /^[a-zA-Z0-9]+$/,
                    message: 'Tài khoản không được chứa kí tự đặc biệt'
                  },
                  maxLength:{
                     value: 16,
                     message: 'Tài khoản dài 6-16 kí tự'
                  }
                 
                 })}
                 className={errors.userName ? cx('invalid') : cx('validate')}
                  />      
                {errors.userName && <span>{errors.userName.message}</span>}
             </div>
             <div className={cx('email')}>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='VD abc@gmail.com'  
                 {...register('email',{
                  required: 'Chưa nhập email',
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Email không hợp lệ',
                  }                
                 })} 
                 className={errors.email ? cx('invalid') : cx('validate')}
                  />
                 {errors.email && <span>{errors.email.message}</span>}
              </div>
              <div className={cx('password')}>
               <label htmlFor='password'>Mật khẩu</label>
               <input type="text" placeholder='Mật khẩu có ít nhất 6 kí tự'  
                {...register('password',
                {
                  required: 'Mật khẩu không được để trống',  
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/,
                    message:'Mật khẩu không chứa kí tự đặc biệt và phải bao gồm cả chữ và số'
                  },     
                  minLength:{
                    value: 6,
                    message: 'Mật khẩu phải dài 6-16 kí tự'
                  },
                  maxLength:{
                     value: 16,
                     message: 'Mật khẩu dài 6-16 kí tự'
                  }
                })}
                onChange={(e) => setPassword(e.target.value) }
                  className={errors.password ? cx('invalid') : cx('validate')}/>
                {errors.password && <span>{errors.password.message}</span>}
              </div>
              <div className={cx('re-password')}>
               <label htmlFor='re-password'>Nhập lại mật khẩu</label>
               <input type="text" placeholder='Nhập lại mật khẩu' 
                 {...register('rePassword',  {
                  required: 'Nhập lại mật khẩu', 
                  validate: (value) => value === getValues("password")||'Nhập lại mật khẩu không chính xác'
                  })}
                 className={errors.rePassword ? cx('invalid') : cx('validate')}
                />   
                 {errors.rePassword && <span>{errors.rePassword.message}</span>}  
             </div>
              <p>Bằng việc đăng ký, bạn đồng ý với Việt Shop về
                <Link> Điều khoản & Chính sách bảo mật</Link>
              </p>             
              <button className={cx('register-btn')}>
                 Đăng ký
              </button>            
              <div className={cx('have-account')}>
                  <span >Bạn đã có tài khoản? </span>
                  <Link to='/login'>Đăng nhập ngay</Link>
              </div>

          </form>
        </div>
     
      </div>
    </>
  )
}

export default Register