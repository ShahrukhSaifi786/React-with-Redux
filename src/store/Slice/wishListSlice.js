import { createSlice } from "@reduxjs/toolkit";

const loadWishListFromLocalStorage = () => {
    const wishList = localStorage.getItem('wishList');
    return wishList ? JSON.parse(wishList) : [];
}

const saveWishListToLocalStorage = (state) => {
    localStorage.setItem('wishList', JSON.stringify(state));
}

const existingItemIndex = (state, action) => {
    return state.findIndex((item) => item.id === action.payload.id);
}
const wishListSlice = createSlice({
    name: 'wishlist',
    initialState:/*  loadWishListFromLocalStorage() */ [],
    reducers: {
        addToWishList(state, action) {
            const existingIndex = existingItemIndex(state, action);
            const itemIndex = existingIndex !== -1
            if (!itemIndex) {
                state.push(action.payload);
                // saveWishListToLocalStorage(state);
            }
        },
        removeToWishList(state, action) {
            const existingIndex = existingItemIndex(state, action);
            if (existingIndex !== -1) {
                state.splice(existingIndex, 1);
                // saveWishListToLocalStorage(state);
            }
        }
    }
})

export const { addToWishList, removeToWishList } = wishListSlice.actions;
export default wishListSlice.reducer;











// import { produce } from "immer";

// /* Action Types */
// const ADD_TO_WISH_LIST = "ADD_TO_WISH_LIST";
// const REMOVE_FROM_WISH_LIST = "REMOVE_FROM_WISH_LIST";

// /* Action Creators */
// export const addToWishList = (payload) => {
//     return {
//         type: ADD_TO_WISH_LIST,
//         payload
//     };
// };

// export const removeToWishList = (id) => {
//     return {
//         type: REMOVE_FROM_WISH_LIST,
//         payload: id
//     };
// };

// /* Helper function to load the wishlist from localStorage */
// const loadWishListFromLocalStorage = () => {
//     try {
//         const savedWishList = localStorage.getItem("wishlist");
//         if (savedWishList) {
//             return JSON.parse(savedWishList); // Return parsed wishlist from localStorage
//         }
//         return []; // Return empty array if there's no saved wishlist
//     } catch (error) {
//         console.error("Error loading wishlist from localStorage:", error);
//         return []; // Return empty array in case of an error
//     }
// };

// /* Helper function to save the wishlist to localStorage */
// const saveWishListToLocalStorage = (state) => {
//     try {
//         localStorage.setItem("wishlist", JSON.stringify(state)); // Save wishlist to localStorage
//     } catch (error) {
//         console.error("Error saving wishlist to localStorage:", error);
//     }
// };

// // Reducer
// export const wishListReducer = (originalState = loadWishListFromLocalStorage(), action) => {
//     return produce(originalState, (state) => {
//         const existingIndex = state.findIndex((item) => item.id === action?.payload?.id);

//         switch (action.type) {
//             case ADD_TO_WISH_LIST:
//                 if (existingIndex === -1) {
//                     // Only add item if it doesn't exist in the wishlist
//                     state.push(action.payload);
//                 }
//                 break;

//             case REMOVE_FROM_WISH_LIST:
//                 if (existingIndex !== -1) {
//                     // Only remove item if it exists in the wishlist
//                     state.splice(existingIndex, 1);
//                 }
//                 break;

//             default:
//                 return state;
//         }

//         // Save the updated wishlist to localStorage
//         saveWishListToLocalStorage(state);
//     });
// };