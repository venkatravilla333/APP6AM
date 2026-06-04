
import { createStore } from 'redux'


var initilaState = {
  noOfCakes: 100
}

let cakeReducer = (state = initilaState, action) => {
  console.log(action)
  switch (action.type) {
    case 'BUY_CAKE':
      return {
        noOfCakes: state.noOfCakes - 1
      }
      break;
    default: 
      return state
  }
  return initilaState
}

export let store = createStore(cakeReducer)
console.log(store)