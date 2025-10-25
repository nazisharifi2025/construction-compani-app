import { useEffect, useState } from "react"

function Clock() {
    const [clock , setclock] = useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        const Setinterval = setInterval(()=>{
            setclock(new Date().toLocaleTimeString());
        },1000)
        return ()=> clearInterval(Setinterval);
    },[])
  return (
    <div className="font-bold text-4xl font-serif">{clock}</div>
  )
}

export default Clock