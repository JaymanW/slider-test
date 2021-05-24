import React from 'react'
import LoginBtn from '../LoginBtn'
import './style.css'
import Username from '../Username'
import LogoutBtn from '../LogoutBtn'
import { useAuth0 } from '@auth0/auth0-react'

function Header() {
    const { isAuthenticated } = useAuth0();
    
    return (
        <div className="header">
            <div className="logo">
                <img src="./logo.png" alt="logo" />
                <p>sliderpuzzle.io</p>
            </div>
            <div className="user-cnt">
                <Username className="username"/>
                {/* <img src='./avatar.png' alt="profile avatar"/> */}
                {isAuthenticated ? <img src='./avatar.png' alt="profile avatar"/> : null}
                {isAuthenticated ? <LogoutBtn className="sign-out-btn" /> : <LoginBtn className="sign-out-btn" />}
            </div>
        </div>
    )
}

export default Header
