import React, { useState } from 'react'

function UserCaseMap() {
    const[users,setusers] = useState([
        {id:1,name:"aalex",email:"alex@gmail.com"},
        {id:2,name:"bbob",email:"bob@yahoo.com"},
        {id:3,name:"ccarol",email:"carol@hotmail.com"}
    ]);
    const addData=(id,name,email) => {
        setusers([...users,{id,name,email}])
    }
  return (
    <div>
        <h3>User's List</h3>
        <table className='table table-striped table-bordered'>
            <thead><tr><th>ID</th><th>Name</th><th>Email</th></tr></thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button onClick={()=>addData(4,"Ayush","Ayush@gmail.com")}>AddNew</button>
    </div>
  )
}

export default UserCaseMap