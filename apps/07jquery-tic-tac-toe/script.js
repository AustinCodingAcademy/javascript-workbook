'use strict';

$(document).on('ready', function () {
  // Put app logic in here
  var playerTurn = 'X';
  var $dataCell = $('[data-cell]');
  var counter = 0;
  $('[data-cell]').click(function () {
    //checks to make sure the spot isnt taken and then marks the spot
    if ($(this).text() === "") {
      $('#announce-winner').empty();
      $(this).text(playerTurn);
      counter++;
      checkForWin();
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    } else {
      //occurs when the spot is taken
      $('#announce-winner').text('That spot appears to be taken.');
    }
  })

  function checkForWin() {
    var $cell0 = $('[data-cell="0"]').text();
    var $cell1 = $('[data-cell="1"]').text();
    var $cell2 = $('[data-cell="2"]').text();
    var $cell3 = $('[data-cell="3"]').text();
    var $cell4 = $('[data-cell="4"]').text();
    var $cell5 = $('[data-cell="5"]').text();
    var $cell6 = $('[data-cell="6"]').text();
    var $cell7 = $('[data-cell="7"]').text();
    var $cell8 = $('[data-cell="8"]').text();
    //horizontal win
    if ($cell0 === playerTurn && $cell1 === playerTurn && $cell2 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    if ($cell3 === playerTurn && $cell4 === playerTurn && $cell5 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    if ($cell6 === playerTurn && $cell7 === playerTurn && $cell8 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    //vertical win
    if ($cell0 === playerTurn && $cell3 === playerTurn && $cell6 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    if ($cell1 === playerTurn && $cell4 === playerTurn && $cell7 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    if ($cell2 === playerTurn && $cell5 === playerTurn && $cell8 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    //diagonal win
    if ($cell0 === playerTurn && $cell4 === playerTurn && $cell8 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    if ($cell2 === playerTurn && $cell4 === playerTurn && $cell6 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    if(counter === 9){
      $('#announce-winner').text('It is a tie!');
    }

  }


  $('#clear').click(function () {
    $('[data-cell]').text('');
    playerTurn = 'X';
    $('#announce-winner').empty();
  })
});
