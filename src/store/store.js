import {configureStore} from "@reduxjs/toolkit";
import {carsReducer} from "./slices/carsSlice";
import {triggerReducer} from "./slices/triggerSlice";

const store = configureStore({
    reducer:{
        cars:carsReducer,
        trigger:triggerReducer
    }
})

export {store}