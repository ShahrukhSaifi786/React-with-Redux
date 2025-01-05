import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        list: [],
        error: ''
    },
    reducers: {
        fetchAllProduct(state, action) {
            state.list = action.payload;
        },
        isLoading(state, action) {
            state.loading = action.payload;
        },
        isError(state, action) {
            state.error = action.payload;
            state.loading = true;
        }
    }
})

export const { fetchAllProduct, isLoading, isError } = productSlice.actions;
export default productSlice.reducer;