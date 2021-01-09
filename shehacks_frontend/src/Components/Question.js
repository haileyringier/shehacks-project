import React from 'react'

export default function Question(props){

    const renderQuestions = () => props.questions.map(q => {
        return (
            <li>
                <h3>{q.question}</h3>
                <p>{q.optiona}</p>
            </li>
                
        )
    })

    return(
        <div className="question-block">
            {renderQuestions()}       
        </div>
    )
}