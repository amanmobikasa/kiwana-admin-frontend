// contain all the product crud operation

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : {} as any
}

const productCRUDSlice = createSlice({
    name : "productCRUD",
    initialState,
    reducers : {
        addProduct : (state, action) => {
            state.product = action.payload
        }
        // contain all the cruds in this reducer
    }
    
})
export const { addProduct } = productCRUDSlice.actions
export default productCRUDSlice.reducer 
