import './HighScore.css'

const HighScore = (props) => {

  const setInitFetch = {
    method: 'GET',
    mode: 'no-cors'
  };

  fetch('https://joaofaveri-jornada-fullstack-samsung-ocean-5gj764r5274w4-3001.githubpreview.dev/scores', setInitFetch).then(console.log())

  return (
    <div className="HighScore">
      <div>
        Você fez <b>{ props.score }</b> pontos!
      </div>

      <div>
        <h1>HighScore</h1>

        <div>Paulo - 90 pontos</div>
        <div>João - 50 pontos</div>
        <div>Ana - 32 pontos</div>
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