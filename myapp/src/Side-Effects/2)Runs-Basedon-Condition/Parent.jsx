import React, { useEffect, useState } from 'react'

function Parent() {
  let [normalCount, setNormalCount] = useState(0)
  let [domCount, setDomCount] = useState(0)

  useEffect(() => {
    console.log('effect runs')
    document.title = domCount
  }, [domCount])

  console.log('render')
  
  return (
    <div>
      <h3>Normal count: {normalCount}</h3>
      <button onClick={()=>setNormalCount(normalCount+1)}>update normal count</button>
      <h3>Dom count: {domCount}</h3>
      <button onClick={()=>setDomCount(domCount+1)}>update dom count</button>
    </div>
  )
}

export default Parent