let firstCard = 11
let secondCard = 2
let sum = firstCard + secondCard;
let cards = [ firstCard, secondCard]
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el");

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;

  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
     message = "You've got Blackjack!";
  } else {
    message = "You're out of the game!";
  }
  messageEl.textContent = message;
}

function newCard() {
    let card = 1
    sum += card
    cards.push(card)
    renderGame()
}
