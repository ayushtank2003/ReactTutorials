import React from 'react'
import { useState } from 'react';
const users=[
    {id:1,name:'Himmu',online:true},
    {id:2,name:'Ayush',online:false},
    {id:3,name:'Abha',online:true},
    {id:4,name:'alice',online:true},
    {id:5,name:'Ekki',online:false}
]
function FilteredData() {
    const[show,setShow]=useState(true);
    const filteredUser=users.filter(user=>user.online==show);
    return (
        <div>
            <h3>FilteredData</h3>
            <button onClick={()=>setShow(!show)}>{show?'Show Offline':'Show Online'}</button>
            <ul>
                {
                    filteredUser.map(user=>(
                    <li key={user.id}>{user.id} {user.name} {show?'Online':'Offline'}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FilteredData