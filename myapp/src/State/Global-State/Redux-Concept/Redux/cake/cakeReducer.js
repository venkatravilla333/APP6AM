import { BUY_CAKE } from "./actionTypes";

var initilaState = {
  noOfCakes: 100
}


export let cakeReducer = (state = initilaState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        noOfCakes: state.noOfCakes - 1
      }
      break;
    default: 
      return state
  }
}