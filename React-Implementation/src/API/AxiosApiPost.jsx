import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
const AxiosApiPost = () => {
    const[postData,setPostData]=useState(null);
    const baseUrl='https://jsonplaceholder.typicode.com/posts';
    useEffect(()=>{
        axios.get(baseUrl)
       .then((response) => {
        setPostData(response.data)
       })
    },[]);

    if(!postData) return 'nothing';
    function createPost(){
        axios.post(baseUrl,{
            title: 'foo',
            body: 'bar',
        }).then((response) =>{
            setPostData(console.log(response.data))
        })
    }
  return (
    <div>
        <h1>Axios API GET</h1>
        <ul>
            {postData?.map((item)=>{
                return <li key={item.id}>{item.title} <ul><li>{item.body}</li></ul></li>
            })}
        </ul>
        <button className=" btn btn-danger" onClick={createPost}>createPost</button>
    </div>
  )
}

export default AxiosApiPost