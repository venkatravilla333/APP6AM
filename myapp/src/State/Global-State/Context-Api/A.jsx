import React, { createContext, useState } from 'react'
import B from './B'
import C from './C'

export var nameContext = createContext() //default value 
console.log(nameContext)

function A() {
  // var newValue = 'newvalue'
  var [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>update count</button>
      <nameContext.Provider value={count}>
      <B />
      <C />
      </nameContext.Provider>
      
      
    </div>
  )
}

export default A