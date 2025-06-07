import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

const appStore=configureStore({
    reducer:{
        cart:cartReducer
    }
}) //configure the store

export default appStore