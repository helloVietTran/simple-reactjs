import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";

const allReducers = combineReducers({
    cartReducer,
})
export default allReducers;
