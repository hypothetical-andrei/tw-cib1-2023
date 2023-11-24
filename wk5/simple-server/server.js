import express from 'express'
import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'my.db'
})

const VoteRecord = sequelize.define('VoteRecord', {
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  votes: DataTypes.INTEGER
})

await sequelize.sync({ alter: true })

const votes = [{
  category: 'red',
  votes: 3
},{
  category: 'green',
  votes: 5
},{
  category: 'blue',
  votes: 10
}]

try {
  for (const vote of votes) {
    const record = new VoteRecord(vote)
    await record.save()
  }  
} catch (error) {
  console.log('records already exist')
}

// http://localhost:8080
const app = express()


app.use((req, res, next) => {
  console.log(req.url)
  next()
})

app.use(express.static('public'))
app.use(express.json())

app.get('/ping', (req, res) => {
  res.status(200).send('pong')
})

app.get('/votes', async (req, res) => {
  try {
    const votes = await VoteRecord.findAll()
    res.status(200).json(votes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'server error' })
  }
})

app.post('/votes', async  (req, res) => {
  try {
    const vote = new VoteRecord(req.body)
    await vote.save()
    res.status(201).json({ message: 'created' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'server error' })
  }
})

app.listen(8080)