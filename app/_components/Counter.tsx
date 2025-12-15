"use client"
import { useState } from "react"

const Counter : React.FC<{name:string}> =({name})=> {
const [counter,setCounter]=useState<number>(0);

    return (
        <div>
            <p>{name}</p>
        <button onClick={()=>setCounter(c=>c+1)} >{counter}</button>            
        </div>
    )
}

export default Counter
