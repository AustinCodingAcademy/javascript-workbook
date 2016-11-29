'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  var $playerTurn = "X";
  //var wins = [[0,1,2], [3,4,5] [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
  var turns = 0;
  var $dataCell = $("[data-cell]");

  function validatePlay() {
    if (($dataCell.text() === "X") || ($dataCell.text() === "O")) {
      alert("Please select an empty cell");
      return true;
    }
  }
  function playerTurn() {
    $dataCell.click(function(e){
      var $turn = $(this).text($playerTurn);
      
      // checks for win, validates play, max amount of moves per board
      checkForWin();

      $playerTurn = ($playerTurn === "X") ? "O" : "X";
      turns = turns += 1;
      maxMoves();
    });
  }
  function maxMoves() {
    if (turns >= 8) {
      alert("Game is a tie, resetting");
      $("#announce-winner").text("Game is a draw, resetting board");
      resetGame();
    }
  }
  // reset game upon maximum cell choices
  function resetGame() {
    setTimeout(window.location.reload.bind(window.location), 1050);
  }

  function clearButton() {
    $("#clear").click(function(e) {
      $("[data-cell]").empty();
      $("#announce-winner").empty();
    });
  }

  function checkForWin() {
    //var wins = [[0,1,2], [3,4,5] [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

    var val0 = $("[data-cell='0']").text();
    var val1 = $("[data-cell='1']").text();
    var val2 = $("[data-cell='2']").text();
    var val3 = $("[data-cell='3']").text();
    var val4 = $("[data-cell='4']").text();
    var val5 = $("[data-cell='5']").text();
    var val6 = $("[data-cell='6']").text();
    var val7 = $("[data-cell='7']").text();
    var val8 = $("[data-cell='8']").text();

    /*Horizontal Win*/
    if (val0 === $playerTurn && val1 === $playerTurn && val2 === $playerTurn) {
      $("#announce-winner").text("Player " + $playerTurn + " Wins!");
      resetGame();
      return;
    } 
    if ((val3 === $playerTurn) && (val4 === $playerTurn) && (val5 === $playerTurn)) {
      $("#announce-winner").text("Player " + $playerTurn + " Wins!");
      resetGame();
      return;
    } 
    if (val6 === $playerTurn && val7 === $playerTurn && val8 === $playerTurn) {
      $("#announce-winner").text("Player " + $playerTurn + " Wins!");
      resetGame();
      return;
    }

    /*Vertical Win*/
    if (val0 === $playerTurn && val3 === $playerTurn && val6 === $playerTurn) {
      $("#announce-winner").text("Player " + $playerTurn + " Wins!");
      resetGame();
      return;
    } 
    if (val1 === $playerTurn && val4 === $playerTurn && val7 === $playerTurn) {
      $("#announce-winner").text("Player " + $playerTurn + " Wins!");
      resetGame();
      return;
    }
    if (val2 === $playerTurn && val5 === $playerTurn && val8 === $playerTurn) {
      $("#announce-winner").text("Player " + $playerTurn + " Wins!");
      resetGame();
      return;
    }

    /*Diagonal Win*/

    if (val0 === $playerTurn && val4 === $playerTurn && val8 === $playerTurn) {
      $("#announce-winner").text("Player " + $playerTurn + " Wins!");
      resetGame();
      return;
    }
    if (val2 === $playerTurn && val4 === $playerTurn && val6 === $playerTurn) {
      $("#announce-winner").text("Player " + $playerTurn + " Wins!");
      resetGame();
      return;
    } 
  }
  playerTurn();
  clearButton();
});
