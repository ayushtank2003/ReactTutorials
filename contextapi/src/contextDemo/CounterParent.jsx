import React, { useContext } from 'react'
import CounterChild from './CounterChild'
import { CounterContext } from '../context/CounterContext'

const CounterParent = () => {
    const {count}=useContext(CounterContext);
  return (
    <div>
        <h3>CounterParent:{count}</h3>
        <CounterChild/>
    </div>
  )
}

export default CounterParent