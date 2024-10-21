import React from 'react'

function Test(props) {
  return (
    <div>
        <h1>Test Component</h1>
        <button onClick={props.increment}>
            click me 
        </button>
    </div>
  )
}

export default Test