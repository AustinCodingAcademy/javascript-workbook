'use strict';

$(document).on('ready', function() {
    var playerTurn = 'X';
    var board;
    function boardState(row, column) {
      var idx = row * 3 + column;
      return $('div[data-cell=' + idx + ']').text;
   }
   function horizontalWin() {
      return ((boardState)(0,0) === playerTurn)
              (boardState)(1,0) === playerTurn)
              (boardState)(2,0) === playerTurn)
   }
   function verticalWin() {
      return ((boardState)(0,0) === playerTurn)
              (boardState)(0,1) === playerTurn)
              (boardState)(0,2) === playerTurn)
   }
   function diagonalWin() {
      return ((boardState)(0,0) === playerTurn)
              (boardState)(0,2) === playerTurn)
   }
   function checkForWin () {
      return horizontalWin() || verticalWin() || diagonalWin();
   }
   $('#announce-winner').click (console.log.bind(console));
   $('.row div').click(
      function(event) {
      var target = $(event.target);
      var currentText = target.text();
      if  (currentText !== '') {
      return;
   }
      target.text(playerTurn);
      if(checkForWin()) {
         $('#announce-winner').text('Player' + playerTurn + 'won!');
      } else {
         playerTurn = (playerTurn === 'X' ? 'O' : 'X');
      }
      }
   };
   $('#clear').click (
      function() {
         $('[data-cell]').text('');
      }
   );
});
