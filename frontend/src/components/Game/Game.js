import { useRef, useState } from 'react'
import clouds from '../../assets/clouds.png'
import character from '../../assets/mario.gif'
import pipeline from '../../assets/pipeline.png'
import ground from '../../assets/ground.png'
import './game.css'

const Game = () => {
  // Define o estado para jump
  const [isJump, setIsJump] = useState(false)

  // Criação das referência para o cano e para o personagem
  const characterRef = useRef()
  const pipelineRef = useRef()

  const isCharacterInPipeline = () => {
    // Acessar as referências
    const characterCheck = characterRef.current
    const pipelineCheck = pipelineRef.current

    // Não encontrando as referências, sair da função
    if (!characterCheck || !pipelineCheck) {
      return
    }

    // Determinar se o personagem está na mesma posição do cano
    return (
      pipelineCheck.offsetLeft > characterCheck.offsetLeft &&
      pipelineCheck.offsetLeft < characterCheck.offsetLeft + characterCheck.offsetWidth &&
      characterCheck.offsetTop + characterCheck.offsetHeight > pipelineCheck.offsetTop
    )
  }

  // Implementação temporária
  setInterval(() => {
    console.log(`Is character in pipeline? ${isCharacterInPipeline()}`);
  }, 100);
  

  document.onkeydown = () => {
    setIsJump(true)
    setTimeout(() => {
      setIsJump(false)
    }, 600)
  }

  let characterClassName = 'character'
  if (isJump) {
    characterClassName = 'character jump'
  }
  return (
    <div className="game">
      <img className="clouds" src={clouds} alt="Clouds" />
      <img ref={pipelineRef} className="pipeline" src={pipeline} alt="Pipeline" />
      <img ref={characterRef} className={characterClassName} src={character} alt="Character" />
      <div className="ground ground-move-first" name="ground-first" style={{backgroundImage:`url(${ground})`, backgroundRepeat:'repeat-x', backgroundSize:'contain'}}></div>
      <div className="ground ground-move-last" name="ground-last" style={{backgroundImage:`url(${ground})`, backgroundRepeat:'repeat-x', backgroundSize:'contain'}}></div>
    </div>
  )
}

export default Game
