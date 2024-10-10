import React, { useState } from 'react'

function UseCase4() {
    const [User,setUser]=useState({
        name: 'Ayush',
        age: '22',
        email: 'a@example.com',
        phone: '999999999'
    })
    const change=(name,age,email,phone) => {
        setUser({name,age,email,phone})
    }
  return (
    <div>
        <h3>Welcome{User.name}</h3>
        <ul>
            <li>{User.email}</li>
            <li>{User.age}</li>
        </ul>
        <button onClick={()=>change('Ayush Tank','21','b@gmail.com','223232323')}>Change</button>
    </div>

  )
}

export default UseCase4