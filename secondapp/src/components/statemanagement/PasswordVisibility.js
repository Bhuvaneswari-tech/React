import React, {useState} from 'react'

const PasswordVisibility = () => {
    const [show, setShow] = useState(true)
  return (
    <div>
        <h1>Password Visibility</h1>
        <input type={show? 'text': 'password'} placeholder='Enter Password' />
        <button onClick={()=>setShow(!show)}>
            {show ? "Hide" : "Show"}
        </button>
    </div>
  )
}

export default PasswordVisibility

/*
Create a Registration form
element - Name, Email, Password, Gender, Skills(Checkbox), Country(dropdown)

Get the user Input
and display the DOM elements

Apply External CSS for the form
*/