import {configureStore} from '@reduxjs/toolkit'
// const reduxLogger  = require('redux-logger');
import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/iceCream/iceCreameSlice'
import userReducer from '../features/user/userSlice'

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer :{
        cake : cakeReducer,
        iceCream : iceCreamReducer,
        user : userReducer

    },
    // middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default store;
