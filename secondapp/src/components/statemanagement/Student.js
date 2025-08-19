import React from 'react'

const Student = (props) => {
  return (
    <div className='center'>
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Email Address: {props.email}</p>
    </div>
  )
}

export default Student