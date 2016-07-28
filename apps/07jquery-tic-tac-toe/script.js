'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  var playerTurn = 'X';

  $('#reset').click(function() {
    var cellArr = $('div[data-cell]');

    $.each(cellArr, function(i){
      var cellVal = $('div[data-cell="' + i + '"]').text('');
    });

    $('#announce-winner').text('');
  });



  $('[data-cell]').click(function(){
    var clickedCell = $(this).text();

    if (clickedCell === '' && !checkForWin()){
      $(this).text(playerTurn);
      if(checkForWin()){
        $('#announce-winner').text("Player " + playerTurn + " Wins!");
      }
      else {
        updateTurn();
      }
    }
  })

  function updateTurn(){
    playerTurn = (playerTurn == 'X') ? 'O':'X';
    $('#announce-winner').text("Player " + playerTurn + "'s Turn.");
  }

  function checkForWin() {
    return (horizontalWin()  || verticalWin() || diagonalWin());
  }

  function horizontalWin() {
    return ($('[data-cell="0"]').text() === playerTurn && $('[data-cell="1"]').text() === playerTurn && $('[data-cell="2"]').text() === playerTurn ||
        $('[data-cell="3"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn ||
        $('[data-cell="6"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn);
  }

  function verticalWin() {
    return ($('[data-cell="0"]').text() === playerTurn && $('[data-cell="3"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn ||
        $('[data-cell="1"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn ||
        $('[data-cell="2"]').text() === playerTurn && $('[data-cell="5"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn);
  }

  function diagonalWin() {
    return ($('[data-cell="0"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="8"]').text() === playerTurn ||
        $('[data-cell="2"]').text() === playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn);
  }

});
