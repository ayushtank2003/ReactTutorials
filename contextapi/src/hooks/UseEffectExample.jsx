import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('');
    useEffect(()=>{
        console.log('component Loaded');
    },[])//give empty dependency array for run one time
    useEffect(()=>{
        console.log(`Count changed to ${count}`);
    },[count]);// trigger when count changes
    useEffect(()=>{
        console.log(`Name changed to ${name}`);
    },[name]);// trigger when name changes
    return (
        <div>
            <h2>Hello from useCase(UseEffect)</h2>
            <h4>{count} welcome {name} Sir </h4>
            <button onClick={()=>setCount(count+1)}>+</button>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
        </div>
    );
}

export default UseEffectExample