// red:     empire
// orange:  coffee
// yellow:  hourglass
// green:   tree
// blue:    rebel
// purple:  bomb

var Card = require('./../js/memory.js').Card;

function getRandomCards(numPairs) {
  var cards = [];
  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  var symbols = ['empire', 'coffee', 'hourglass', 'tree', 'rebel', 'bomb'];
  for(var i=0; i<numPairs; i++) {
    cards.push(new Card(symbols[i], colors[i]));
    cards.push(new Card(symbols[i], colors[i]));
  }
  // TODO: Randomize them
  return cards;
}


function guess(symbol) {
  console.log(symbol);
}

$(document).ready(function() {
  var guesses = [];
  var cards = getRandomCards(6);
  for(var i=0; i<cards.length; i++) {
    var card = cards[i];
    $('#game-board').append(`
      <div class="card game-card ${card.cardColor}" meta-symbol="${card.symbol}">
        <div class="card-content">
          <i class="fa fa-${card.symbol}"></i>
        </div>
      </div>
    `);
  }
});

$('body').on('click', '.game-card', function(event) {
  event.preventDefault();
  console.log(event.target.closest('.game-card').getAttribute('meta-symbol'));
})
