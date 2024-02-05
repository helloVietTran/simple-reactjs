export const addToCart =(data)=>{
    return {
        type: "cart/addtocart",
        payload: data
    }
}
export const decreaseCart = (data) =>{
    return {
        type: "cart/decreasecart",
        payload: data
    }
}
export const removeCart = (data)=>{
    return {
        type: "cart/removecart",
        payload: data
    }
}