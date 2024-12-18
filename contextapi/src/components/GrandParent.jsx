import React, { useState } from 'react'
import Parent from './Parent'

const GrandParent = () => {
    const [data ,setData]=useState("Hello From Grand Parents")
  return (
    <div className='container my-3' style={{border:'2px solid blue'}}>
    <h3>GrandParent</h3>
    <Parent data={data}/>
    </div>
  )
}

export default GrandParent