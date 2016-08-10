//question
  //scope
    //how does printBoard() have access to board variable inside of resetBoard()
      //would think printBoard() would only have access to global 'var board'
        //such that it would not work to call resetBoard()
          //and then call printBoard()
            //and expect printBoard()
              //to print a fresh board
                //rather than an old board that has been played on already

'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

var playerTurn = 'X';
var validValues = [0,1,2];
var counter = 0;

var board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

function resetBoard(){
  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];

  playerTurn = 'X';

}

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function getPrompt() {
  console.log("===============================");
  console.log("It's Player " + playerTurn + "'s turn.");
  console.log();
  printBoard();
  prompt.get(['row', 'column'], function(error, result) {
    var row = parseInt(result['row']);
    var column = parseInt(result['column']);
    //check for validity of row and column player move
    if(validVal(row) && validVal(column) ){
      ticTacToe(row, column);
      getPrompt();
    }
    else{
      console.log('invalid entry, try again');
      getPrompt();
    }

    //prompt.get closes
  });
  //getPrompt() closes
}

function validVal(row_or_column){
  return (validValues.indexOf(row_or_column) > -1 && validValues.indexOf(row_or_column) > -1)
}

function ticTacToe(row, column) {
  //as long as there is space available
    //let's play the game
      //could also write
        //if board[row][col] === " ";
  if (board[row][column] !== "X" && board[row][column] !== "O") {
    board[row][column] = playerTurn;
    counter++;

    //we are playing the game
      //let us check for a win
    if (checkForWin()) {
      printBoard();
      console.log();
      console.log(playerTurn + ' wins!' + " " + playerTurn + ' wins! Game Over!');
      resetBoard();
    }

    //if there is no win
      //and we have gone 9 moves
        //then we have a tie
    else if(counter === 9){
      console.log('all spaces filled, it is a tie');
      printBoard();
      resetBoard()
    }

    //otherwise
      //we have no win
        //and we haven't gone 9 moves
          //so let us have a move from the other player
    else{
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';

    }


  }

  //in the event that a space is filled
    //please try your move again
      //after ticTacToe() has executed
        //getPrompt() will ask you to make your move
  else {
    console.log('space filled, choose another');
  }


}



function checkForWin() {
  return(horizontalWin() || verticalWin() || diagonalWin());
}

function horizontalWin() {
  return(playerTurn === board[0][0] && playerTurn === board[0][1] && playerTurn === board[0][2] || playerTurn === board[1][0] && playerTurn === board[1][1] && playerTurn === board[1][2] || playerTurn === board[2][0] && playerTurn === board[2][1] && playerTurn === board[2][2]);
}

function verticalWin() {
  return(playerTurn === board[0][1] && playerTurn === board[1][1] && playerTurn === board[2][1] || playerTurn === board[0][0] && playerTurn === board[1][0] && playerTurn === board[2][0] || playerTurn === board[0][2] && playerTurn === board[1][2] && playerTurn === board[2][2]);
}

function diagonalWin() {
  return(playerTurn === board[0][0] && playerTurn === board[1][1] && playerTurn === board[2][2] || playerTurn === board[2][0] && playerTurn === board[1][1] && playerTurn === board[0][2]);
}






// Tests

if (typeof describe !== 'undefined') {

  describe('#ticTacToe()', function() {
    it('should place mark on the board', function() {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [' ', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should alternate between players', function() {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ['O', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should check for vertical wins', function() {
      board = [
        [' ', 'X', ' '],
        [' ', 'X', ' '],
        [' ', 'X', ' ']
      ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', function() {
      board = [
        ['X', 'X', 'X'],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', function() {
      board = [
        ['X', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', 'X']
      ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', function() {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
