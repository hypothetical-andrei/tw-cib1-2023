import express from 'express'
// http://localhost:8080
const app = express()

app.get('/ping', (req, res) => {
  res.status(200).send('pong')
})

app.listen(8080)