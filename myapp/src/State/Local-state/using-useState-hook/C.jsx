import React from 'react'
import F from './F'

function C(props) {
  console.log(props)
  return (
    <div>
      <F name={props.name} />
    </div>
  )
}

export default C