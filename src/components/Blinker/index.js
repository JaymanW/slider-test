import React, { useState, useEffect } from 'react'
import './style.css'

function Blinker(props) {
    const [visibility, setVisibility] = useState("visible")
    
    useEffect(() => {
        let visibilityInterval;

        visibilityInterval = setInterval(() => {
            let newVisibility = visibility === "visible" ? "hidden" : "visible";
            setVisibility(newVisibility);
        }, 1000);
        
        return () => clearInterval(visibilityInterval);
    }, [visibility]);
    
    return (
        <p className="timer-text" style={{visibility: visibility}}>{props.timer}</p>
    )
}

export default Blinker
