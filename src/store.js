import {configureStore} from "@reduxjs/toolkit"
import querySlice from "./features/query.js"
import carsSlice from "./features/cars.js"
import typeSlice from "./features/sort.js"
 const store= configureStore({reducer:{
query:querySlice,
type:typeSlice,
cars:carsSlice



 }})
 export default store