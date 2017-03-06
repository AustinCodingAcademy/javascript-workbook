'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  var playerTurn = 'X';
  var $dataCell = $('[data-cell]');
  $('[data-cell]').click(function(){
    $(this).text(playerTurn);


    playerTurn = (playerTurn === 'X') ? 'O' : 'X';

  });

});

// function setup(){
//   $('data-cell').click(function(){
//     this.text(playerTurn);
//   });

// }

// function runThisCodeOnce(){
//   $('[data-cell]').click(handleDataCellDivClick);
//   $(this).text('X');
// }

// this variable will represent which of the divs are clicked on!!!
