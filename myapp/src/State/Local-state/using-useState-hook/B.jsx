import React, { useState } from 'react'
import D from './D'
import E from './E'

function B(props) {
  // let [name, setName] = useState('sachin')
  console.log(props)

  return (
    <div>
      <D name={props.name} />
      <E name={props.name} />
    </div>
  )
}

export default B