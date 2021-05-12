import React, { useState } from 'react'
import './style.css'

import GameTile from '../GameTile'

function GameBoard() {
    const [board, setBoard] = useState([1, 2, 3, 4, 5, 6, 7, 8, ""]);

    const boardWidth = 500;
    const boardHeight = 500;

    const margin = 6;

    const rows = 3;
    const cols = 3;

    const swap = (array, indexOne, indexTwo) => {
        let newArray = array.slice();

        let temp = newArray[indexOne];
        newArray[indexOne] = newArray[indexTwo];
        newArray[indexTwo] = temp;
        setBoard(newArray);
    }

    const findEmptyIndex = (array) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === "") {
                return i;
            }
        }
    }

    const swapLogic = (e) => {
        const emptyIndex = findEmptyIndex(board);
        const selectedTileIndex = JSON.parse(e.target.dataset.index);

        console.log(`EMPTY INDEX: ${emptyIndex}`);
        console.log(`SELECTED TILE INDEX: ${selectedTileIndex}`);
        
        if (emptyIndex === 0) {
            if (selectedTileIndex === 1 || selectedTileIndex === 3) {
                swap(board, selectedTileIndex, emptyIndex);
            }
        } else if (emptyIndex === 1) {

        } else if (emptyIndex === 2) {
            
        } else if (emptyIndex === 3) {
            
        } else if (emptyIndex === 4) {
            
        } else if (emptyIndex === 5) {
            
        } else if (emptyIndex === 6) {
            
        } else if (emptyIndex === 7) {
            
        } 
        
        else if (emptyIndex === 8) {
            if (selectedTileIndex === 7 || selectedTileIndex === 5) {
                swap(board, selectedTileIndex, emptyIndex);
            }
        }
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
                                index={i}
                                style={{width: `${JSON.stringify(boardWidth/cols)}px`, height: `${JSON.stringify(boardHeight/rows)}px`, border: `2px solid red`}}
                            />
                    } else if (tile === "") {
                        return <GameTile 
                                width={boardWidth/cols}
                                height={boardHeight/rows}
                                tileClick={(e) => swapLogic(e)}
                                key={i}
                                index={i}
                                style={{width: `${JSON.stringify(boardWidth/cols)}px`, height: `${JSON.stringify(boardHeight/rows)}px`}}
                            />
                    }
                })
            }
        </div>
    )
}

export default GameBoard