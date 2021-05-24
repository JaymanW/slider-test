import React, { useEffect, useState } from 'react'
import './style.css'

// COMPONENTS
import GameTile from '../GameTile'
import RefreshBtn from '../RefreshBtn'
import MinusBtn from '../MinusBtn'
import AddBtn from '../AddBtn'
import LeaderboardBtn from '../LeaderboardBtn'

// UTIL FUNCTIONS
import swap from '../../utils/swap'
import findEmptyIndex from '../../utils/findEmptyIndex'
import swapLogic from '../../utils/swapLogic'
import scrambleLogic from '../../utils/scrambleLogic'

function GameBoard(props) {
    const [board, setBoard] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""]);
    const [winStatus, setWinStatus] = useState(false);
    const [gameActive, setGameActive] = useState(false);
    const [timer, setTimer] = useState(0.0);

    const [windowWidth, setWindowWidth] = useState(null);

    const [boardWidth, setBoardWidth] = useState(300);
    const [boardHeight, setBoardHeight] = useState(300);

    const [size, setSize] = useState(4);

    const [sizeSwap, setSizeSwap] = useState(0);

    // Board Settings
    const margin = 6;

    // Initialize Random Board & Board Size
    useEffect(() => {
        handleSize();
        updateWindowWidth();
        window.addEventListener("resize", updateWindowWidth);
        return () => window.removeEventListener("resize", updateWindowWidth);
    }, []);

    useEffect(() => {
    }, [board])

    useEffect(() => {
        if (windowWidth < 400) {
            setBoardWidth(250);
            setBoardHeight(250);
        } else if (windowWidth <= 768) {
            setBoardWidth(300);
            setBoardHeight(300);
        } else if (windowWidth > 768) {
            setBoardWidth(350);
            setBoardHeight(350);
        }
    }, [windowWidth])

    useEffect(() => {
        handleSize();
    }, [size])

    useEffect(() => {
        handleRandom();
    }, [sizeSwap])

    useEffect(() => {
        let interval;

        if (gameActive) {
        interval = setInterval(() => {
            let newTime = (timer + 0.1);
            newTime = Math.round(newTime * 10) / 10;
            setTimer(newTime);
        }, 100);
        }
        return () => clearInterval(interval);
    }, [gameActive, timer]);

    useEffect(() => {
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
                // POST TO DATABASE IF NEW RECORD FUNCTION
            } else {
                setWinStatus(false);
            }
        }
        
        evalBoard();
    }, [board]);

    const switchBoards = () => {
        if (gameActive === false) {
            props.switchBoards();
        }
    }

    const handleSize = () => {
        if (size === 3) {
            setBoard([1, 2, 3, 4, 5, 6, 7, 8, ""])
        } else if (size === 4) {
            setBoard([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""]);
        }
        setSizeSwap(sizeSwap => sizeSwap + 1)
    }

    const updateWindowWidth = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    }

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
        // RESETS (PROBABLY MAKE THESE INTO SEPARATE FUNCTIONS LATER)
        setTimer(0);
        setGameActive(false);

        let tempArray = board.slice();
        let numOfScrambles = 150;

        for (let i = 0; i < numOfScrambles; i++) {
            tempArray = scrambleLogic(tempArray, size);
        }
        setBoard(tempArray);
    }

    const subtractSize = () => {
        if (size === 4 && gameActive === false) {
            setSize(3);
        }
    }

    const addSize = () => {
        if (size === 3 && gameActive === false) {
            setSize(4);
        }
    }

    return (
        <div className="game-wrapper">
            <p className="timer-text">{timer}</p>
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
                <div className="btn-cnt">
                    {/* <MinusBtn btnClick={subtractSize} className="board-btn" activeStyle={size === 4 ? "size-btn" : "grayed-out"}/> */}
                    <MinusBtn btnClick={subtractSize} className="board-btn" activeStyle={gameActive ? "grayed-out" : (size === 4) ? "size-btn" : "grayed-out"}/>
                    <RefreshBtn className="board-btn" refreshClick={handleRandom} style={{marginLeft: "1rem"}}/>
                    <LeaderboardBtn className="board-btn" switchBoards={switchBoards} activeStyle={gameActive ? "grayed-out" : "leaderboard-btn"}/>
                    <AddBtn className="board-btn" btnClick={addSize} activeStyle={gameActive ? "grayed-out" : (size === 3) ? "size-btn" : "grayed-out"}/>
                </div>
                
                <p className="win-text">Game Staus: <span>{winStatus ? "WINNING" : "NOT WINNING"}</span></p>
            </div>
        </div>
    )
}

export default GameBoard

// JWT web token authentication
// auth0