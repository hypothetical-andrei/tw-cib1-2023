import express from 'express'
// http://localhost:8080
const app = express()

app.locals.votes = [{
  category: 'red',
  votes: 3
},{
  category: 'green',
  votes: 5
},{
  category: 'blue',
  votes: 10
}]

app.use((req, res, next) => {
  console.log(req.url)
  next()
})

app.use(express.static('public'))
app.use(express.json())

app.get('/ping', (req, res) => {
  res.status(200).send('pong')
})

app.get('/votes', (req, res) => {
  res.status(200).json(app.locals.votes)
})

app.post('/votes', (req, res) => {
  const item = req.body
  app.locals.votes.push(item)
  res.status(201).send('created')
})

app.listen(8080)