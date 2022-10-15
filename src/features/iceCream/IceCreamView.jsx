import React from 'react'
import { useSelector, useDispatch } from 'react-redux'   // to read data in the redux store/wrapper around store.getState
import { ordered, restocked } from '../iceCream/iceCreameSlice'
export const IceCreamView = () => {
  
    const numOfIcecream = useSelector((state)=> state.iceCream.numOficeCream)
    const dispatch = useDispatch()
    return (
    <div>
        <h2>Number of icecream-{numOfIcecream}</h2>
        <button onClick={()=> dispatch(ordered())} >Order icecream</button>
        <button onClick={()=> dispatch(restocked(1))} >Restock icecream</button>
    </div>
  )
}


