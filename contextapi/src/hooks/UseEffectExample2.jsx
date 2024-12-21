import React, { useEffect, useState } from 'react'

const UseEffectExample2 = () => {
    const [user,setUser]=useState([]);
    const fetchData=async ()=>{
        try{
            const response=await fetch('https://jsonplaceholder.typicode.com/users');
            const data=await response.json();
            setUser(data);
        }
        catch(error){
            console.error('Error:', error);
        }
    }
    const [time,setTime]=useState(new Date());
    useEffect(()=>{
        fetchData();
    },[])
    useEffect(()=>{
        const interval =setInterval(()=>{
            setTime(new Date());
        },1000)
        return(()=>{
            clearInterval(interval);
        })
        
    },[])

    return (
        <div>
            <h2>Use Effect for Api Feching </h2>
            <table className='table table-bordered table-striped'>
                <thead><tr><th>Id</th><th>Name</th><th>Email</th><th>UserName</th></tr></thead>
                <tbody>
                    {user.map(item=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Current Timer : {time.toLocaleTimeString()}</h3>
        </div>
    )
}

export default UseEffectExample2