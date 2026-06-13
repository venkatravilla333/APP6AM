import React, { useState } from 'react'
import Parent from './Side-Effects/3)Runs-Onlyonce/Parent'
import Container from './Side-Effects/4)Cleanup-Task/Container'
// import Parent from './Side-Effects/2)Runs-Basedon-Condition/Parent'
// import A from './State/Local-state/using-useReducer-hook/A'
// import A from './State/Global-State/Toolkit-Concept/React-Components/A'


function App() {
 
  return (
    <div>
      <Container/>
    </div>
  )
}

export default App