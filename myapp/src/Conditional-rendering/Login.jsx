import React from 'react'

function Login(props) {
  return (
    <div style={{border: "2px solid red", padding: "20px", margin: "20px"}}>
      <h3>Login</h3>
      <input type="text" />
      <input type="password" />
      <button onClick={()=>props.setLogin(true)}>submit</button>
    </div>
  )
}

export default Login