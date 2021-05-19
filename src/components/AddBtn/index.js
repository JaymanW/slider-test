import React from 'react'
import './style.css'

function AddBtn(props) { 
    return (
        <div className={props.activeStyle} onClick={() => props.btnClick()}>
            <p alt="add icon" className="add-icon">+</p>
        </div>
    )
}

export default AddBtn