import React from 'react'
import Question from './Question'

export default function QuestionSection(props){

    const renderQuestions = () => props.questions.map(q => {
        if(q.number == props.currentQuestion){
            return <Question  q={q} nextQuestion={props.nextQuestion}key={q.number} id={q.number}/>
        }
    })



    return(
        <div className="question-block">
            {renderQuestions()}       
        </div>
    )

}