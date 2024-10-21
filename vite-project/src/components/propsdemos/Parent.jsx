import React from 'react'
import Child1 from './Child1'

function Parent() {
  return (
    <div className='p-2 mt-2'
    style={{border:'2px solid red'}}>
        <h2>I am Parent Component</h2>

        <Child1 name="Ayush"
            message="Good Morning"
        />
        <Child1 name="Rahul"
            message="Good Afternoon"
        />
    </div>
    
  )
}

export default Parent