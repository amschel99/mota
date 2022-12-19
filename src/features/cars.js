
import {createSlice } from "@reduxjs/toolkit"

const initialState= {
    cars:[]
}

const carsSlice= createSlice({
name:"cars",
initialState,
reducers:{
 cars:(state, action)=>{
        const cars=action.payload.cars
 state.cars=cars
    }

}


})

export const {cars}=carsSlice.actions

export default carsSlice.reducer