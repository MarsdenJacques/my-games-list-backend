const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('My games list')
})

app.listen(port, () => {
  console.log(`Listening!`)
})