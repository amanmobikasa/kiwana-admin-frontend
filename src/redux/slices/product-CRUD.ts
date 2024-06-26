// contain all the product crud operation

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : {} as any,
    updateProduct : {} as any
}

const productCRUDSlice = createSlice({
    name : "productCRUD",
    initialState,
    reducers : {
        addProduct : (state, action) => {
            state.product = action.payload
        },
        updateProduct : (state, action) => {
            state.updateProduct = action.payload
        },
        deleteProduct : (state, action) => {
            state.updateProduct = action.payload
            state.product = {}
        }
        // contain all the cruds in this reducer
    }
    
})
export const { addProduct, updateProduct, deleteProduct } = productCRUDSlice.actions
export default productCRUDSlice.reducer 
