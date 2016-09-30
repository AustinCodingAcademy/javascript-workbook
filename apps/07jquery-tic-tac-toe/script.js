'use strict';
var counter=0;
var winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [6,4,2],
  [0,3,6],
  [1,4,7],
  [2,5,8]
];

$(document).on('ready', function() {
    $('#clear').click(function(){
      clearBoard();
      // ('[data-cell]').bind();
    });
    var playerTurn = 'X';
    $('[data-cell]').click(function(){
      $('#announce-winner').text('');
      if( $(this).text() === ''){
        counter++;
        $(this).text(playerTurn);

        checkForWin();

         if (checkForTie()) {
          $('#announce-winner').html('tie game, click Clear Board button');
        }
        playerTurn = (playerTurn === 'X')?  'O': 'X';
        
        else{
          $('#announce-winner').text('invalid move');
        }
    });

    function resetBoard(){
      $(document).on('click', function(){
        clearBoard();
      });
    }

    function clearBoard(){
      // $('[data-cell]').bind();

      $('[data-cell]').each(function(){
        $(this).empty();
      });
      $('#announce-winner').html('');
      playerTurn = 'X';
      counter=0;

    }
    function checkForWin() {
        for(var i = 0; i <= winningCombos.length; i++) {
          if($('[data-cell="'  + winningCombos[i][0] +  '"]').text() === playerTurn &&
          $('[data-cell="'  + winningCombos[i][1] +  '"]').text() === playerTurn &&
          $('[data-cell="'  + winningCombos[i][2] +  '"]').text() === playerTurn
        ){
            $('#announce-winner').html('player ' + playerTurn + ' wins!');
            return true;
          }
        }
    }
    function checkForTie(){
      return(counter === 9);
    }

});
