import {createSlice} from '@reduxjs/toolkit' 

export const inddecSlice = createSlice({
    name : 'inddec',
    initialState:5,
    reducers : {
        Inc : (state, action)=>{
          return  state += action.payload 
        },
        Dec : (state , action)=>{
          return  state -= action.payload
        }
    }
})



export const {Inc, Dec} = inddecSlice.actions;
export default inddecSlice.reducer; 

