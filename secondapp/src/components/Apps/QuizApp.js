import React, { useState } from 'react'

const Question = ({question, options, onAnswer}) =>{
    const [selected, setSelected] = useState('')

    return(
        <div>
            <h3>{question}</h3>
            {options.map((opt,i)=>(
                <div key={i}>
                    <input type="radio" name="quiz" value={opt}
                    checked={selected === opt}
                    onChange = {(e)=>{
                        setSelected(e.target.value);
                        onAnswer(e.target.value)
                    }} />
                    {opt}
                </div>
            ))}
        </div>
    )
}

const QuizApp = () => {
    const [answer, setAnswer] = useState('')
  return (
    <div>
        <Question question = "what is the capitial of India?"
        options={["Mumbai","Delhi","Chennai"]}
        onAnswer={setAnswer} />
    {answer && <p>Your Answer: {answer}</p>} 
    </div>
  )
}

export default QuizApp