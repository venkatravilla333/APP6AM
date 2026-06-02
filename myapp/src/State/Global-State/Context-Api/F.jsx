import React, { useContext } from 'react'
import { nameContext } from './A'

function F() {
  //  var name = nameContext._currentValue
  var name = useContext(nameContext)
  return <h4>Name: {name}</h4>
  
  // return < nameContext.Consumer >
  //   {
  //     (name) => {
  //       return <h3>Name: {name}</h3>
  //     }
  //    } 
  // </ nameContext.Consumer>
  
}

export default F