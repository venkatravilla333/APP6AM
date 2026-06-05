import React, { useState } from 'react'
import Login from './Login'
import Profile from './Profile'

function Parent() {

  let [login, setLogin] = useState(true)
  
  // return (
  //   <div>
  //     <Login />
  //     <Profile/>
  //   </div>
  // )

  
  // if (login) {
    //   return <Profile setLogin={setLogin} />
    // } else {
      //   return <Login setLogin={setLogin} />
      // }
  // let element

  // if (login) {
  //   element = <Profile setLogin={setLogin} />
  // } else {
  //   element = <Login setLogin={setLogin} />
  // }
  // return element

  //  return login ? <Profile setLogin={setLogin} /> : <Login setLogin={setLogin} />
  
  // return login && <Profile setLogin={setLogin} />
}

export default Parent