'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  // where am i?
  var playerTurn='X';

  jQuery('div[data-cell]').on('click',function(){

    $(this).text(playerTurn);
    checkForWin();
    playerTurn = (playerTurn === 'X'? 'O' : 'X');

  });


//returna boolean
function checkForWin(){
  // get the text for 0, 1, and 2
  if(
  $('div[data-cell=0]').text() === playerTurn &&
  $('div[data-cell=0]').text() === playerTurn &&
  $('div[data-cell=0]').text() === playerTurn
) {
    console.log ('win in first row');
    clearBoard();
    }


  };

  function clearBoard(){
    $('[data-cell]').text('');

  }
});
