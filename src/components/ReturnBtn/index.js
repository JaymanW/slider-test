import React from 'react'
import './style.css'

function ReturnBtn(props) {
    return (
        <div className="return-btn" onClick={() => props.switchBoards()}>
            <img src="./return.png" className="return-icon" alt="return to puzzle" />
        </div>
    )
}

export default ReturnBtn
