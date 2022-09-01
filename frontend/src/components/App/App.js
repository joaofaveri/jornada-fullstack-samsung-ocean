import { useState } from 'react'
import Game from '../Game/Game'
import HighScore from '../HighScore/HighScore'
import './App.css'

const App = () => {
  const [gameOver, setGameOver] = useState(false)

  const onDead = () => {
    //console.log('App -> onDead');
    setGameOver(true)
  }

  return (
    <div className={App}>
      <Game onDead={onDead} />
      {gameOver && <HighScore />}
    </div>
  )
}

export default App