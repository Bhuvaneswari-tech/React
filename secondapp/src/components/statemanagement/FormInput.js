import React,{useState} from 'react'

const FormInput = () => {
    const [name, setName] = useState('')
  return (
    <div>
        <input type="text" placeholder='Enter name' value={name}
        onChange = {(e)=> setName(e.target.value)} />
        <p>Your Name: {name}</p>
    </div>
  )
}

export default FormInput