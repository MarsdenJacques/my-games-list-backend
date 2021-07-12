const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const fakeDB = require('./data/fakeDB.js')
const app = express()
const port = 3005

app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.json())

app.get('/', (req, res) => {
  res.send('My games list')
})

app.get('/library', (req, res) => {
  res.send(fakeDB.getGames())
})  

app.get('/:username', (req, res) => {
  const username = req.params.username
  res.send(['zelda', 'mario', 'luigi', username])
})

app.get('/library/:game', (req, res) => {
  const game = req.params.game
  //should send back top 5 reviews or so
  if(game === 'zelda')
  {
    res.json({reviews: [''+ game + 'reviews' + 1, '' + game + 'reviews' + 2], averageRating: 3.35})
    return
  }
  res.send(game)
})

app.get('/library/:game/reviews', (req, res) => {
  const game = req.params.game
  res.json({reviews: [''+ game + 'reviews' + 1, '' + game + 'reviews' + 2], averageRating: 3.35})
})

app.listen(port, () => {
  console.log(`Listening!`)
})

//need endpoint for putting reviews, patching reviews (likes, privacy(?), and edits), creating users, deleting users, deleting reviews, editing user settings