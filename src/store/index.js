import { combineReducers, createStore } from "redux";
import { productReducer } from "./Slice/productSlice";
import { cartReducer } from "./Slice/cartSlice";
import { wishListReducer } from "./Slice/wishListSlice";
import { produce } from "immer";

const reducer = combineReducers({
    products: productReducer,
    cartItem: cartReducer,
    wishList: wishListReducer
})


export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());





