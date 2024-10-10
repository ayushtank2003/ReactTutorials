import React, { useState } from 'react'

function Usecase11() {
  const [fullName,setfullName]=useState('Ayush Kumar')
  const changeName=()=>{
    
    setfullName('Ayush Kumar Tank')
    
  }
  return (
    <div>
      <h3>Usecase1 : {fullName} </h3>
      <button onClick={changeName}>click</button>
    </div>
    
  )
}

export default Usecase11