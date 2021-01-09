import React from 'react'
import Question from './Question'
import Score from './Score'

export default function Game(){

    // state = {
    //     questions: []
    // }

    //  fetch questions from backend and add to state

    return(
        <div className="game-section">
            {/* style={{ 
            backgroundImage: `url("https://t3.ftcdn.net/jpg/02/79/76/96/360_F_279769688_3IWMhbzatTh4QnEZCWsd5HhiLFXI9Aj2.jpg")`}}> */}
            <Score />
            <Question />
        </div>
    )
}