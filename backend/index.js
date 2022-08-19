import express from 'express'
import { MongoClient } from 'mongodb'

const url = 'mongodb+srv://admin:Gy5zDAq7cqiKTVCz@jornada-fullstack-agost.oterozr.mongodb.net/'
const databaseName = 'jornada-fullstack-agosto-22'

async function main() {
  // Realizar a conexão com o MongoClient
  // MongoClient -> MongoDatabase -> MongoCollection
  // Conexões podem levar um tempo para concluir
  // Utilizar Promises

  console.log('Connecting to database...')

  const client = await MongoClient.connect(url)
  const database = client.db(databaseName)
  const collectionScores = database.collection('scores')

  console.log('Database connected!')

  const app = express()

  app.use(express.json())

  app.get('/', (req, res) => {
    res.send('Hello, world!')
  })

  // Criar uma nova rota GET
  app.get('/oi', (req, res) => {
    res.send('Olá, Mundo!')
  })

  // Endpoints scores:
  // Read All - GET - /scores
  app.get('/scores', async (req, res) => {
    const itens = await collectionScores
      .find()
      .sort({ score: -1 })
      .limit(10)
      .toArray()
    res.json(itens)
  })

  // Create - POST - /scores
  app.post('/scores', async (req, res) => {
    const score = req.body
    // Inserir o score na Lista
    await collectionScores.insertOne(score)
    res.json(score)
  })

  app.listen(process.env.PORT || 3000, () => console.log(`Server is running in port 3000`))
}

// Executar a função main()
main()
