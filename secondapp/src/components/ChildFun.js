import React from 'react'

const ChildFun = (props) => {
  return (
    <div>
        <h1>Child Functional Component</h1>
        <h2>{props.greeting}</h2>
        <h3>{props.quote}</h3>
        <h3>{props.proverb}</h3>
    </div>
  )
}

export default ChildFun