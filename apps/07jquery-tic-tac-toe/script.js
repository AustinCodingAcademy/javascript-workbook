'use strict';


$(document).on('ready', function() {

  // Spec 1
  var $playerTurn = $('X');

  $('[data-cell]').click(function(){
    $('this').text($playerTurn);

    // Spec 2
    // This is the switch to next player, ternary operator
    function $toggleplayerTurn() {
      $playerTurn = ($playerTurn === 'X') ? 'O' : 'X';
    }



    })


  });
