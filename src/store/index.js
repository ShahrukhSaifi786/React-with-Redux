import productReducer from "./Slice/productSlice";
import cartReducer from "./Slice/cartSlice";
import wishListReducer from "./Slice/wishListSlice";
import { configureStore } from "@reduxjs/toolkit";

// Correct logger middleware
const logger = (store) => (next) => (action) => {
    return next(action);
};

export const store = configureStore({
    reducer: {
        products: productReducer,
        cartItem: cartReducer,
        wishList: wishListReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});


// const reducer = combineReducers({
//     products: productReducer,
//     cartItem: cartReducer,
//     wishList: wishListReducer
// })
// export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());







