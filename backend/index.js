import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

// Criar uma nova rota GET
app.get('/oi', (req, res) => {
  res.send('Olá, Mundo!')
})

// Lista com as pontuações
const highScores = [
  {
    id: 1,
    name: 'Fulano',
    score: 90
  },
  {
    id: 2,
    name: 'Ciclano',
    score: 80
  },
  {
    id: 3,
    name: 'Beltrano',
    score: 70
  }
]

// Endpoints scores:
// Read All - GET - /scores
app.get('/scores', (req, res) => {
  res.json(highScores)
})

// Create - POST - /scores
app.post('/scores', (req, res) => {
  const score = req.body
  // Inserir o score na Lista
  highScores.push({
    id: highScores.length + 1,
    ...score
  })
  res.json(highScores)
})

app.listen(3000, () => console.log(`Server is running in port 3000`))
