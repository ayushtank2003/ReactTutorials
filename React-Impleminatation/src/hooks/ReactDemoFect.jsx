import React from 'react'
import UseFetch from './UseFetch'

const ReactDemoFect = () => {
    const [data]=UseFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <div>
    <h1>Using custome hook (UseFetct)</h1>
    {data?.map((item)=>{
        return <p key={item.id}>{item.id}:-{item.title}</p>
    })}
    </div>
    
  )
}

export default ReactDemoFect