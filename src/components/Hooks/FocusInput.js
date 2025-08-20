import React, { useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)

    const focusInput = () =>{
        inputRef.current.focus();
    }
  return (
    <div>
        <input ref={inputRef} type="text" placeholder='Type here...' />
        <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default FocusInput