import { combineReducers } from "@reduxjs/toolkit";
import productCRUD from "../slices/product-CRUD";

export const rootReducer = combineReducers({
    // contain all the reducers like this  products: productSlice,
    productCRUD : productCRUD
})