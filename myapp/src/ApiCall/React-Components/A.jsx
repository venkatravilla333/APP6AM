import React from 'react'
import B from './B'
import C from './C'
import {Provider} from 'react-redux'
import { store } from '../store'

function A() {
  return (
    <Provider store={store}>
      <B />
      <C />
    </Provider>
    
  )
}

export default A