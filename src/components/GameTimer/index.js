import React from 'react'
import './style.css'

import Blinker from '../Blinker'

function GameTimer(props) {

//    if conditions have been met, render timer with blinking component, otherwise render just timer

    if (props.winStatus === true && props.gameActive === false) {
        return (
            <Blinker timer={props.timer}/>
            // <p className="timer-text">{props.timer}</p>
        )
    } else {
        return (
            <p className="timer-text">{props.timer}</p>
        )
    }
    
    // return (
    //     <p className="timer-text" style={{visibility: flashDisplay}}>{props.timer}</p>
    // )
    
}

export default GameTimer
