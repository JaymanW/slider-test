import React from 'react'
import './style.css'
import { useAuth0 } from '@auth0/auth0-react'

function Username() {
    const { user, isAuthenticated } = useAuth0();  
    
    return (
        isAuthenticated && (
            <div>
                <p className="username">{user.nickname}</p>
            </div>
            
        )  
    );
};

export default Username