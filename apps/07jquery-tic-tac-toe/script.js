'use strict';

$(document).on('ready', function () {
  // Put app logic in here
  //Using jQuery, set a click listener on all of the [data-cell]s 
  //that SETs playerTurn as .text() on $(this) by $(this).text(playerTurn).
  //Spec 2
  //Also in your click event, toggle playerTurn between 'O' and 'X' using a ternary operator. 
  //You should now be able to change turns as you click around on your board.
  var playerTurn = 'X';
  var dataCells = $('[data-cell]')
  dataCells.click(function () {
    //that SETs playerTurn as .text() on $(this) by $(this).text(playerTurn).
    $(this).text(playerTurn);
    checkForWin();
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  });
  //Spec 4
  //Add a button with an id="clear" that will not only clear the board, but reset the player to player 'X'
  $('button').click(function () {
    $('[data-cell]').text('');
    playerTurn = 'X';
  });
  //Spec 3
  //Write a function checkForWin() that checks each combination of winning data-cells and see if they all contain 
  //the current playerTurn. Remember to use .text() to GET the the text content of any data-cell. If so, select 
  //'#announce-winner' and SET its .text() to say 'Player ' + playerTurn + ' Wins!'. Run this function every time
  // a player make a mark, but before the the playerTurn switches.
  function checkForWin() {
    var datacell0 = $('[data-cell="0"]').text();
    var datacell1 = $('[data-cell="1"]').text();
    var datacell2 = $('[data-cell="2"]').text();
    var datacell3 = $('[data-cell="3"]').text();
    var datacell4 = $('[data-cell="4"]').text();
    var datacell5 = $('[data-cell="5"]').text();
    var datacell6 = $('[data-cell="6"]').text();
    var datacell7 = $('[data-cell="7"]').text();
    var datacell8 = $('[data-cell="8"]').text();
    //function verticalWin() {
    //Your code here
    //if (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn ||
    //    board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn ||
    //    board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn) {
    //    return true;
    //var $announceWinner = $("announce-winner");
    //horizontal top
    if (datacell0 === playerTurn && datacell1 === playerTurn && datacell2 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return;
    }
    //horizontal middle
    if (datacell3 === playerTurn && datacell4 === playerTurn && datacell5 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return;
    }
    //horizontal bottom
    if (datacell6 === playerTurn && datacell7 === playerTurn && datacell8 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return;
    }
    //vertical left
    if (datacell0 === playerTurn && datacell3 === playerTurn && datacell6 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return;
    }
    //vertical middle
    if (datacell1 === playerTurn && datacell4 === playerTurn && datacell7 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return;
    }
    //vertical bottom
    if (datacell2 === playerTurn && datacell5 === playerTurn && datacell8 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return;
    }
    //diagonal from left
    if (datacell0 === playerTurn && datacell4 === playerTurn && datacell8 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
    //diagonal from right
    if (datacell2 === playerTurn && datacell4 === playerTurn && datacell6 === playerTurn) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
      return;
    }
  }
});