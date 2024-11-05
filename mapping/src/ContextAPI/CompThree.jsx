import React from 'react'
import { Studentinfo } from '../App'

const CompThree = (props) => {
  return (
    <div>
      <Studentinfo.Consumer>
        {(getFname)=>{
          return <h4>My name is {getFname}</h4>
        }}
      </Studentinfo.Consumer>
    </div>
  )
}

export default CompThree