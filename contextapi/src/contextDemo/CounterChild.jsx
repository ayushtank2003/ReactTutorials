import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const CounterChild = () => {
    const {increment,decrement}=useContext(CounterContext);
  return (
    <div>
        <h3>CounterChild</h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default CounterChild