import './game.css'
import clouds from '../../assets/clouds.png'

const Game = () => {
  return (
    <div className="game">
      <img className="clouds" src={clouds} alt="Clouds" />
    </div>
  )
}

export default Game