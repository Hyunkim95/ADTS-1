const List = require('crocks/List')
const assign = require('crocks/helpers/assign')
const map = require('crocks/pointfree/map')
const liftA2 = require('crocks/helpers/liftA2')
const Pair = require('crocks/Pair')
const reduce = require('crocks/pointfree/reduce')
const chain = require('crocks/pointfree/chain')

const suits = [
  { suit: '♠', color: 'dark' },
  { suit: '♣', color: 'dark' },
  { suit: '♥', color: 'light' },
  { suit: '♦', color: 'light' },
]

const values = [
  { value: 1, face: 'A' },
  { value: 2, face: '2' },
  { value: 3, face: '3' },
  { value: 4, face: '4' },
  { value: 5, face: '5' },
  { value: 6, face: '6' },
  { value: 7, face: '7' },
  { value: 8, face: '8' },
  { value: 9, face: '9' },
  { value: 10, face: '10' },
  { value: 11, face: 'J' },
  { value: 12, face: 'Q' },
  { value: 13, face: 'K' },
]

// deck :: [Card]
const deck =
  liftA2(assign, suits, values)

// displayCard :: Card -> String  
const displayCard =
  ({ face, suit }) => face + suit

// displayCards :: [ Card ] -> [ String ]
const displayCards = 
  map(displayCard)

// ([], [ Card ])
// m a
const piles = 
Pair([], deck)

// a -> Pair a a 
// a -> m a
// pickCard :: [ Cards ] -> Pair [Cards] [Cards]  
const pickCard = cards => {
const idx = Math.floor(Math.random() * cards.length)

return Pair(
  [].concat(cards[idx]), 
  cards.slice(0, idx).concat(cards.slice(idx + 1))
)
}

// shuffleCards :: [ Cards ] -> [ Cards ]
const shuffleCards = cards => 
reduce(chain(pickCard), Pair([], cards), cards).fst()


module.exports = {
  deck,
  displayCards,
  shuffleCards
}