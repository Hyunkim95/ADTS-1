const log = require('./log')
const { displayCards, deck, shuffleCards } = require('./models/deck')

log(
  displayCards(shuffleCards(deck))
)