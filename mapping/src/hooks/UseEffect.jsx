import React, { useEffect } from 'react'
console.log('render again');

const UseEffect = (props) => {
    useEffect(()=>{
        console.log(`the name is ${props.name}`);
        
    },[props.name])
  return (
    <div>
        <h3>UseEffect</h3>

    </div>
  )
}

export default UseEffect