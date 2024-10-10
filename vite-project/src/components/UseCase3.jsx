import React, { useState } from 'react'

function UseCase3() {
    const [flag, setFlag] = useState(false);
    
    const handlerClick = () => {
        setFlag(!flag);
    }
  return (
    <div className='p-2' style={{border:"2px solid red"}}>
        {flag?<p>My Data</p>:' '}
        <button onClick={handlerClick} className='btn btn-primary '>
            {flag?'Hide':'Show'}
        </button>
    </div>
  )
}

export default UseCase3