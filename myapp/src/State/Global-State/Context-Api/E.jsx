import React, { useContext } from 'react'
import { nameContext } from './A'

function E() {
  var name = useContext(nameContext)
  return (
    <div>E: {name}</div>
  )
}

export default E