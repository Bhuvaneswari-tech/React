import React, { useState } from 'react'

const SubmitForm = () => {
    const [name, setName] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`The name you have entered: ${name}`)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Enter your name: </label>
            <input type="text" value={name} 
            onChange={(e)=>setName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default SubmitForm