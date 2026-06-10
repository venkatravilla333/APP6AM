import { BUY_CURD } from "./actionTypes"


let initialState = {
  noOfCurds: 500
}

export let curdReducer = (state=initialState, action) => {
  switch (action.type) {
    case BUY_CURD:
      return {
        noOfCurds: state.noOfCurds - 1
      }
      break;
    default: 
      return state
  }
}