'use strict';

$(document).on('ready', function() {
  // Put app logic in here

  var playerTurn = "X";


  $('[data-cell]').click(function(){
    if ($(this).text() === ''){
      $(this).text(playerTurn);
      checkForWin();
      // playerTurn = "X" ? "O" : "X";
      if (playerTurn === "X"){
        playerTurn = "O";
      } else {
        playerTurn = "X";
      };
    }
  });

  $('#clear').click(function(){
    $('[data-cell]').text('');
    playerTurn = 'X';
  });

  function horizontalWin(){
    var d0 = $('[data-cell=0]');
    var d1 = $('[data-cell=1]');
    var d2 = $('[data-cell=2]');
    var d3 = $('[data-cell=3]');
    var d4 = $('[data-cell=4]');
    var d5 = $('[data-cell=5]');
    var d6 = $('[data-cell=6]');
    var d7 = $('[data-cell=7]');
    var d8 = $('[data-cell=8]');

    if ((d0.text() === playerTurn) && (d1.text() === playerTurn) && (d2.text() === playerTurn)){
      return true;
    };
    if ((d3.text() === playerTurn) && (d4.text() === playerTurn) && (d5.text() === playerTurn)){
      return true;
    };
    if ((d6.text() === playerTurn) && (d7.text() === playerTurn) && (d8.text() === playerTurn)){
      return true;
    }
  };

  function verticalWin(){
    var d0 = $('[data-cell=0]');
    var d1 = $('[data-cell=1]');
    var d2 = $('[data-cell=2]');
    var d3 = $('[data-cell=3]');
    var d4 = $('[data-cell=4]');
    var d5 = $('[data-cell=5]');
    var d6 = $('[data-cell=6]');
    var d7 = $('[data-cell=7]');
    var d8 = $('[data-cell=8]');

    if ((d0.text() === playerTurn) && (d3.text() === playerTurn) && (d6.text() === playerTurn)){
      return true;
    }
    if ((d1.text() === playerTurn) && (d4.text() === playerTurn) && (d7.text() === playerTurn)){
      return true;
    }
    if ((d2.text() === playerTurn) && (d5.text() === playerTurn) && (d8.text() === playerTurn)){
      return true;
    }
  };

  function diagonalWin(){
    var d0 = $('[data-cell=0]');
    var d1 = $('[data-cell=1]');
    var d2 = $('[data-cell=2]');
    var d3 = $('[data-cell=3]');
    var d4 = $('[data-cell=4]');
    var d5 = $('[data-cell=5]');
    var d6 = $('[data-cell=6]');
    var d7 = $('[data-cell=7]');
    var d8 = $('[data-cell=8]');

    if ((d0.text() === playerTurn) && (d4.text() === playerTurn) && (d8.text() === playerTurn)){
      return true;
    }
    if ((d2.text() === playerTurn) && (d4.text() === playerTurn) && (d6.text() === playerTurn)){
      return true;
    }
  };

  function checkForWin(){
    if (horizontalWin() || verticalWin() || diagonalWin()){
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
  };


});
