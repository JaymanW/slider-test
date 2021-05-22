import React from 'react'
import './style.css'

import ReturnBtn from '../ReturnBtn'

function Leaderboard(props) {
    
    const switchBoards = () => {
        props.switchBoards();
    }
    
    return (
        <div className="leaderboard">
            <div className="leaderboard-section">
                <h2 className="leaderboard-header">3x3 Leaderboard</h2>
                <div className="leaderboard-scoreboard">
                    <p>🥇 JaymanW <span className="score">(81.7)</span></p>
                    <p>🥈 Bubsw <span className="score">(95.2)</span></p>
                    <p>🥉 Carrfam <span className="score">(124.9)</span></p>
                </div>
            </div>
            <div className="leaderboard-section">
                <h2 className="leaderboard-header">4x4 Leaderboard</h2>
                <div className="leaderboard-scoreboard">
                    <p>🥇 JaymanW <span className="score">(81.7)</span></p>
                    <p>🥈 Bubsw <span className="score">(95.2)</span></p>
                    <p>🥉 Carrfam <span className="score">(124.9)</span></p>
                </div>
            </div>
            <ReturnBtn switchBoards={switchBoards} />
        </div>
    )
}

export default Leaderboard
