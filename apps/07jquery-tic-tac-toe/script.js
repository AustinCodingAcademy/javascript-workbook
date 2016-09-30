'use strict';


$(document).on('ready', function() {
    var playerTurn = 'X';
    var $dataCell = $('[data-cell]');

    function horizontalWin() {
      return $('[data-cell="0"]').text() === playerTurn &&
        $('[data-cell="1"]').text() === playerTurn &&
        $('[data-cell="2"]').text()=== playerTurn ||
        $('[data-cell="3"]').text()=== playerTurn &&
        $('[data-cell="4"]').text() === playerTurn &&
        $('[data-cell="5"]').text() === playerTurn ||
        $('[data-cell="6"]').text() === playerTurn &&
        $('[data-cell="7"]').text()=== playerTurn &&
        $('[data-cell="8"]').text()=== playerTurn
    }

    function verticalWin() {
      return $('[data-cell="0"]').text()=== playerTurn && $('[data-cell="3"]').text() === playerTurn && $('[data-cell="6"]').text()=== playerTurn ||   $('[data-cell="1"]').text()=== playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="7"]').text() === playerTurn ||   $('[data-cell="2"]').text() === playerTurn && $('[data-cell="5"]').text()=== playerTurn && $('[data-cell="8"]').text()=== playerTurn
    }

    function diagonalWin() {
      return $('[data-cell="0"]').text()=== playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="8"]').text()=== playerTurn ||   $('[data-cell="2"]').text()=== playerTurn && $('[data-cell="4"]').text() === playerTurn && $('[data-cell="6"]').text() === playerTurn
    }


    function checkForWin(){
       var win= horizontalWin() || verticalWin() || diagonalWin();
       if (win){
          $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
       }
       return win;
    }


        $('#clear').click(function(){
        $dataCell.each(function(){
            $(this).empty()
          });
        });


    $dataCell.click(function(){
      $(this).text(playerTurn);
     if (!checkForWin()){
       playerTurn = (playerTurn === 'X')? 'O' : 'X';
  }
    });
});
