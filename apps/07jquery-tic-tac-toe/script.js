'use strict';

$(document).on('ready', function() {
    // Put app logic in here
    // .on CLICK
    var playerTurn = 'X';

    $('[data-cell]').on('click', function(){
      $(this).text(playerTurn);
      checkForWin();

      // toggle
        playerTurn =  (playerTurn === 'X') ?  'O' : 'X';
    });


    function checkForWin(){

      if (horizontalWin() === true || verticalWin() === true || diagonalWin === true){
        // checkForHorizontalWin
          $('#announce-winner').text("Player " + playerTurn + " Wins!");
        //  console.log(playerTurn +  "!");
      }

    }
      function horizontalWin(){
      if( ($('[data-cell = "0"]').text() === playerTurn &&
          $('[data-cell = "1"]').text() === playerTurn &&
          $('[data-cell = "2"]').text() === playerTurn )||

          ($('[data-cell = "3"]').text() === playerTurn &&
          $('[data-cell = "4"]').text() === playerTurn &&
          $('[data-cell = "5"]').text() === playerTurn )||

          ($('[data-cell = "6"]').text() === playerTurn &&
          $('[data-cell = "7"]').text() === playerTurn &&
          $('[data-cell = "8"]').text() === playerTurn ) ){

        return true;
        // CHECK for verticalWin
        }
      }
      function verticalWin(){
        if ( ($('[data-cell = "0"]').text() === playerTurn &&
          $('[data-cell = "3"]').text() === playerTurn &&
          $('[data-cell = "6"]').text() === playerTurn )||

          ($('[data-cell = "1"]').text() === playerTurn &&
          $('[data-cell = "4"]').text() === playerTurn &&
          $('[data-cell = "7"]').text() === playerTurn )||

          ($('[data-cell = "2"]').text() === playerTurn &&
          $('[data-cell = "5"]').text() === playerTurn &&
          $('[data-cell = "8"]').text() === playerTurn ) ){
        return true;
        }
      }
      function diagonalWin(){
        if ( ($('[data-cell = "0"]').text() === playerTurn &&
          $('[data-cell = "4"]').text() === playerTurn &&
          $('[data-cell = "8"]').text() === playerTurn )||

          ($('[data-cell = "2"]').text() === playerTurn &&
          $('[data-cell = "4"]').text() === playerTurn &&
          $('[data-cell = "6"]').text() === playerTurn )){
        return true;
        }
      }




});
