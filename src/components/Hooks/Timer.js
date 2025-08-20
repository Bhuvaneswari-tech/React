import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setSeconds((prev)=>prev+1);
        }, 1000)

        return () => clearInterval(timer)
    })

  return (
    <div>
        <h2>Timer : {seconds} sec</h2>
    </div>
  )
}

export default Timer