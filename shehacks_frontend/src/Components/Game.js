import { render } from '@testing-library/react'
import React from 'react'
import Dog from './Dog'
import Question from './Question'
import Score from './Score'

export default class Game extends React.Component{

    state = {
        questions: [],
        score: 0,
        currentQuestion: 1
    }

    componentDidMount(){
        fetch("http://localhost:3001/questions")
            .then(response => response.json())
            .then(response => this.setState({questions: response}))
    }

    nextQuestion = (event) => {
        console.log(event.target.parentNode)
        let newValue = this.state.currentQuestion
        this.setState({currentQuestion: newValue})
    }

render(){
    return(
        <div className="game-section">
            <Score score={this.state.score}/>
            <Question questions={this.state.questions} currentQuestion={this.state.currentQuestion} nextQuestion={this.nextQuestion}/>
            <Dog />
        </div>
    )
}
}