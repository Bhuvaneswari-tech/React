import React, { useState, useEffect } from 'react'

const TodoAPI = () => {
    const [todos, setTodos] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchTodos = async()  =>{
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
                if(!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setTodos(data)
            }
            catch(err){
                setError(err.message)
            }
        }
        fetchTodos();
    },[])

    if(error) return <h3>Error: {error}</h3>

  return (
    <div>
        <h2>Todos</h2>
        <ul>
            {todos.map((t)=>(
                <li key={t.id}>
                    {t.title} {t.completed ? "Done" : "Pending"}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoAPI