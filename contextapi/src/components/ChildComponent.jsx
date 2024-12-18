import React from 'react'

const ChildComponent = ({data}) => {
  return (
    <div className='container my-3' style={{border:'2px solid red'}}>
        <h3>ChildComponent</h3>
        <p>Data coming from parent :{data}</p>
    </div>
    
  )
}

export default ChildComponent