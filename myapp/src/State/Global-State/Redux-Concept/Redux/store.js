
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { cakeReducer } from './cake/cakeReducer'
import { curdReducer } from './curd/curdReducer'

import logger from 'redux-logger'


let rootReducer = combineReducers({
  cake: cakeReducer,
  curd: curdReducer
})


export let store = createStore(rootReducer, applyMiddleware(logger))