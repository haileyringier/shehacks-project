import React from 'react'

export default function Question(props){

    return(
        <li>
            <h3>{props.q.number} .  {props.q.question}</h3>
            <button className="question-option" onClick={props.nextQuestion}>A. {props.q.optionA}</button> 
            <button className="question-option" onClick={props.nextQuestion}>B. {props.q.optionB}</button>
            <button className="question-option" onClick={props.nextQuestion}>C. {props.q.optionC}</button>
            <button className="question-option" onClick={props.nextQuestion}>D. {props.q.optionD}</button>
        </li>
    )
}