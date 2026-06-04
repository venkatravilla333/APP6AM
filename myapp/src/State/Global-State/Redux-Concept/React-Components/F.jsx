import React from 'react'
import { store } from '../Redux/store'
import { useDispatch, useSelector } from 'react-redux'

function F() {
  // var state = store.getState()

  let noOfCakes = useSelector((state) => {
    return state.noOfCakes
  })

  let dispath = useDispatch()
  console.log(dispath)

  return (
    <div>
      <h4>F: No OfCakes: {noOfCakes} </h4>
      <button onClick={()=>dispath({type: 'BUY_CAKE'})}>buyCake</button>
    </div>
  )
}

export default F