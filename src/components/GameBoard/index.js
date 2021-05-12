import React, { useState } from 'react'
import './style.css'

import GameTile from '../GameTile'

function GameBoard() {
    const [board, setBoard] = useState([1, 2, 3, 4, 5, 6, 7, 8, " "]);
    
    
    const boardWidth = 500;
    const boardHeight = 500;

    const margin = 6;

    const rows = 3;
    const cols = 3;

    const swap = (array, indexOne, indexTwo) => {
        let temp = array[indexOne];
        array[indexTwo] = array[indexOne];
        array[indexOne] = temp;
    }

    const findEmptyIndex = (array) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === " ") {
                return i;
            }
        }
    }

    const swapLogic = (e) => {
        // const emptyIndex = findEmptyIndex(board);

        // if (emptyIndex === 0) {

        // }

        console.log(e.target.dataset.number);
    }

    return (
        <div
            className="game-board"
            style={{width: `${JSON.stringify(boardWidth + margin*cols*2)}px`, height: `${JSON.stringify(boardHeight + margin*rows*2)}px`}}
        >
            {
                board.map((tile, i) => {
                    if (tile) {
                        return <GameTile 
                                width={boardWidth/cols}
                                height={boardHeight/rows}
                                display={board[i]}
                                tileClick={(e) => swapLogic(e)}
                                key={i}
                            />
                    } else {
                        // FILLER
                    }
                })
            }
        </div>
    )
}

export default GameBoard
