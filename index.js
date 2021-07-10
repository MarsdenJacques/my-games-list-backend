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
  console.log(req.query)
  const gameCount = req.query.gameCount || -1 //-1 is all
  const reviewCount = req.query.reviewCount || -1 //-1 is all
  const reviewMin = req.query.reviewMin || 1
  const reviewMax = req.query.reviewMax || 5
  res.send(['zelda', 'mario', 'luigi', username, gameCount, reviewCount, reviewMin, reviewMax])
})

app.get('/library/:game', (req, res) => {
  const game = req.params.game
  if(game === 'zelda')
  {
    res.send('test: ' + fakeDB.search(0))
    return
  }
  res.send(game)
})

app.get('/library/:game/reviews', (req, res) => {
  const game = req.params.game
  const count = req.query.count || 0 //0 is all
  const rating = req.query.rating || 0 //0 is all ratings
  res.send([''+ game + 'reviews' + 1, '' + game + 'reviews' + 2, 'review count: ' + count + 'rating: ' + rating])
})

app.listen(port, () => {
  console.log(`Listening!`)
})