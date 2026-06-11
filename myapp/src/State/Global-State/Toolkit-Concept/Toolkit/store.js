import { configureStore } from '@reduxjs/toolkit'

import cakeReducer from './cakeSlice'
import curdReducer from './curdSlice'


export let store = configureStore({
  reducer: {
    cake : cakeReducer,
    curd : curdReducer
  }
})