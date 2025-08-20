import React, { useEffect, useState } from 'react'

const FetchAPI = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then((data)=>{
            setUsers(data)
            setLoading(false)
        })
        .catch((err)=>{
            console.error("Error fetching users: ",err)
            setLoading(false)
        })
    },[])

    if(loading) return <h2>Loading...</h2>
  return (
    <div>
        <h1>Users</h1>
        <ul>
            {users.map((u)=>(
                <li key={u.id}>{u.name} ({u.email})</li>
            ))}
        </ul>
    </div>
  )
}

export default FetchAPI