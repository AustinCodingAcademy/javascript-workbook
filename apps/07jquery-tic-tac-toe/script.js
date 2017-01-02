'use strict';
var playerTurn = "X";
$(document).on('ready', function() {
    // Put app logic in here
    var $datacells = $('[data-cell]')
    $datacells.click(function() {
        $(this).text(playerTurn);
        checkForWin();
        if (playerTurn === 'X') {
            playerTurn = 'O';
        } else {
            playerTurn = 'X';
        }
        //Add a button with an id="clear" that will not only clear the board,
        //but reset the player to player 'X'


    });
$('#clear').click(function() {
$('[data-cell]').text("");
$('#announce-winner').text("");
playerTurn = 'X';
});
});


function horizontalWin() {
    // Your code here
    if ($('[data-cell = "0"]').text() === playerTurn &&  $('[data-cell = "1"]').text() === playerTurn &&  $('[data-cell = "2"]').text() === playerTurn ||  $('[data-cell = "3"]').text() === playerTurn &&  $('[data-cell = "4"]').text() === playerTurn &&  $('[data-cell = "5"]').text() === playerTurn ||  $('[data-cell = "6"]').text() === playerTurn && $('[data-cell = "7"]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn) {
      return true;
    }
    return false;
}

function verticalWin() {
    // Your code here
if ($('[data-cell = "0"]').text() === playerTurn &&  $('[data-cell = "3"]').text() === playerTurn &&  $('[data-cell = "6"]').text() === playerTurn ||  $('[data-cell = "1"]').text() === playerTurn &&  $('[data-cell = "4"]').text() === playerTurn &&  $('[data-cell = "7"]').text() === playerTurn ||  $('[data-cell = "2"]').text() === playerTurn && $('[data-cell = "5"]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn) {
  return true;
}
     return false;
}

function diagonalWin() {
    // Your code here
  if($('[data-cell = "0"]').text() === playerTurn &&  $('[data-cell = "4"]').text() === playerTurn &&  $('[data-cell = "8"]').text() === playerTurn ||  $('[data-cell = "2"]').text() === playerTurn &&  $('[data-cell = "4"]').text() === playerTurn &&  $('[data-cell = "6"]').text() === playerTurn) {
    return true;
  }

    return false;

}
function checkForWin() {
    // Your code here
    if (horizontalWin() || verticalWin() || diagonalWin()) {
        $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
}
