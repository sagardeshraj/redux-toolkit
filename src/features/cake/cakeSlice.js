import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfCakes : 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers : {
        ordered : (state, action)=>{
            // console.log('order action', action);

            state.numOfCakes--
        },
        restocked : (state, action)=>{
            // console.log('restoked action', action);
            state.numOfCakes += action.payload
        } 
            
        
    }
})


// module.exports = cakeSlice.reducer
export default cakeSlice.reducer
// module.exports.cakeActions = cakeSlice.actions
export const { ordered, restocked } = cakeSlice.actions
