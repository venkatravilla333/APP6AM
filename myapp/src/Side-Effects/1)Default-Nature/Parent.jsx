import React, { useEffect, useState } from 'react'

function Parent() {
  let [normalCount, setNormalCount] = useState(0)

  useEffect(() => {
    console.log('effect runs')
  })

  console.log('render')
  
  return (
    <div>
      <h3>Normal count: {normalCount}</h3>
      <button onClick={()=>setNormalCount(normalCount+1)}>update normal count</button>
    </div>
  )
}

export default Parent