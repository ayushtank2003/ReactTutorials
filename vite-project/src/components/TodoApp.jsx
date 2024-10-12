import React, { useState } from 'react'

function TodoApp() {
    const[todos,setTodos]=useState([]);
    const[task,setTask]=useState('');
    const handleChange=(e)=>{
        setTask(e.target.value)
    }
    const handleClick=()=>{
        const id=Math.floor(Math.random()*1000);
        if (task.trim()) {
            setTodos([...todos,{id,task,status:'pending' }]);
            setTask(''); 
        }
    }
  return (
    <div>
        <input type="text" placeholder='Enter Your Task' onChange={handleChange} value={task}/>
        <button onClick={handleClick}>Add Task</button>
        <ul>
            {todos.map(todo=>(
                    <li key={todo.id}>{todo.task} --- {todo.status}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoApp