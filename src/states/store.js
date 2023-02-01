import { configureStore } from "@reduxjs/toolkit";
import inddecReducer from "./reducers/index"

export default configureStore({
    reducer :{
        number:inddecReducer 
    }
})