import React,{useState} from "react";

const Counter=()=>{
    const [Count,setCount]=useState(0)
    return(
        <div className="cc">
            <h1 className="c">Counter</h1>
            <button className="c1">{Count}</button><br></br>
            <button className="c2" onClick={()=>setCount(Count+1)}>Increment</button>
            <button className="c3" onClick={()=>setCount(Count-1)}>Decrement</button><br></br>
            <button className="c4" onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}
export default Counter;