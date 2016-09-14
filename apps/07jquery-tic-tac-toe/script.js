'use strict';

$(document).on('ready', function() {
    // Put app logic in here
    var playerTurn = 'O';
    var $dataElem = $('#data-cell');

    // var playerTurn = $dataElem.text();
    for (var i = 0; i <= 8; i += 1) {
        $('div[data-cell=' + i + ']').text('');
    }

    // playerTurn = $(this).text();

    $('[data-cell]').click( function(){

      if ($(this).text() !== '' ) {
        alert('You should be use a empty room');
      } else {

          if (playerTurn === 'X') {
            playerTurn = 'O';
          } else {
            playerTurn = 'X';
          }
          // (playerTurn === 'X') ?   playerTurn = 'O' : playerTurn = 'X';

          $(this).text(playerTurn);

          if (checkForWin()) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
          }

      }
    } );


    function checkForWin() {

          // // Check Horizontal
          // for (var x=0; x<=2; x++) {
          //   var winH = true;
          //   for(var y= (x*3); y<=(x*3+2); y++){
          //     if ($('div[data-cell=' + y + ']').text() !== playerTurn) {
          //       winH = false;
          //     }
          //   }
          //   if (winH) { return true; }
          // }
          //
          // // Check Vertical
          // for (var x=0;x<=2; x++) {
          //   var winV = true;
          //   for(var y= x; y<=(x+6)); y=y+3){
          //     if ($('div[data-cell=' + y + ']').text() !== playerTurn) {
          //       winV = false;
          //     }
          //   }
          //   if (winV) { return true; }
          // }
          //
          // // Check Diagonal
          // for (var x=0;x<=1; x++) {
          //   var winD = true;
          //   for(var y= x; y<=(x+6)); y=y+(4/(x+1))){
          //     if ($('div[data-cell=' + y + ']').text() !== playerTurn) {
          //       winD = false;
          //     }
          //   }
          //   if (winD) { return true; }
          // }

          var resultHor  = ( $('div[data-cell=0]').text() === playerTurn &&
                             $('div[data-cell=1]').text() === playerTurn &&
                             $('div[data-cell=2]').text() === playerTurn) ||

                           ( $('div[data-cell=3]').text() === playerTurn &&
                             $('div[data-cell=4]').text() === playerTurn &&
                             $('div[data-cell=5]').text() === playerTurn) ||

                           ( $('div[data-cell=6]').text() === playerTurn &&
                             $('div[data-cell=7]').text() === playerTurn &&
                             $('div[data-cell=8]').text() === playerTurn);

           var resultVer  = ( $('div[data-cell=0]').text() === playerTurn &&
                              $('div[data-cell=3]').text() === playerTurn &&
                              $('div[data-cell=6]').text() === playerTurn) ||

                            ( $('div[data-cell=1]').text() === playerTurn &&
                              $('div[data-cell=4]').text() === playerTurn &&
                              $('div[data-cell=7]').text() === playerTurn) ||

                            ( $('div[data-cell=2]').text() === playerTurn &&
                              $('div[data-cell=5]').text() === playerTurn &&
                              $('div[data-cell=8]').text() === playerTurn);

            var resultDia  = ( $('div[data-cell=0]').text() === playerTurn &&
                               $('div[data-cell=4]').text() === playerTurn &&
                               $('div[data-cell=8]').text() === playerTurn) ||

                             ( $('div[data-cell=6]').text() === playerTurn &&
                               $('div[data-cell=4]').text() === playerTurn &&
                               $('div[data-cell=2]').text() === playerTurn) ;

           var win =  ( resultHor || resultVer || resultDia );

           return win;

      }


    $('#clear').click( function(){
        for (var i = 0; i <= 8; i += 1) {
            $('div[data-cell=' + i + ']').text('');
        }
        $('#announce-winner').text('');
        playerTurn = 'O';
    });




    // $('.document').checkForWin(function(){
    //
    // });



});
