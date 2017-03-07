$(document).on('ready', function () {
  // Put app logic in here
  var playerTurn = 'X';
  
  $('[data-cell]').click(function () {
    $(this).text(playerTurn);
    checkForWin();
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    newGame();
    
  })

  function checkForWin() {

    //horiz

    if($('[data-cell="0"]').text() === playerTurn && $('[data-cell="1"]').text() === playerTurn && $('[data-cell="2"]').text() === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    if($('[data-cell="3"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    if($('[data-cell="6"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    //vert

    if($('[data-cell="0"]').text() === playerTurn && $('[data-cell="3"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    if($('[data-cell="1"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    if($('[data-cell="2"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    //diag

    if($('[data-cell="0"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    if($('[data-cell="2"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }

  }


// Add a button with an id="clear" that will not only clear the board, but reset the player to player 'X'


  function newGame(){
    $('#clear').click(function () {
    $('[data-cell]').empty();
    playerTurn = 'X';
    $('#announce-winner').empty();
  })

}


});

  





