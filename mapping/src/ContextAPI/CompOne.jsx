import React from 'react'
import CompTwo from './CompTwo'
const CompOne = (props) => {
  return (
    <div>
        <h3 className='p-2 text-bg-success text-center'> Prop Drilling Exmple </h3>
        <h3>Inside A component</h3>
        <CompTwo/>
    </div>
  )
}

export default CompOne

