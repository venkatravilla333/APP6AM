import React, { useEffect, useState } from 'react'

function Parent() {
let [x, setX] = useState(0)
let [y, setY] = useState(0)
  
  function stateUpdate(e) {
    console.log('state update')
    setX(e.clientX)
    setY(e.clientY)
  }

  console.log('render')
  
  useEffect(() => {
  console.log('effect runs')
    window.addEventListener('click', stateUpdate)
    return () => {
      console.log('cleanup task')
      window.removeEventListener('click', stateUpdate)
    }
}, [])
  
  return (
    <div>
      <h3>X: {x}</h3>
      <h3>Y: {y}</h3>
    </div>
  )
}

export default Parent