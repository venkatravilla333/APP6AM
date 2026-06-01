import React, { useState } from 'react'

function D(props) {
  // let [name, setName] = useState('sachin')

  console.log(props)
  
  console.log('render')
  return (
    <div>
      <h4>D : Name: {props.name}</h4>
      {/* <button onClick={()=>setName('kohli')}>update name</button> */}
    </div>

  )
}

export default D