"use strict";

$(document).on("ready", function() {
  // Put app logic in here
  var $playerTurn = "X";
  var turns = 0;

  function playerTurn() {
    $('[data-cell]').click(function(e){
      e.preventDefault();
      $(this).text($playerTurn);
      $playerTurn = ($playerTurn === "X") ? "O" : "X";
      turns = turns += 1;
      console.log(turns);
      checkForWin();
    })
  }

  function clearButton() {
    $("#clear").click(function(e) {
      e.preventDefault();
      $('[data-cell]').empty();
    })
  }

  function checkForWin() {

    //var wins = [[0,1,2], [3,4,5] [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

    var val0 = $('[data-cell="0"]').text();
    var val1 = $('[data-cell="1"]').text();
    var val2 = $('[data-cell="2"]').text();
    var val3 = $('[data-cell="3"]').text();
    var val4 = $('[data-cell="4"]').text();
    var val5 = $('[data-cell="5"]').text();
    var val6 = $('[data-cell="6"]').text();
    var val7 = $('[data-cell="7"]').text();
    var val8 = $('[data-cell="8"]').text();

    if (val0 === $playerTurn && val1 === $playerTurn && val2 === $playerTurn) {
      $('#announce-winner').text('Player ' + $playerTurn + " Wins!");
    } 
    if (val3 === $playerTurn && val4 === $playerTurn && val5 === $playerTurn) {
      $('#announce-winner').text('Player ' + $playerTurn + " Wins!");
    } 
    if (val6 === $playerTurn && val7 === $playerTurn && val8 === $playerTurn) {
      $('#announce-winner').text('Player ' + $playerTurn + " Wins!");
    }

    if (val0 === $playerTurn && val3 === $playerTurn && val6 === $playerTurn) {
      $('#announce-winner').text('Player ' + $playerTurn + " Wins!");
    } 
    if (val1 === $playerTurn && val4 === $playerTurn && val7 === $playerTurn) {
      $('#announce-winner').text('Player ' + $playerTurn + " Wins!");
    }
    if (val2 === $playerTurn && val5 === $playerTurn && val8 === $playerTurn) {
      $('#announce-winner').text('Player ' + $playerTurn + " Wins!");
    }

    if (val0 === $playerTurn && val4 === $playerTurn && val8 === $playerTurn) {
      $('#announce-winner').text('Player ' + $playerTurn + " Wins!");
    }
    if (val2 === $playerTurn && val4 === $playerTurn && val6 === $playerTurn) {
      $('#announce-winner').text('Player ' + $playerTurn + " Wins!");
    } 

    if (turns > 9) {
      alert("Draw");
      resetGame();
    }
  };

  function resetGame() {
    location.reload();
  }

  checkForWin();
  playerTurn();
  clearButton();
});
