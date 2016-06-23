'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  var playerTurn = 'X';

  $('#reset').click(function() {
    var cellArr = $('div[data-cell]');

    $.each(cellArr, function(i){
      var cellVal = $('div[data-cell="' + i + '"]').text('');
    });

    $('#announce-winner').text('');
  });



  $('[data-cell]').click(function(){

    $(this).text(playerTurn);

    if(checkForWin()){
      $('#announce-winner').text("Player " + playerTurn + " Wins!");
    } else {
      updateTurn();
    }

  })

  function updateTurn(){
    playerTurn = (playerTurn == 'X') ? 'O':'X';
    $('#announce-winner').text("Player " + playerTurn + "'s Turn.");
  }


  function checkForWin() {
    return (horizontalWin()  || verticalWin() || diagonalWin());
  }

  function horizontalWin() {
    var board = readBoard();
    return (board[0] === playerTurn && board[1] === playerTurn && board[2] === playerTurn ||
        board[3] === playerTurn && board[4] === playerTurn && board[5] === playerTurn ||
        board[6] === playerTurn && board[7] === playerTurn && board[8] === playerTurn);
  }

  function verticalWin() {
    var board = readBoard();
    return (board[0] === playerTurn && board[3] === playerTurn && board[6] === playerTurn ||
        board[1] === playerTurn && board[4] === playerTurn && board[7] === playerTurn ||
        board[2] === playerTurn && board[5] === playerTurn && board[8] === playerTurn);
  }

  function diagonalWin() {
    var board = readBoard();
        (board[0] === playerTurn && board[4] === playerTurn && board[8] === playerTurn ||
        board[2] === playerTurn && board[4] === playerTurn && board[6] === playerTurn);
  }

  function readBoard() {

    var cellArr = $('div[data-cell]');
    var cellValArr = [];

    $.each(cellArr, function(i){
      var cellVal = $('div[data-cell="' + i + '"]').text();
      cellValArr.push(cellVal);
    });

    return cellValArr;
  }

});
