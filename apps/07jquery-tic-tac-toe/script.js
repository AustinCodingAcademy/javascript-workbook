'use strict';

$(document).on('ready', function() {
  // Put app logic in here

var playerTurn = 'X';
var stopGame = false;
var acceptableanswers = [0, 1, 2];
var turnCounter = 1;

var datacells =  $('[data-cell]');
datacells.click(function(){


//that SETs playerturn as .text() on $(this)
//by $9(this) .text(playerTurn).
$(this).text

}

function horizontalWin() {
return (row[0] === playerTurn && row[1] === playerTurn && row[2] === playerTurn) ||
       (row[3] === playerTurn && row[4] === playerTurn && row[5] === playerTurn) ||
       (row[6] === playerTurn && row[7] === playerTurn && row[8] === playerTurn);
}

function verticalWin() {
return (row[0] === playerTurn && row[3] === playerTurn && row[6] === playerTurn) ||
       (row[1] === playerTurn && row[4] === playerTurn && row[7] === playerTurn) ||
       (row[2] === playerTurn && row[5] === playerTurn && row[8] === playerTurn);
}

function diagonalWin() {
return  (row[0] === playerTurn && row[4] === playerTurn && row[8] === playerTurn) ||
        (row[6] === playerTurn && row[4] === playerTurn && row[2] === playerTurn);
      }

function checkForWin() {
if (horizontalWin() || verticalWin() || diagonalWin()) {
console.log('Player ' + playerTurn + ' won!');
stopGame = true;
return true;
}
}
function checkForTie() {
  if (turnCounter === 9) {
    console.log('It is a tie!');
    stopGame = true;
    return true;
  }
}



//using jQuery , set a lcick listener on all o f the [data-cell]s

});
