import { useState } from 'react'
import Game from '../Game/Game'
import HighScore from '../HighScore/HighScore'
import './App.css'

const App = () => {
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)

  const onDead = () => {
    //console.log('App -> onDead');
    setGameOver(true)
  }

  const onScore = (newScore) => {
    setScore(newScore)
  }

  return (
    <div>
      <Game onDead={onDead} onScore={onScore} />
      {gameOver && <HighScore score={score} />}
    </div>
  )
}

export default App