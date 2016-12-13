'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  var playerTurn = 'X'
  var $cell1 = $('[data-cell=0]');
  var $cell2 = $('[data-cell=1]');
  var $cell3 = $('[data-cell=2]');
  var $cell4 = $('[data-cell=3]');
  var $cell5 = $('[data-cell=4]');
  var $cell6 = $('[data-cell=5]');
  var $cell7 = $('[data-cell=6]');
  var $cell8 = $('[data-cell=7]');
  var $cell9 = $('[data-cell=8]');
  var $annoucewinner = $('#annouce-winner')
  $('[data-cell]').on('click', function(){
    $(this).text(playerTurn)
    if(playerTurn === 'O'){
      playerTurn = 'X';
    } else {
      playerTurn = 'O';
    }
    function anyCombinationOfWins () {
    return  ($cell1.text() === playerTurn && $cell2.text() === playerTurn && $cell3.text() === playerTurn) ||
            ($cell4.text() === playerTurn && $cell5.text() === playerTurn && $cell6.text() === playerTurn) ||
            ($cell7.text() === playerTurn && $cell8.text() === playerTurn && $cell9.text() === playerTurn) ||
            ($cell1.text() === playerTurn && $cell4.text() === playerTurn && $cell7.text() === playerTurn) ||
            ($cell2.text() === playerTurn && $cell5.text() === playerTurn && $cell8.text() === playerTurn) ||
            ($cell3.text() === playerTurn && $cell6.text() === playerTurn && $cell9.text() === playerTurn) ||
            ($cell1.text() === playerTurn && $cell5.text() === playerTurn && $cell9.text() === playerTurn) ||
            ($cell3.text() === playerTurn && $cell5.text() === playerTurn && $cell7.text() === playerTurn)
    }
    if(anyCombinationOfWins === true){
      alert('Winner ' + playerTurn());
    } else {
      console.log('next players turn!')
    }
  });
  //Reset Handler
  $('#clear').on('click', function() {
    $('[data-cell]').empty();
    playerTurn = 'X';
  });
});
