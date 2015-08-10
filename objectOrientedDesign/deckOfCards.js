// Using Object-Oriented Design, design the data structures for a generic deck of cards.
// Explain how you would subclass the data structures to implement blackjack.


// A deck of cards sounds like it can have the following things:
  // 52 individual cards (I'm going to first assume there are no Jokers)
    // Each individual card has a value assigned to it.
      // Aces have two values: 1 and 11
      // Face cards have one value: 10
  // Hands
    // For Blackjack, the deck of cards should be able to deal hands
  // Shuffle mechanism
    // Somehow, random cards should be dealt to hands.


// Let's instantiate a Deck class, which contains cards and the ability to do things like shuffle, deal, etc.
var Deck = function() {
  // Each Deck contains many cards
}

Deck.prototype.shuffle = function() {
  // Perform a Fisher-Yates Shuffle on the entire array of cards
}

Deck.prototype.newDeck = function() {
  // Create a new deck of cards
}

Deck.prototype.pop = function() {
  // Take a card from the deck's storage and return it. Remove it from the deck as a result of this.
}

// Create a Hand class
var Hand = function() {
  // Storage for cards
  this.cards = [];
  // Number of cards in hand
  this.handSize = 0;
  // Each Hand contains a value
  this.value;
  // Check for Blackjack as a boolean
  this.blackjack;
  // Can this hand split?
  this.canSplit;
  // Can this hand double?
  this.canDouble;
  // Has this hand busted?
  this.hasBust = false;
}

Hand.prototype.getValue = function() {
   // If handSize === 2 && value === 21 && one of the cards === 'Ace', THEN return true.
   // Otherwise, return false.
 }

Hand.prototype.hit = function() {
  // If !this.bust
    // Grab a random card from the deck
      // Push that card to storage
      // Check value
}

Hand.prototype.checkValue = function() {
// Calculate the value of each card in this.cards
  // If > 21, this.bust = true
  // Else, this.bust = false;
}

Hand.prototype.deal = function() {
// Hit twice
  // Check value
  // Check Blackjack
}

// Create a Card class

var Card = function() {
  // Cards have an assigned number
  this.numberOrFace;

  // It's also assigned a numerical value. If it's an ace, it should probably be stored as an array.
  this.value;

  // Boolean to tell us if this card is an ace
  this.isAce = false;
}

Card.prototype.getValue = function() {
  // If parseInt(this.numberOrFace) !== NaN, this.value = parseInt(this.numberOrFace), this.isAce = false;
    // Otherwise, check to see if this.numberOrFace === 'Ace'
      // If it is, this.isAce = true;
      // this.value = [1, 11];
    // Else, this.value = 10; this.isAce = false;
}

