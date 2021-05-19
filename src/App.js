import React, { useState } from 'react'
import './App.css';

import Header from './components/Header'
import GameBoard from './components/GameBoard/'

function App() {
  const [username, setUsername] = useState("JaymanW");
  
  return (
    <div className="App">
      <Header username={username}/>
      <GameBoard />
    </div>
  );
}

export default App;
