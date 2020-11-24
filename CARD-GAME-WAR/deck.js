 /* This is where code for the Deck appearing in the Game Goes. This has been specifically coded to be Usable in any Type of Card Game */
const SUITS = ["♠", "♣", "♥", "♦"]
/* SUITS and VALUES are  Global Static Constant Variable that can be Pasted  */
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
]

export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards
    /* This class here Handles the Cards as in any values Listed undercards whether there Cards in a Deck, Discard Piles of Cards etc */
  }

  get numberOfCards() {
    return this.cards.length
    /* This is here to simply return the Lenght of the cards */
  }

  pop() {
    return this.cards.shift()
  }

  push(card) {
    this.cards.push(card)
  }

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
    /* This takes the cards and shuffles them around, this sorting function is made form the ground up */
    /*  */
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit
    this.value = value
  }

  get color() {
    return this.suit === "♣" || this.suit === "♠" ? "black" : "red"
  }

  getHTML() {
    const cardDiv = document.createElement("div")
    cardDiv.innerText = this.suit
    cardDiv.classList.add("card", this.color)
    cardDiv.dataset.value = `${this.value} ${this.suit}`
    return cardDiv
    /* the getHTML funtion is used to get an HTML Element that looks just like the card */
    /* The Constant for this would be the cardDiv which serves as the players cards */
    /* inner text is basically going to load the playing card logos "♠", "♣", "♥", "♦" on to the card*/
    /* classList */
  }
}

function freshDeck() { 
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return new Card(suit, value)
    })
  })
}
/* The Purpose of the freshDeck() function is to create a brand new deck of 52 cards one for every card combinantion */
/* This is Done By Looping through all the suits and Values and combining them in 1 Array - this is done with the aid of the map function */
/* Flatmap take all the arrays we've made using map and condesense them into 1 array that array being new Card(suit, value)  */








