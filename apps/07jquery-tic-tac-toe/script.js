'use strict';

$(document).on('ready', function() {
    // Put app logic in here
    var playerTurn = 'X';
    // .on CLICK
    $('[data-cell]').on('click', function(){
      $(this).text(playerTurn);
      if(checkForWin){
        return true;
      }
      playerTurn === playerTurn ? 'X' : 'O' ;

      checkForWin =  function(){
        return true;
      }


    })

});
