import React from 'react'
import CompTwo from './CompTwo'
const CompOne = (props) => {
  return (
    <div>
        <h3 className='p-2 text-bg-success text-center'> Prop Drilling Exmple </h3>
        <h3>Inside A component</h3>
        <h4>My name is {props.f_name}</h4>
        <CompTwo f_name={props.f_name}/>
    </div>
  )
}

export default CompOne

