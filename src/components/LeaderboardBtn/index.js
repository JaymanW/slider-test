import React from 'react'
import './style.css'

function LeaderboardBtn(props) {
    return (
        <div className={props.activeStyle} onClick={() => props.switchBoards()}>
            <img src="./leaderboard.png" className="leaderboard-icon" alt="refresh puzzle"></img>
        </div>
    )
}

export default LeaderboardBtn