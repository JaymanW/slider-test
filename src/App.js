import React, { useState } from 'react'
import './App.css';

import Header from './components/Header'
import GameBoard from './components/GameBoard/'
import Leaderboard from './components/Leaderboard'

function App() {
  const [username, setUsername] = useState("JaymanW");
  const [isGame, setIsGame] = useState(true);

  const switchBoards = () => {
    if (isGame === true) {
      setIsGame(false);
    } else if (isGame === false) {
      setIsGame(true);
    }
  }
  
  return (
    <div className="App">
      <Header username={username}/>
      {isGame ? <GameBoard switchBoards={switchBoards}/> : <Leaderboard switchBoards={switchBoards} />}
    </div>
  );
}

export default App;
