import React, { useState } from 'react'

function F(props) {
  //  let [name, setName] = useState('sachin')
  console.log(props)
  return (
    <div>
      <h4>F: Name: {props.name}</h4>
      {/* <button onClick={()=>setName('kohli')}>update name</button> */}
    </div>
  )
}

export default F