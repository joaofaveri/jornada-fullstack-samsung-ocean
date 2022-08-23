import './game.css'
import clouds from '../../assets/clouds.png'
import pipeline from '../../assets/pipeline.png'
import character from '../../assets/mario.gif'
import ground from '../../assets/ground.png'

const Game = () => {
  document.onkeydown = () => {
    console.log('On Key Down')
  }
  return (
    <div className="game">
      <img className="clouds" src={clouds} alt="Clouds" />
      <img className="pipeline" src={pipeline} alt="Pipeline" />
      <img className="character" src={character} alt="Character" />
      <div className="ground" style={{ backgroundImage:`url(${ground})`,backgroundRepeat:"repeat-x",backgroundSize:"contain" }}></div>
    </div>
  )
}

export default Game