import { createContext} from "react"
export const AddCommasContext = createContext({});
export const AddCommasProvider = ({children})=>{
    const addCommas = value => {
        const stringFormat = `${value}`;
        const x = stringFormat.split();  
        let x1 = x[0];
        const x2 = x.length > 1 ? `.${x[1]}` : '';
        const regex = /(\d+)(\d{3})/;
        while (regex.test(x1)) {
          x1 = x1.replace(regex, '$1.$2');
        }
        return x1 + x2;
      };
      return (
        <AddCommasContext.Provider value={addCommas}>
            {children}
        </AddCommasContext.Provider>
      )
}

export const AddToCartContext = createContext({});
export const AddToCartProvider = ({children})=>{
  const addToCart = (product,cartItem, setCartItem) =>{
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
    return (
      <AddCommasContext.Provider value={addToCart}>
        {children}
      </AddCommasContext.Provider>
    )

}



