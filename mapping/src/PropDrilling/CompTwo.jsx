import React from 'react'
import CompThree from './CompThree'
const CompTwo = (props) => {
  return (
    <div>
        <h3>B component</h3>
        <CompThree f_name={props.f_name}/>
    </div>
  )
}

export default CompTwo