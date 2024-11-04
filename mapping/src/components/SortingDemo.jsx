import React, { useState } from 'react'
import Customer from '../assets/customers.json';
function SortingDemo() {
    const [sortBy,setSortBy]=useState('name');    
    const sortedCustomer=[...Customer].sort((a,b)=>{
        if(sortBy=='name'){
            return a.name.localeCompare(b.name);
        }
        if(sortBy=='username'){
            return a.username.localeCompare(b.username);
        }
    })
    return (
        <div>
            <h3>List of Students</h3>
            <button onClick={()=>setSortBy('name')}>Sort By Name</button>
            <button onClick={()=>setSortBy('username')}>Sort By Username</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCustomer.map(cust=>(
                        <tr key={cust.id} >
                            <td>{cust.id}</td>
                            <td>{cust.name}</td>
                            <td>{cust.email}</td>
                            <td>{cust.username}</td>
                            <td>
                                <button className='btn btn-primary' onClick={()=>setSelected(cust)}>view</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SortingDemo