
import { useState } from 'react'
import './App.css'

function App() {
  const [gameRunning, setGameRunning] = useState(true)
  function pausePlay(){
    setGameRunning(prevState => !prevState)
  
  }
  
  return (
  <div className={gameRunning?"":"pause"}>
    <button className = "video-game-button" onClick = {pausePlay}>{gameRunning?"Pause": "play"}</button>
  </div>
  )
}

export default App
