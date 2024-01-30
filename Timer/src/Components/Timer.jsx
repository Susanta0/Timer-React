import { useState, useEffect } from "react"
const Timer=()=>{
    const [count, setCount]=useState(50)

    useEffect(()=> {
        setInterval(()=>{
        setCount((prev)=>prev-1)
    },1000)
    },[])
    
    return(
        <>
        <p>Count : {count}</p>
        </>
    )
}
export default Timer