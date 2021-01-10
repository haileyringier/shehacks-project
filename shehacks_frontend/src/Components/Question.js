import React from 'react'


export default function Question(props){
    console.log(props)
    const clickedAnswer = (event) => {

        console.log(event.target)
    }

    const renderQuestions = () => props.questions.map(q => {
        return (
            <li>
                <h3>{q.number} .  {q.question}</h3>
                <button className="question-option" onClick={clickedAnswer}>A. {q.optionA}</button> 
                <button className="question-option" onClick={clickedAnswer}>B. {q.optionB}</button>
                <button className="question-option" onClick={clickedAnswer}>C. {q.optionC}</button>
                <button className="question-option" onClick={clickedAnswer}>D. {q.optionD}</button>
            </li>
        )
    })

    return(
        <div className="question-block">
            {renderQuestions()}       
        </div>
    )
}