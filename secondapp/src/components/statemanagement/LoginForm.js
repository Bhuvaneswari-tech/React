import React,{useState} from 'react'

const LoginForm = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    
    const handleChange = (e) =>{
        const {name, value} = e.target
        if(name === "username") setUsername(value)
        if(name === "password") setPassword(value)
    }
  return (
    <div>
        <h1>Login Form</h1>
        <form>
            Username:
            <input type="text" name="username" value={username} 
            onChange = {handleChange} /><br /><br />
            Password:
            <input type="password" name="password" value={password} 
            onChange = {handleChange} />

        </form>
        <div>
            <h3>Login Details: </h3>
            <p>Name: {username}</p>
            <p>Password: {password}</p>
        </div>
    </div>
  )
}

export default LoginForm