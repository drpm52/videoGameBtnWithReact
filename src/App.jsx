
import { useState } from 'react'
import './App.css'

function App() {
  const [gameRunning, setGameRunning] = useState(true)
  function pausePlay(){
    setGameRunning(prevState => !prevState)
  
  }
  function btnText(gameRunning){
    const btnTxt= gameRunning? "Pause": "Play"
    return btnTxt

  }
  return (
  <div className={gameRunning?"":"pause"}>
    <button className = "video-game-button" onClick = {pausePlay}>{btnText(gameRunning)}</button>
  </div>
  )
}

export default App
