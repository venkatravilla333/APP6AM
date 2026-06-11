
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { cakeReducer } from './cake/cakeReducer'
import { curdReducer } from './curd/curdReducer'
import {composeWithDevTools} from '@redux-devtools/extension'

import logger from 'redux-logger'


let rootReducer = combineReducers({
  cake: cakeReducer,
  curd: curdReducer
})


export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)) )