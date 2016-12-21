'use strict';

$(document).ready(function() {
  // Put app logic in here
  /*
SPEC 1)
Set a variable playerTurn equal to 'X'.
Using jQuery, set a click listener on all of the [data-cell]s ---   .click() is a "click listener"
that SETs playerTurn as .text() on $(this) by $(this).text(playerTurn).*/
    var playerTurn = 'X';
    var $dataCell = $('[data-cell]');

    var $dataCell0 = $('[data-cell="0"]');
    var $dataCell1 = $('[data-cell="1"]');
    var $dataCell2 = $('[data-cell="2"]');
    var $dataCell3 = $('[data-cell="3"]');
    var $dataCell4 = $('[data-cell="4"]');
    var $dataCell5 = $('[data-cell="5"]');
    var $dataCell6 = $('[data-cell="6"]');
    var $dataCell7 = $('[data-cell="7"]');
    var $dataCell8 = $('[data-cell="8"]');
  
    $dataCell.click(function() {
        $(this).text(playerTurn);
        checkForWin();

        playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    });

/*

SPEC 2)
Also in your click event, toggle playerTurn between 'O' and 'X' using a ternary operator. 
You should now be able to change turns as you click around on your board.*/    


    var $button = $('#clear');
    
    $button.click(function() {
      $dataCell.empty();
      $('#announce-winner').empty();
      playerTurn = 'X';
    });
 



/*

SPEC 3)
Write a function checkForWin() that checks each combination of winning data-cells and see if they all contain the current playerTurn. Remember to use .text() to GET the the text content of any data-cell. 
*/

function horizontalWin() {
  // Your code here
  if ($dataCell0.text() === playerTurn && $dataCell1.text() === playerTurn && $dataCell2.text() === playerTurn){
  return true;
  }
  if ($dataCell3.text() === playerTurn && $dataCell4.text() === playerTurn && $dataCell5.text() === playerTurn){
  return true;
  }
  if ($dataCell6.text() === playerTurn && $dataCell7.text() === playerTurn && $dataCell8.text() === playerTurn){
  return true;
  }
  return false;
}

function verticalWin() {
  // Your code here
  if ($dataCell0.text() === playerTurn && $dataCell3.text() === playerTurn && $dataCell6.text() === playerTurn){
  return true;
  }
  if ($dataCell1.text() === playerTurn && $dataCell4.text() === playerTurn && $dataCell7.text() === playerTurn){
  return true;
  }
  if ($dataCell2.text() === playerTurn && $dataCell5.text() === playerTurn && $dataCell8.text() === playerTurn){
  return true;
  }
  return false;
}

function diagonalWin() {
  // Your code here
  if ($dataCell0.text() === playerTurn && $dataCell4.text() === playerTurn && $dataCell8.text() === playerTurn){
  return  true;
  }
  if ($dataCell6.text() === playerTurn && $dataCell4.text() === playerTurn && $dataCell2.text() === playerTurn){
  return true;
  }
  return false;
}

/*
SPEC 3) CONT...
....If so, select '#announce-winner' and SET its .text() to say 'Player ' + playerTurn + 'Wins!'. Run this function every time a player make a mark, but before the the playerTurn switches.
*/

function checkForWin() {
  // Your code here
  if(horizontalWin() || verticalWin() || diagonalWin()){
        $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    return true;
  }
}
});


/*

function ticTacToe(row, column) {
  // Your code here

  playerTurn =( board[row][column] = playerTurn );

  function togglePlayer() {
  playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  }

  checkForWin();

  togglePlayer();


};
*/
/*
function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  })
};
*/
