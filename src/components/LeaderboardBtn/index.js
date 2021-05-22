import React from 'react'
import './style.css'

function LeaderboardBtn(props) {
    return (
        <div className="leaderboard-btn" onClick={() => props.switchBoards()}>
            <img src="./leaderboard.png" className="leaderboard-icon" alt="refresh puzzle"></img>
        </div>
    )
}

export default LeaderboardBtn
