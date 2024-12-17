
import React, { useState } from 'react'

// const UseState = () => {
//     const [count, setCount] = useState(0);
//     const incrementcount=()=>{
//         setCount(count+1);
//     }
//   return (
//     <div>
//         <h3 className='p-2 text-bg-success text-center'>Hook Implementation</h3>
//         <h3>UseState</h3>
//         <button onClick={incrementcount}>Increment</button>
//         <span>{count}</span>
//         <button onClick={()=>{setCount(count-1)}}>Decrement</button>
//     </div>
//   )
// }

// export default UseState

const UseState = () => {
    const [form,setForm]=useState({
        username:'',
        password:''
    })
    const printValues=e=>{
        e.preventDefault();
        console.log(form.username,form.password);
    }
    const updateValues=e=>{
        setForm({...form,[e.target.name]:[e.target.value]})
    }
    return (
        <div>
            <h3 className='p-2 text-bg-success text-center'>Hook Implementation</h3>
            <h3>UseState</h3>
            <form onSubmit={printValues}>
                <label htmlFor="username">UserName </label>
                <input type="text" value={form.username} name="username" 
                onChange={updateValues} id="username" /> <br/><br />
                <label htmlFor="password">Password </label>
                <input type="text" value={form.password} name="password" 
                onChange={updateValues}id="password" /><br /><br />
                <input type="submit" />
            </form>
            
        </div>
    )
}

export default UseState