'use strict';

var playerTurn = 'X';

$(document).on('ready', function(){
  // Put app logic in here
  $('[data-cell]').click(function(){
    $(this).text(playerTurn);
    
    if (checkForWin()){
    $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  });

  $('#clear').click(function(){
    $('[data-cell]').text('');
  });

  function checkForWin(){

    // horizontal wins 

    if ($("[data-cell='0']").text() === playerTurn &&
        $("[data-cell='1']").text() === playerTurn &&
        $("[data-cell='2']").text() === playerTurn) {
          return true;
        }

    if ($("[data-cell='3']").text() === playerTurn &&
        $("[data-cell='4']").text() === playerTurn &&
        $("[data-cell='5']").text() === playerTurn) {
          return true;
        }

    if ($("[data-cell='6']").text() === playerTurn &&
        $("[data-cell='7']").text() === playerTurn &&
        $("[data-cell='8']").text() === playerTurn) {
          return true;
        }

    // vertical wins

    if ($("[data-cell='0']").text() === playerTurn &&
        $("[data-cell='3']").text() === playerTurn &&
        $("[data-cell='6']").text() === playerTurn) {
          return true;
        }

    if ($("[data-cell='1']").text() === playerTurn &&
        $("[data-cell='4']").text() === playerTurn &&
        $("[data-cell='7']").text() === playerTurn) {
          return true;
        }

    if ($("[data-cell='2']").text() === playerTurn &&
        $("[data-cell='5']").text() === playerTurn &&
        $("[data-cell='8']").text() === playerTurn) {
          return true;
        }

    // diagonal wins

    if ($("[data-cell='0']").text() === playerTurn &&
        $("[data-cell='4']").text() === playerTurn &&
        $("[data-cell='8']").text() === playerTurn) {
          return true;
        }

    if ($("[data-cell='2']").text() === playerTurn &&
        $("[data-cell='4']").text() === playerTurn &&
        $("[data-cell='6']").text() === playerTurn) {
          return true;
        }
  }

  
});
