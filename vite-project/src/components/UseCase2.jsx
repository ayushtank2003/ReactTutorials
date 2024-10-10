import React, { useState } from 'react'

function UseCase2() {
    const [count,setcount]=useState(0);
    const increment=()=>{
        setcount(count+1);
    }
    const decrement=()=>{
        setcount(count-1);
    }
  return (
    <div>
    <h1>counter components:{count}</h1>
    <button onClick={increment}>Increment button </button>
    <button onClick={decrement}>decrement button </button>
    </div>
  )
}

export default UseCase2