import React, { useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import { AddCommasContext } from '../../context/Context';
import { AddToCartContext } from '../../context/Context';
import { useDispatch } from 'react-redux';

const Cart = ({cartItem, decreaseCart, removeCart}) => {
  const dispatch = useDispatch();
  const addCommas = useContext(AddCommasContext);
  const addToCart = useContext(AddCommasContext);

  const handleAddCart = ()=>{

  }


  const totalPrice = cartItem.reduce((total, item)=> total + item.price * item.buyQuantity,0);
  return (
    <>
    <section className='cart-items mt-1'>  
     <div className="container f_flex " >
         <div className="cart-list width-70">
         {cartItem.length === 0 &&
           <h1 className='no-item-message product container'>
               Không có sản phẩm nào trong giỏ hàng
            </h1>
         }
         
         {      
           cartItem.map((item) => {
             const cost = item.price * item.buyQuantity;
             return(
                <div className="cart-item d_flex product width-70 " key={item.id}>
                  <div className="cart-info f_flex">
                    <div className="cart-img">
                      <img src={item.src} alt="" />
                    </div>
                    <div className="cart-detail ">
                       <h3>{item.name}</h3>
                       <h4>{item.price} * {item.buyQuantity}
                         <span>{addCommas(cost)}đ</span>
                       </h4>
                    </div>
                  </div>
                  <div className="cart-control">
                    <div className="removeCart">
                      <button className="removeCart-btn remove" onClick={() =>  removeCart(item)}>
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                  </div>
                    <div className="plus-minus">
                      <div className="decrease " >
                        <button className='decrease-btn decrease' onClick={()=>decreaseCart(item)}>                   
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                      </div>
                      <div className="addMoreCart " onClick={()=> addToCart(item)}>
                        <button className='addMore-btn add' >                    
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                  </div>               
                </div>
             )
            }
            )
         }
         </div>
          <div className="total product width-30">
            <h2 className='summary-title'>Summary</h2>
            <div className="d_flex">
              <h4>Tổng các đơn hàng: </h4>
           </div>   
          <h3>{addCommas(totalPrice)}đ</h3>
          <button>Đặt hàng</button>
        </div>     
      </div>
    </section>
  </>
  )
}
// tu xu ly phan bam add them 
// chu y logic true && thuc hien hanh dong
export default Cart