import React, { useEffect, useState } from 'react'
import axios from 'axios';
const AxiosApi = () => {
    const [data,setData]=useState(null);
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) =>setData(response.data))
    },[])
  return (
    <div>
    <h1>Using Axios</h1>
        <h1>Fetching Data from API</h1>
        {data?.map((item)=>{
            return <p key={item.id}>{item.id}:-{item.name}</p>
        })}
 
    </div>
  )
}

export default AxiosApi