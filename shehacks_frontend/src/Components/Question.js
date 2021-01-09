import React from 'react'

export default function Question(props){
    
    const renderQuestions = () => props.questions.map(q => {
        return (
            <li>
                <h3>{q.number} .  {q.question}</h3>
                <p>A. {q.optionA}</p>
                <p>B. {q.optionB}</p>
                <p>C. {q.optionC}</p>
                <p>D. {q.optionD}</p>
            </li>
        )
    })

    return(
        <div className="question-block">
            {renderQuestions()}       
        </div>
    )
}