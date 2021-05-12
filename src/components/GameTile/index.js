import React from 'react'
import './style.css'

function GameTile(props) {
    return (
        <div
            onClick={(e) => props.tileClick(e)}
            className="game-tile"
            data-index={props.index}
            // style={{width: `${JSON.stringify(props.width)}px`, height: `${JSON.stringify(props.height)}px`}}
            style={props.style}
        >
            {props.display}
        </div>
    )
}

export default GameTile