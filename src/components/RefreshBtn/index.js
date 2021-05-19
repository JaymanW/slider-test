import React from 'react'
import './style.css'

function RefreshBtn(props) {
    return (
        <div className="refresh-btn" onClick={() => props.refreshClick()}>
            <img src="./refresh.png" className="refresh-icon" alt="refresh puzzle"></img>
        </div>
    )
}

export default RefreshBtn