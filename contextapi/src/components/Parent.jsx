import React from 'react'
import ChildComponent from './ChildComponent'

const Parent = ({data}) => {
  return (
    <div className='container my-3' style={{border:'2px solid green'}}>    
    <h2>I am Parent Component</h2>
    <ChildComponent data={data}/>
    </div>
    
  )
}

export default Parent