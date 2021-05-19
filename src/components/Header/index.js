import React from 'react'
import './style.css'

function Header(props) {
    return (
        <div className="header">
            <div className="logo">
                <img src="./logo.png" alt="logo" />
                <p>sliderpuzzle.io</p>
            </div>
            <div className="user-cnt">
                <p className="username">{props.username}</p>
                <img src='./avatar.png' alt="profile avatar"/>
                <button className="sign-out-btn">sign out</button>
            </div>
        </div>
    )
}

export default Header
