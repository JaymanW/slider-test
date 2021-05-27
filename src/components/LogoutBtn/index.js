import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"

function LogoutBtn() {
    const { logout } = useAuth0();
    
    return (
        <button onClick={() => logout({ returnTo: "https://sliderpuzzle.io/"})} >Log Out</button>
    )
}

export default LogoutBtn
