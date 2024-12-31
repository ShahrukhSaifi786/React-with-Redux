// Action Types
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";

// Action Creators
export const addCart = (payload) => {
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

// Helper function to load the initial state from localStorage
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

// Cart Reducer
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
export const cartReducer = (state = loadCartFromLocalStorage(), action) => {
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
}
