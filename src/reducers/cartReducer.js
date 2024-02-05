const initState = {
    product: [],
    cartItem: []
}
export const cartReducer = (state=initState, action)=>{
    switch(action.type){
        case "cart/addtocart":  
            
            return state;
        case "cart/decreasecart":
            return
        case "cart/removecart":
            return state;
        default:
            return state;
    }
}