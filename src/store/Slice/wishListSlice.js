/* Action Types */
const ADD_TO_WISH_LIST = "ADD_TO_WISH_LIST";
const REMOVE_FROM_WISH_LIST = "REMOVE_FROM_WISH_LIST";

/* Action Creators */
export const addToWishList = (payload) => {
    return {
        type: ADD_TO_WISH_LIST,
        payload
    };
};

export const removeToWishList = (id) => {
    return {
        type: REMOVE_FROM_WISH_LIST,
        payload: id
    };
};

/* Helper function to load the wishlist from localStorage */
const loadWishListFromLocalStorage = () => {
    try {
        const savedWishList = localStorage.getItem("wishlist");
        if (savedWishList) {
            return JSON.parse(savedWishList); // Return parsed wishlist from localStorage
        }
        return []; // Return empty array if there's no saved wishlist
    } catch (error) {
        console.error("Error loading wishlist from localStorage:", error);
        return []; // Return empty array in case of an error
    }
};

/* Helper function to save the wishlist to localStorage */
const saveWishListToLocalStorage = (state) => {
    try {
        localStorage.setItem("wishlist", JSON.stringify(state)); // Save wishlist to localStorage
    } catch (error) {
        console.error("Error saving wishlist to localStorage:", error);
    }
};

/* Reducer */
export const wishListReducer = (state = loadWishListFromLocalStorage(), action) => {
    let updatedState;
    switch (action.type) {
        case ADD_TO_WISH_LIST:
            // Check if the item already exists in the wishlist
            if (state.some((item) => item.id === action.payload.id)) {
                return state; // Return the state as is if the item already exists
            }
            updatedState = [...state, action.payload]; // Add the new item otherwise
            saveWishListToLocalStorage(updatedState); // Save updated wishlist to localStorage
            return updatedState;

        case REMOVE_FROM_WISH_LIST:
            updatedState = state.filter((item) => item.id !== action.payload.id); // Remove item from wishlist
            saveWishListToLocalStorage(updatedState); // Save updated wishlist to localStorage
            return updatedState;

        default:
            return state;
    }
};
