import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'


const initialState = {
    numOficeCream: 20
}

const iceCreamSlice = createSlice({
    name : 'iceCream',
    initialState,
    reducers : {
        ordered : (state, action)=>{
            state.numOficeCream--
        },
        restocked : (state, action)=>{
            state.numOficeCream += action.payload
        }
    },
    
    // extraReducers: {
    //     ['cake/ordered']: (state, action)=>{
    //         state.numOficeCream--
    //     }
    // }

    extraReducers: (builder)=>{
        builder.addCase( cakeOrdered, (state, action)=>{
           state.numOficeCream--
        } )
    }

})

export default iceCreamSlice.reducer
export const { ordered, restocked } = iceCreamSlice.actions
