import { useEffect, useRef, useState } from 'react'
import clouds from '../../assets/clouds.png'
import character from '../../assets/mario.gif'
import pipeline from '../../assets/pipeline.png'
import ground from '../../assets/ground.png'
import gameOver from '../../assets/game-over.png'
import './game.css'

const Game = (props) => {
  // Define o estado para jump
  const [isJump, setIsJump] = useState(false)
  const [isDead, setIsDead] = useState(false)
  const [score, setScore] = useState(0)

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
  useEffect(
    () => {
      const interval = setInterval(() => {
        const isInPipeline = isCharacterInPipeline()
        if (!isInPipeline || isDead) {
          return
        }
        setIsDead(true)
        props.onDead()
      }, 100)

      return () => clearInterval(interval)
    }, [isDead, props]
  )

  // Save score
  useEffect(
      () => {
        const interval = setInterval(() => {
          if (isDead) {
            return
          }

          setScore(score + 1)
          props.onScore(score + 1)
          // console.log({ score });
        }, 100)
      
      return () => clearInterval(interval)
      }, [isDead, score, props]
    )

  document.onkeydown = () => {
    setIsJump(true)
    setTimeout(() => {
      setIsJump(false)
    }, 600)
  }

  const characterClassName = isJump ? 'character jump' : 'character'

  const characterImage = isDead ? gameOver : character

  const stopAnimation = isDead ? 'stop-animation' : ''

  return (
    <div className="game">
      <div>Pontos: { score }</div>
      <img className="clouds" src={clouds} alt="Clouds" />
      <img ref={pipelineRef} className={"pipeline " + stopAnimation} src={pipeline} alt="Pipeline" />
      <img ref={characterRef} className={characterClassName} src={characterImage} alt="Character" />
      <div className={"ground ground-move-first " + stopAnimation} name="ground-first" style={{backgroundImage:`url(${ground})`, backgroundRepeat:'repeat-x', backgroundSize:'contain'}}></div>
      <div className={"ground ground-move-last " + stopAnimation} name="ground-last" style={{backgroundImage:`url(${ground})`, backgroundRepeat:'repeat-x', backgroundSize:'contain'}}></div>
    </div>
  )
}

export default Game
