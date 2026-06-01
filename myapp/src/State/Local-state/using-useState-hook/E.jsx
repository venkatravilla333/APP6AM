import React, { useState } from 'react'

function E(props) {
  // let [name, setName] = useState('sachin')
  
  // console.log('render')
  return (
    <div>
      <h4>E : Name: {props.name}</h4>
      {/* <button onClick={()=>setName('kohli')}>update name</button> */}
    </div>

  )
}

export default E