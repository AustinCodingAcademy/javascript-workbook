'use strict';
var playerTurn = 'X';
$(document).on('ready', function() {
    // Put app logic in here
    // .on CLICK

    function checkForWin(){

      if (horizontalWin() === true || verticalWin() === true){
        // checkForHorizontalWin

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
      } else if ( ($('[data-cell = "0"]').text() === playerTurn &&
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

      return true;
    }


    $('[data-cell]').on('click', function(){
      $(this).text(playerTurn);
      //checkForWin();

      // toggle
        playerTurn =  (playerTurn === 'X') ?  'O' : 'X';
    });

});
