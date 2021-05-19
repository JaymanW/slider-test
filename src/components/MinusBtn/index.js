import React from 'react'
import './style.css'

function SizeBtn(props) { 
    return (
        <div className={props.activeStyle} onClick={() => props.btnClick()}>
            <p alt="subtract icon" className="size-icon">-</p>
        </div>
    )
}

export default SizeBtn