import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../Toolkit/cakeSlice'
import { buyCurd } from '../Toolkit/curdSlice'

function F() {
let  noOfCakes =  useSelector((state) => {
   return state.cake.noOfCakes
})
let  noOfCurds =  useSelector((state) => {
   return state.curd.noOfCurds
})
  
  let dispatch = useDispatch()
  
  return (
    <div>
      <h4>F</h4>
      <h3> noOfCakes: { noOfCakes}</h3>
       <button onClick={()=>dispatch(buyCake())}>buy cake</button>
      <h3> noOfCurds: { noOfCurds}</h3>
       <button onClick={()=>dispatch(buyCurd())}>buy cake</button>
    </div>
  )
}

export default F