import React, { useEffect, useState } from 'react'
import './style.css'

import GameTile from '../GameTile'
// import Timer from 'easytimer.js'

import swap from '../../utils/swap'
import findEmptyIndex from '../../utils/findEmptyIndex'
import swapLogic from '../../utils/swapLogic'
import scrambleLogic from '../../utils/scrambleLogic'

function GameBoard() {
    const [board, setBoard] = useState([1, 2, 3, 4, 5, 6, 7, 8, ""]);
    // const [board, setBoard] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""]);
    const [winStatus, setWinStatus] = useState(false);
    const [gameActive, setGameActive] = useState(false);
    const [timer, setTimer] = useState(0);

    // Board Settings
    const boardWidth = 350;
    const boardHeight = 350;
    const margin = 6;
    const size = 3;
    // const size = 4;

    // Initialize Random Board
    useEffect(() => {
        handleRandom();
    }, []);

    const timerInterval = () => {
        const interval = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000);
    }

    useEffect(() => {
        let interval;

        if (gameActive) {
        interval = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
        }
        console.log(`TIMER: ${timer}`);
        return () => clearInterval(interval);
        
    }, [gameActive ,timer]);

    useEffect(() => {
        // Size 4 Logic
        const evalBoard = () => {
            let solvedBoard;

            if (size === 3) {
                solvedBoard = [1, 2, 3, 4, 5, 6, 7, 8, ""];
            } else if (size === 4) {
                solvedBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""];
            }

            let isBoardSolved = false;
            let incorrectCount = solvedBoard.length;
    
            for (let i = 0; i < solvedBoard.length; i++) {
                if (solvedBoard[i] === board[i]) {
                    incorrectCount--;
    
                    if (incorrectCount === 0) {
                        isBoardSolved = true;
                    }
                }
            }
    
            if (isBoardSolved === true) {
                setWinStatus(true);
                setGameActive(false);
            } else {
                setWinStatus(false);
            }
        }
        
        evalBoard();
    }, [board]);

    const handleMove = (e) => {
        if (winStatus === false) {
            setGameActive(true);
            const emptyIndex = findEmptyIndex(board);
            const selectedTileIndex = JSON.parse(e.target.dataset.index);
            let isMoveLegal = swapLogic(emptyIndex, selectedTileIndex, size);

            if (isMoveLegal === true) {
                const newBoard = swap(board, selectedTileIndex, emptyIndex);
                setBoard(newBoard)
            }
        }
    }

    const handleRandom = () => {
        let tempArray = board.slice();
        let numOfScrambles = 150;

        for (let i = 0; i < numOfScrambles; i++) {
            tempArray = scrambleLogic(tempArray, size);
        }

        setBoard(tempArray);
    }

    return (
        <div className="game-wrapper">
            <p className="timer-text">00:00.0</p>
            <p className="difficulty-text">Puzzle Difficulty: {size}</p>
            <div
                className="game-board"
                style={{width: `${JSON.stringify(boardWidth + margin*size*2)}px`, height: `${JSON.stringify(boardHeight + margin*size*2)}px`}}
            >
                {
                    board.map((tile, i) => {
                        if (typeof tile === "number") {
                            return <GameTile 
                                    width={boardWidth/size}
                                    height={boardHeight/size}
                                    display={board[i]}
                                    tileClick={(e) => handleMove(e)}
                                    key={i}
                                    index={i}
                                    style={{width: `${JSON.stringify(boardWidth/size)}px`, height: `${JSON.stringify(boardHeight/size)}px`, backgroundColor: "#4E4E4E"}}
                                />
                        } else if (tile === "") {
                            return <GameTile 
                                    width={boardWidth/size}
                                    height={boardHeight/size}
                                    tileClick={(e) => handleMove(e)}
                                    key={i}
                                    index={i}
                                    style={{width: `${JSON.stringify(boardWidth/size)}px`, height: `${JSON.stringify(boardHeight/size)}px`, cursor: `auto`}}
                                />
                        }
                    })
                }
                <button className="random-btn" onClick={handleRandom}>RANDOMIZE</button>
                <p className="win-text">Game Staus: <span>{winStatus ? "WINNING" : "NOT WINNING"}</span></p>
            </div>
        </div>
    )
}

export default GameBoard

// JWT web token authentication
// auth0