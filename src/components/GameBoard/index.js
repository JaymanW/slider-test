import React, { useEffect, useState } from 'react'
import './style.css'

import GameTile from '../GameTile'
// import Timer from 'easytimer.js'

import swap from '../../utils/swap'
import findEmptyIndex from '../../utils/findEmptyIndex'

function GameBoard() {
    // const [board, setBoard] = useState([1, 2, 3, 4, 5, 6, 7, 8, ""]);
    const [board, setBoard] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""]);
    const [winStatus, setWinStatus] = useState(false);
    const [gameActive, setGameActive] = useState(false);
    const [timer, setTimer] = useState(0);

    // Board Settings
    const boardWidth = 500;
    const boardHeight = 500;
    const margin = 6;
    // const size = 3;
    const size = 4;

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

    // Tile Movement Logic
    const swapLogic = (e) => {
        if (winStatus === false) {
            setGameActive(true);
            const emptyIndex = findEmptyIndex(board);
            const selectedTileIndex = JSON.parse(e.target.dataset.index);
            
            if (size === 3) {
                // Size 3 Logic
                if (emptyIndex === 0) {
                    if (selectedTileIndex === 1 || selectedTileIndex === 3) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 1) {
                    if (selectedTileIndex === 0 || selectedTileIndex === 2 || selectedTileIndex === 4) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 2) {
                    if (selectedTileIndex === 1 || selectedTileIndex === 5) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 3) {
                    if (selectedTileIndex === 0 || selectedTileIndex === 4 || selectedTileIndex === 6) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 4) {
                    if (selectedTileIndex === 1 || selectedTileIndex === 3 || selectedTileIndex === 5 || selectedTileIndex === 7) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 5) {
                    if (selectedTileIndex === 2 || selectedTileIndex === 4 || selectedTileIndex === 8) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 6) {
                    if (selectedTileIndex === 3 || selectedTileIndex === 7) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 7) {
                    if (selectedTileIndex === 4 || selectedTileIndex === 6 || selectedTileIndex === 8) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 8) {
                    if (selectedTileIndex === 7 || selectedTileIndex === 5) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                }
            } else if (size === 4) {
                // Size 4 Logic
                if (emptyIndex === 0) {
                    if (selectedTileIndex === 1 || selectedTileIndex === 4) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 1) {
                    if (selectedTileIndex === 0 || selectedTileIndex === 2 || selectedTileIndex === 5) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 2) {
                    if (selectedTileIndex === 1 || selectedTileIndex === 3 || selectedTileIndex === 6) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 3) {
                    if (selectedTileIndex === 2 || selectedTileIndex === 7) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 4) {
                    if (selectedTileIndex === 0 || selectedTileIndex === 5 || selectedTileIndex === 8) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 5) {
                    if (selectedTileIndex === 1 || selectedTileIndex === 4 || selectedTileIndex === 6 || selectedTileIndex === 9) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 6) {
                    if (selectedTileIndex === 2 || selectedTileIndex === 5 || selectedTileIndex === 7 || selectedTileIndex === 10) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 7) {
                    if (selectedTileIndex === 3 || selectedTileIndex === 6 || selectedTileIndex === 11) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 8) {
                    if (selectedTileIndex === 4 || selectedTileIndex === 9 || selectedTileIndex === 12) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 9) {
                    if (selectedTileIndex === 5 || selectedTileIndex === 8 || selectedTileIndex === 10 || selectedTileIndex === 13) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 10) {
                    if (selectedTileIndex === 6 || selectedTileIndex === 9 || selectedTileIndex === 11 || selectedTileIndex === 14) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 11) {
                    if (selectedTileIndex === 7 || selectedTileIndex === 10 || selectedTileIndex === 15) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 12) {
                    if (selectedTileIndex === 8 || selectedTileIndex === 13) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 13) {
                    if (selectedTileIndex === 9 || selectedTileIndex === 12 || selectedTileIndex === 14) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 14) {
                    if (selectedTileIndex === 10 || selectedTileIndex === 13 || selectedTileIndex === 15) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } else if (emptyIndex === 15) {
                    if (selectedTileIndex === 11 || selectedTileIndex === 14) {
                        const newBoard = swap(board, selectedTileIndex, emptyIndex);
                        setBoard(newBoard);
                    }
                } 
            }
        }
    }

    const scramble = (array) => {
        let tempArray = array.slice();
        
        const emptyIndex = findEmptyIndex(tempArray);
        let possibleMoves = [];
        
        // Scramble Logic
        if (size === 3) {
            // Size 3 Logic
            if (emptyIndex === 0) {
                possibleMoves = [1, 3];
            } else if (emptyIndex === 1) {
                possibleMoves = [0, 2, 4];
            } else if (emptyIndex === 2) {
                possibleMoves = [1, 5];
            } else if (emptyIndex === 3) {
                possibleMoves = [0, 4, 6];
            } else if (emptyIndex === 4) {
                possibleMoves = [1, 3, 5];
            } else if (emptyIndex === 5) {
                possibleMoves = [2, 4, 8];
            } else if (emptyIndex === 6) {
                possibleMoves = [3, 7];
            } else if (emptyIndex === 7) {
                possibleMoves = [4, 6, 8];
            } else if (emptyIndex === 8) {
                possibleMoves = [7, 5];
            }
        } else if (size === 4) {
            if (emptyIndex === 0) {
                possibleMoves = [1, 4];
            } else if (emptyIndex === 1) {
                possibleMoves = [0, 2, 5];
            } else if (emptyIndex === 2) {
                possibleMoves = [1, 3, 6];
            } else if (emptyIndex === 3) {
                possibleMoves = [2, 7];
            } else if (emptyIndex === 4) {
                possibleMoves = [0, 5, 8];
            } else if (emptyIndex === 5) {
                possibleMoves = [1, 4, 6, 9];
            } else if (emptyIndex === 6) {
                possibleMoves = [2, 5, 7, 10];
            } else if (emptyIndex === 7) {
                possibleMoves = [3, 6, 11];
            } else if (emptyIndex === 8) {
                possibleMoves = [4, 9, 12];
            } else if (emptyIndex === 9) {
                possibleMoves = [5, 8, 10, 13];
            } else if (emptyIndex === 10) {
                possibleMoves = [6, 9, 11, 14];
            } else if (emptyIndex === 11) {
                possibleMoves = [7, 10, 15];
            } else if (emptyIndex === 12) {
                possibleMoves = [8, 13];
            } else if (emptyIndex === 13) {
                possibleMoves = [9, 12, 14];
            } else if (emptyIndex === 14) {
                possibleMoves = [10, 13, 15];
            } else if (emptyIndex === 15) {
                possibleMoves = [11, 14];
            }
        }
            

        const randomSelection = Math.floor(Math.random() * possibleMoves.length);
        const randomMove = possibleMoves[randomSelection];

        tempArray = swap(tempArray, emptyIndex, randomMove);
        return tempArray;
    }

    const handleRandom = () => {
        let tempArray = board.slice();
        let numOfScrambles = 150;

        for (let i = 0; i < numOfScrambles; i++) {
            tempArray = scramble(tempArray);
        }

        setBoard(tempArray);
    }

    return (
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
                                tileClick={(e) => swapLogic(e)}
                                key={i}
                                index={i}
                                style={{width: `${JSON.stringify(boardWidth/size)}px`, height: `${JSON.stringify(boardHeight/size)}px`, border: `2px solid red`}}
                            />
                    } else if (tile === "") {
                        return <GameTile 
                                width={boardWidth/size}
                                height={boardHeight/size}
                                tileClick={(e) => swapLogic(e)}
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
    )
}

export default GameBoard