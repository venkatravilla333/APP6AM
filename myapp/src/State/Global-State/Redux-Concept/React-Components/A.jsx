import React from 'react'
import B from './B'
import C from './C'
import { store } from '../Redux/store'
import {Provider} from 'react-redux'

function A() {
  return (
    <Provider store={store}>
      <B />
      <C />
    </Provider>
    
  )
}

export default A