'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  // Set the playerTurn variable with an initial value of 'X'
  var playerTurn = 'X';
  var count = 0;
  var win = false;
  
  $('[data-cell]').click(function(){
   // verify if it is the first move
    if (count == 0) {
      // set the data cell to the value of playerTurn
      $(this).text(playerTurn);
      setColor();
      // toggle the turn
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
      // increment the counter
      count ++;
    }
    else {
      // check if there is already a player in this block
      if ($(this).text() !== "" ) {
        // pop out error message
        alert("This spot has already been taken!");
      }
      else{
        // check if there is already a win 
        if (win === false) {
          // set the data cell to the value of playerTurn
          $(this).text(playerTurn);
          // set different colors for the two players
          setColor();
          // check the win
          checkForWin();
          // toggle the turn 
          playerTurn = (playerTurn === 'X') ? 'O' : 'X';
        }
      }
    }  
  });

  function checkForHorizontalWin() {
    // for each row in the grid, check if there are same text values 
    $('.row').each(function(){
      // get the value of each block
      var leftValue = $(this).children().first().text();
      var middleValue = $(this).children().eq(1).text();
      var rightValue = $(this).children().last().text();
      // compare the block text values 
      if (leftValue === middleValue && leftValue === rightValue && leftValue !== "") {
        win = true;
      }
    });
  }

  function checkForVerticalWin() {
    var central = $("[data-cell=4]").text();
    var northwest = $("[data-cell=0]").text();
    var southeast = $("[data-cell=8]").text();
    var northeast = $("[data-cell=2]").text();
    var southwest = $("[data-cell=6]").text();
    var north = $("[data-cell=1]").text();
    var south = $("[data-cell=7]").text();
    var east = $("[data-cell=5]").text();
    var west = $("[data-cell=3]").text();
    if ((central === north) && (central === south) && (central !== "")) {
      win = true;
    }
    if ((east === northeast) && (east === southeast) && (east !== "")) {
      win = true;
    }
    if ((west === northwest) && (west === southwest) && (west !== "")) {
      win = true;
    }
  }

  function checkForDiagonalWin () {
    var central = $("[data-cell=4]").text();
    var northwest = $("[data-cell=0]").text();
    var southeast = $("[data-cell=8]").text();
    var northeast = $("[data-cell=2]").text();
    var southwest = $("[data-cell=6]").text();
    if ((central === northeast) && (central === southwest) && (central !== "")) {
      win = true;
    }
    if ((central === northwest) && (central === southeast) && (central !== "")) {
      win = true;
    }
  }

   function checkForWin() {
     // call all the check functions 
     checkForHorizontalWin();
     checkForVerticalWin();
     checkForDiagonalWin();
    // see if there is a win 
    if (win){
      // pop out victory message 
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }
  }

  function setColor() {
    // set the color of block according to the player 
    $('[data-cell]:contains(X)').css('background-color','blue');
    $('[data-cell]:contains(O)').css('background-color','magenta');
  }
  // function checkHorizontalWinX() {
  //   var container = [];
  //   $('.topRow').each(function(){
  //     var text =$(this).text();
  //     if (container !== []) {
  //       if (text in container) {
  //         return false;
  //       }
  //     }
  //     container.push(text);
  //     return true;
  //   })
  // }
  $('#clear').click(function(){
    // clear the board
    $('[data-cell]').text('');
    $('[data-cell]').css('background-color','white');
    // reset the variables to initial state 
    playerTurn = 'X';
    count = 0;
    win = false;
    $('#announce-winner').text("");
  });
});
