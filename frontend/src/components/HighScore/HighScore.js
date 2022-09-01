import { useEffect, useState } from 'react'
import './HighScore.css'

const HighScore = (props) => {

  const [items, setItems] = useState(undefined)

  useEffect(() => {
    const loadScores = async () => {
      const response = await fetch('https://joaofaveri-jornada-fullstack-samsung-ocean-5gj764r5274w4-3001.githubpreview.dev/scores')
      const body = await response.json()
      setItems(body)
    }
    loadScores()
  }, [])

  const itemsLoading = items === undefined


  return (
    <div className="HighScore">
      <div>
        Você fez <b>{ props.score }</b> pontos!
      </div>

      <div>
        <h1>HighScore</h1>
        {itemsLoading ? (<div>Loading...</div>) : (
          <ul>
            {items.map((item, index) => {
              return (<li key={`score_${index}`}>{item.name} - {item.score}</li>)
            })}
          </ul>
        )}

      </div>

      <div>
        <h1>Registre sua pontuação!</h1>
        <form>
          <input type="text" placeholder="Digite o seu nome..." />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  )
}

export default HighScore