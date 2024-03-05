import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    trigger:false
};
const triggerSlice=createSlice({
    name:'triggerSlice',
    initialState,
    reducers:{
        triggerChange:state=>{
            state.trigger=!state.trigger
        }
    }
})

const {reducer:triggerReducer,actions}=triggerSlice;

const triggerActions={
    ...actions
}

export {
    triggerReducer,triggerActions
}