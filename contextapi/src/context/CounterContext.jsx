import { createContext, useState } from "react";

//create the context
export const CounterContext=createContext();

//provider
export const CounterProvider=({children})=>{
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    return(
        <CounterContext.Provider value={{count,increment,decrement}}>
            {children}
        </CounterContext.Provider>

    )
}