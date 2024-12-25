import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const FetchApi = () => {
    const [data,setData]=useState(null);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
       .then((res)=>res.json())
       .then((data)=>setData(data))
    },[])
  return (
    <div>
        <h1>Fetching Data from API</h1>
        {data?.map((item)=>{
            return <p key={item.id}>{item.id}:-{item.name}</p>
        })}
 
    </div>
  )
}

export default FetchApi