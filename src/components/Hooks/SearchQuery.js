import React, { useState, useEffect } from 'react'

const SearchQuery = () => {
    const [posts, setPosts] = useState([])
    const [query, setQuery] = useState("1")

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?id=${query}`)
        .then((res)=>res.json())
        .then(data=>setPosts(data))
        .catch(err=>console.error(err))
    },[query]) //when it should re-render - whenever the input changes
  return (
    <div>
        <h2>Search Posts by User</h2>
        <input type="number"
        value={query}
        onChange = {(e)=>setQuery(e.target.value)}
        placeholder='Enter userId' />

        <ul>
            {posts.map((p)=>(
                <li key={p.id}>
                    <strong>{p.title}</strong>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SearchQuery