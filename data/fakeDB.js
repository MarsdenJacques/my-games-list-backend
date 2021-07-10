const games = ['zelda', 'mario', 'tetris']

const reviews = new Map()

const getGames = () => {
    return games
}

const searchGame = (id) => {
    return games[id] //change later
}
//0 rating is all ratings
const getReviews = (id, count, rating = 0) => {
    result = []
    return result
}

const searchUser = (id) => {
    return id
}

module.exports = {
    getGames, searchGame, getReviews
}