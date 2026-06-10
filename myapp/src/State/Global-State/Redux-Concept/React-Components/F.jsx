import React from 'react'
import { store } from '../Redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { BUY_CAKE } from '../Redux/cake/actionTypes'
import { buyCake } from '../Redux/cake/actionCreator'
import { buyCurd } from '../Redux/curd/actionCreator'

function F() {
  // var state = store.getState()

  let noOfCakes = useSelector((state) => {
    return state.cake.noOfCakes
  })
  let noOfCurds = useSelector((state) => {
    return state.curd.noOfCurds
  })

  let dispath = useDispatch()

  return (
    <div>
      <h4>F: No OfCakes: {noOfCakes} </h4>
      <button onClick={()=>dispath(buyCake())}>buyCake</button>
      <h4>F: No OfCurds: {noOfCurds} </h4>
      <button onClick={()=>dispath(buyCurd())}>buyCurd</button>
    </div>
  )
}

export default F