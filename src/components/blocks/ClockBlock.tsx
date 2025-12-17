import { useEffect, useState } from "react";

const td = "ˑ"

function f(t:number){
    return t.toString().padStart(2, "0")
}

function ClockBlock () {

    const [time, setTime] = useState(f(new Date().getHours()) + td + f(new Date().getMinutes()) + td + f(new Date().getSeconds()));

    useEffect(()=> {
        const interval = setInterval (()=>{
            setTime(f(new Date().getHours()) + td + f(new Date().getMinutes()) + td + f(new Date().getSeconds()))
        }, 1000)

        return () => clearInterval(interval) 
    }, [])

    return(
        <div className="clock-container">
            <span className="time">{time}</span>
        </div>
    )
}

export default ClockBlock