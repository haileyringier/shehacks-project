import React from 'react'

export default function Question(props){
    
    // const clickedAnswer = (event) => {
    //     console.log(event.target.value)
    //     props.nextQuestion(event)
    // }

    const renderQuestions = () => props.questions.map(q => {
        if(q.number == props.currentQuestion){
            return (
                <li>
                    <h3>{q.number} .  {q.question}</h3>
                    <button className="question-option" onClick={props.nextQuestion}>A. {q.optionA}</button> 
                    <button className="question-option" onClick={props.nextQuestion}>B. {q.optionB}</button>
                    <button className="question-option" onClick={props.nextQuestion}>C. {q.optionC}</button>
                    <button className="question-option" onClick={props.nextQuestion}>D. {q.optionD}</button>
                </li>
            )
        }
    })



    return(
        <div className="question-block">
            {renderQuestions()}       
        </div>
    )
}