import React from 'react'

export default function Score(props){

    return(
        <div className="score-section">
            <p className="score-text">Score:{props.score}</p>
        </div>
    )
}