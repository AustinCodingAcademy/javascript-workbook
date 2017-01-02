'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  var playerTurn = 'X';

  // $('div[data-cell]').click(function() {
  //   console.log($(this).attr("data-cell"));
  //   if ( $(this).text().length == 0 ) {
  //     $("#announce-winner").text("");
  //     $(this).text(playerTurn);
  //     checkForWin();
  //     switchPlayer();
  //   }
  //   else {
  //     // console.log($(this).html());
  //     // $('data-cell').text(playerTurn);
  //     $("#announce-winner").text("Space is already taken.");    }
  // });
$('div[data-cell]').on('click', myClickEvent);

  function myClickEvent () {
    console.log($(this).attr("data-cell"));
    if ( $(this).text().length == 0 ) {
      $("#announce-winner").text("");
      $(this).text(playerTurn);
      checkForWin();
      switchPlayer();
    }
    else {
      // console.log($(this).html());
      // $('data-cell').text(playerTurn);
      $("#announce-winner").text("Space is already taken.");    }
  }

  //clear button
  $("#clear").click(function() {
    $('div[data-cell]').on('click', myClickEvent);
    $('div[data-cell]').text("");
    $("#announce-winner").text("");
  });




  function checkForWin(){
    // what does el, i do?  what are parameters for function in jquery?
    var boardArray = $('div[data-cell]').map(function(index, element) {
      return $(element).html();
    }).get();
    checkHori(boardArray);
    checkVert(boardArray);
    checkDiag(boardArray);

    console.log(boardArray);
  }

  function switchPlayer() {
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  }

  function checkHori(boardArray) {
    if(
      (boardArray[0]===playerTurn)&&(boardArray[1]===playerTurn)&&(boardArray[2]===playerTurn) ||
      (boardArray[3]===playerTurn)&&(boardArray[4]===playerTurn)&&(boardArray[5]===playerTurn) ||
      (boardArray[6]===playerTurn)&&(boardArray[7]===playerTurn)&&(boardArray[8]===playerTurn)
  ){
      doWinStuff();
    }
  }

  function checkVert(boardArray) {
    if(
      (boardArray[0]===playerTurn)&&(boardArray[3]===playerTurn)&&(boardArray[6]===playerTurn) ||
      (boardArray[1]===playerTurn)&&(boardArray[4]===playerTurn)&&(boardArray[7]===playerTurn) ||
      (boardArray[2]===playerTurn)&&(boardArray[5]===playerTurn)&&(boardArray[8]===playerTurn)
  ){
      doWinStuff();
    }
  }

  function checkDiag(boardArray) {
    if(
      (boardArray[0]===playerTurn)&&(boardArray[4]===playerTurn)&&(boardArray[8]===playerTurn) ||
      (boardArray[2]===playerTurn)&&(boardArray[4]===playerTurn)&&(boardArray[6]===playerTurn)
  ){
      doWinStuff();
    }
  }

  function doWinStuff(){
    $('div[data-cell]').off('click');
    $("#announce-winner").text(playerTurn + " wins!");
    console.log("win");
  }

});
