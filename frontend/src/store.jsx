
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";


const store= configureStore({ 

    reducer:{
        cartProduct:productReducer,
    }
})

export default store;