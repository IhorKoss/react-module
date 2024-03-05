import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    cars:[],
    carToUpd:{}
};
const carsSlice=createSlice({
    name:'carsSlice',
    initialState,
    reducers:{
        setResponse:(state,action)=>{
            state.cars=action.payload;
        },
        setCarForUpdate:(state,action)=>{
            state.carToUpd=action.payload
        }
    }
})

const {reducer:carsReducer,actions}=carsSlice;

const carsActions={
    ...actions
}

export {
    carsReducer,carsActions
}