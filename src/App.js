import  {Header} from "./common/header/Header"
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import axios from "axios";
import Cart from "./common/cart/Cart";
import BuyPage from "./pages/BuyPage";
import Footer from './common/footer/Footer'
import Login from "./components/account/Login";
import Register from "./components/account/Register";
import NotFoundPage from "./pages/NotFoundPage";
import Track from "./components/track/Track";

// Routes nhom cac Route lai vs nhau
function App(){
  const [productItems, setProductItems] = useState([])
  const [cartItem, setCartItem] = useState([]);// state cho cart

  useEffect(()=> {
    axios.get('http://localhost:3000/productItems')
      .then((res) => setProductItems(res.data))
      .catch((err) =>  console.log(err))
  },[])

  const addToCart = (product) =>{
    const productExit = cartItem.find((item) => item.id === product.id)
    // hàm find sẽ trả về phần tử đầu tiên trùng lặp, nên ở đây có dạng object
    if(product.quantity === 0){
      return;
    }
    if(productExit){   
      setCartItem(cartItem.map(item =>(
        item.id === product.id ? { ...productExit, buyQuantity: productExit.buyQuantity + 1} :item)     
      ))
      // giữ nguyên obj cũ, define thêm key mới là số lượng mua Quantity
    }
    else{
      setCartItem([...cartItem,{...product, buyQuantity: 1}])
      }// lần đầu tiên nó sẽ lọt vào điều kiện này
    }

    const decreaseCart = (product)=>{
      const productExit = cartItem.find((item) => item.id === product.id)
      if(productExit.quantity === 1){
        setCartItem(cartItem.filter((item) => item.id !== product.id))
       }
      else{
        setCartItem((cartItem.map((item) => 
         (item.id === product.id ? {...productExit, buyQuantity: productExit.buyQuantity - 1 }: item))))
    }// làm ngược lại add to cart thôi
  }   
     const removeCart = (product)=>{
      setCartItem(cartItem.filter(item => item.id !== product.id))
     }
  
  return(
 <>
   <Router>
    <Header cartItem={cartItem} />
     <Routes>
       <Route path="/" element={<HomePage productItems={productItems} addToCart={addToCart}  />} />
       <Route path="cart" element={<Cart cartItem={cartItem} decreaseCart={decreaseCart}  removeCart = {removeCart} />} />
       <Route path="pages" element={<BuyPage productItems={productItems} addToCart={addToCart}  />} />
       <Route path="login" element={<Login />} />
       <Route path="register" element={<Register />} />    
       <Route path="*" element={<NotFoundPage/> } />
       <Route path="track" element={<Track />} />
      </Routes>
      <Footer />
   </Router>
 </>
  )

}
//xử lí đường dẫn không hợp lệ

export default App