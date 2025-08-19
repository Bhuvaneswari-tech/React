import React,{useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count+2)
    }
    const decrement = () => {
        setCount(count-1)
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handleClick}>Increment</button>
        &nbsp;&nbsp;
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter