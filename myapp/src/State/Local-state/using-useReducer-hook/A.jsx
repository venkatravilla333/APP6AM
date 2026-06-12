import React, { useReducer, useState } from 'react'
import B from './B'
import C from './C'

function A() {

  let initialState = {
    count: 0
  }

  let countReducer = (state=initialState, action) => {
    console.log(action)
    switch (action.type) {
      case 'Increase':
        return {
          count: state.count + 1
        }
        break;
      case 'Decrease':
        return {
          count: state.count - 1
        };
        break;
      case 'Reset':
        return {
          count: state.count = 0
        }
    }
  }

  let [state, dispatch] = useReducer(countReducer, initialState)

  return (
    <div>
      <h3>Count: {state.count}</h3>
      <button onClick={()=>dispatch({type: 'Increase'})}>Increase count</button>
      <button onClick={()=>dispatch({type: 'Decrease'})}>Decrease count</button>
      <button onClick={()=>dispatch({type: 'Reset'})}>Reset count</button>
      <B/>
      <C/>
    </div>
  )
}

export default A