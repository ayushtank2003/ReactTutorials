import React from 'react'

function Child1(props) {
  return (
    <div className='p-2 mt-2'
    style={{border:'2px solid blue'}}>
        <h2>I am Child Component</h2>
        <h4>Welcome {props.name}</h4>
        <p>Message:{props.message}</p>

    </div>
  )
}

export default Child1