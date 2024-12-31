// import { produce } from "immer";
import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
    try {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            return JSON.parse(savedCart); // Parse the saved cart from localStorage
        }
        return []; // If no cart is in localStorage, return an empty array
    } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        return [];
    }
}

// Helper function to save the state to localStorage
const saveCartToLocalStorage = (state) => {
    try {
        localStorage.setItem('cart', JSON.stringify(state)); // Save the state as a JSON string
    } catch (error) {
        console.error("Error saving cart to localStorage:", error);
    }
}

const existingItemIndex = (state, action) => state.findIndex((item) => item.id === action.payload?.id);

const slice = createSlice({
    name: 'cartItem',
    initialState: [],
    reducers: {
        addCart(state, action) {
            const existingIndex = existingItemIndex(state, action);

            if (existingIndex !== -1) {
                // If item exists, increment its quantity
                state[existingIndex].quantity += 1;
            } else {
                // If item doesn't exist, add it with quantity 1
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeCart(state, action) {
            const existingIndex = existingItemIndex(state, action);
            if (existingIndex !== -1) {
                state.splice(existingIndex, 1); // Remove the item if it exists
            }
        },
        increaseQuantity(state, action) {
            const existingIndex = existingItemIndex(state, action);
            if (existingIndex !== -1) {
                state[existingIndex].quantity += 1; // Increase quantity
            }
        },
        decreaseQuantity(state, action) {
            const existingIndex = existingItemIndex(state, action);
            if (existingIndex !== -1) {
                const item = state[existingIndex];
                item.quantity -= 1; // Decrease quantity

                // Remove the item from cart if quantity becomes 0 or less
                if (item.quantity <= 0) {
                    state.splice(existingIndex, 1);
                }
            }
        },
    }
});

export const { addCart, removeCart, increaseQuantity, decreaseQuantity } = slice.actions;
export default slice.reducer;



// Action Types
// const ADD_TO_CART = "ADD_TO_CART";
// const REMOVE_FROM_CART = "REMOVE_FROM_CART";
// const INCREASE_QUANTITY = "INCREASE_QUANTITY";
// const DECREASE_QUANTITY = "DECREASE_QUANTITY";

// Action Creators
/* export const addCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const removeCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export const increaseQuantity = (id) => {
    return {
        type: INCREASE_QUANTITY,
        payload: id
    }
}

export const decreaseQuantity = (id) => {
    return {
        type: DECREASE_QUANTITY,
        payload: id
    }
}
 */

// Cart Reducer with produce method 

/* export const cartReducer = (originalState = loadCartFromLocalStorage(), action) => {
    return produce(originalState, (state) => {
        const existingIndex = state.findIndex((item) => item.id === action?.payload?.id);
        const itemExists = existingIndex !== -1;

        switch (action.type) {
            case ADD_TO_CART:
                if (itemExists) {
                    state[existingIndex].quantity += 1;
                } else {
                    state.push({ ...action.payload, quantity: 1 });
                }
                break;

            case REMOVE_FROM_CART:
                if (itemExists) {
                    state.splice(existingIndex, 1);
                }
                break;

            case INCREASE_QUANTITY:
                if (itemExists) {
                    state[existingIndex].quantity += 1;
                }
                break;

            case DECREASE_QUANTITY:
                if (itemExists) {
                    state[existingIndex].quantity -= 1;
                    if (state[existingIndex].quantity <= 0) {
                        state.splice(existingIndex, 1); 
                    }
                }
                break;

            default:
                return state;
        }
        saveCartToLocalStorage(state);
    });
} */

// without produce method 
/* export const cartReducer = (state = loadCartFromLocalStorage(), action) => {
    let updatedState;
    switch (action.type) {
        case ADD_TO_CART:
            const existingElements = state.find((item) => item.id === action.payload.id);
            if (existingElements) {
                updatedState = state.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item);
            } else {
                updatedState = [...state, { ...action.payload, quantity: 1 }];
            }
            saveCartToLocalStorage(updatedState); // Save updated cart to localStorage
            return updatedState;

        case REMOVE_FROM_CART:
            updatedState = state.filter((item) => item.id !== action.payload.id);
            saveCartToLocalStorage(updatedState); // Save updated cart to localStorage
            return updatedState;

        case INCREASE_QUANTITY:
            updatedState = state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            saveCartToLocalStorage(updatedState); // Save updated cart to localStorage
            return updatedState;

        case DECREASE_QUANTITY:
            updatedState = state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            }).filter((cartItem) => cartItem.quantity > 0);
            saveCartToLocalStorage(updatedState); // Save updated cart to localStorage
            return updatedState;

        default:
            return state;
    }
} */


