import React, { useState } from 'react'


export default function Question(props){
    
    console.log(props)
    
    const clickedAnswer = (event) => {
        
        console.log(event.target)

    }

    

    const renderQuestions = () => props.questions.map(q => {
        const [count, setCount] = useState(0);
        return (
            <li>
                <h3>{q.number} .  {q.question}</h3>
                <button className="question-option" onClick={() => setCount(count + 1)}>A. {q.optionA}</button> 
                <button className="question-option" onClick={clickedAnswer}>B. {q.optionB}</button>
                <button className="question-option" onClick={clickedAnswer}>C. {q.optionC}</button>
                <button className="question-option" onClick={clickedAnswer}>D. {q.optionD}</button>
                console.log(event.target)
            </li>
        )
    })

    return(
        <div className="question-block">
            {renderQuestions()}       
        </div>
    )
}