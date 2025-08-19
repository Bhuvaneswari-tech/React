import React, {useState, useEffect} from 'react'
import './WIFICheck.css'

const WIFICheck = () => {

    const [isOnline, setIsOnline] = useState(navigator.onLine)

    useEffect(()=>{
        const handleStatusChange = () =>{
            setIsOnline(navigator.onLine)
        }

        window.addEventListener('online', handleStatusChange);

        window.addEventListener('offline', handleStatusChange)

        return () =>{
            window.removeEventListener('online', handleStatusChange)
            window.removeEventListener('offline', handleStatusChange)
        }
    },[isOnline])
    
  return (
    <div className='container'>
        <h3>Welcome to Wipro</h3>
        <p>Turn on/off your WIFI to see what happens</p>
        {isOnline ? (
            <h1 className='online'>You are Online</h1>
        ):(
            <h1 className='offline'>You are Offline</h1>
        )}

    </div>
  )
}

export default WIFICheck