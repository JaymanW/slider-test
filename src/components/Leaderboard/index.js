import React, { useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'

import ReturnBtn from '../ReturnBtn'

function Leaderboard(props) {
    const [leaderboard3, setLeaderboard3] = useState([{ username: "", score: ""}, { username: "", score: ""}, { username: "", score: ""}]);
    const [leaderboard4, setLeaderboard4] = useState([{ username: "", score: ""}, { username: "", score: ""}, { username: "", score: ""}]);

    useEffect(() => {
        axios.get('/leaderboard3')
        .then((response) => {
            setLeaderboard3(response.data);
            console.log(response.data)
        }).catch((err) => {
            console.log(err);
        })

        axios.get('/leaderboard4')
        .then((response) => {
            setLeaderboard4(response.data);
            console.log(response.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    
        
        // .then(() => {
        // generateLeaderboards()
        // })
    
    const switchBoards = () => {
        props.switchBoards();
    }

    // <p>🥇 JaymanW <span className="score">(81.7)</span></p>
    // <p>🥈 Bubsw <span className="score">(95.2)</span></p>
    // <p>🥉 Carrfam <span className="score">(124.9)</span></p>
    
    return (
        <div className="leaderboard">
            <div className="leaderboard-section">
                <h2 className="leaderboard-header">3x3 Leaderboard</h2>
                <div className="leaderboard-scoreboard">
                    {
                        leaderboard3.map((place, i) => {
                            if (i === 0) {
                                return <p key={i} >🥇 {place.username} <span className="score">({place.score})</span></p>
                            } else if (i === 1) {
                                return <p key={i} >🥈 {place.username} <span className="score">({place.score})</span></p>
                            } else if (i === 2) {
                                return <p key={i} >🥉 {place.username} <span className="score">({place.score})</span></p>
                            }
                        })
                    }
                </div>
            </div>
            <div className="leaderboard-section">
                <h2 className="leaderboard-header">4x4 Leaderboard</h2>
                <div className="leaderboard-scoreboard">
                {
                        leaderboard4.map((place, i) => {
                            if (i === 0) {
                                return <p key={i} >🥇 {place.username} <span className="score">({place.score})</span></p>
                            } else if (i === 1) {
                                return <p key={i} >🥈 {place.username} <span className="score">({place.score})</span></p>
                            } else if (i === 2) {
                                return <p key={i} >🥉 {place.username} <span className="score">({place.score})</span></p>
                            }
                        })
                    }
                </div>
            </div>
            <ReturnBtn switchBoards={switchBoards} />
        </div>
    )
}

export default Leaderboard
