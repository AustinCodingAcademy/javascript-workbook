'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start(); //starts the game

var board = [ //board for game, an array called in function printBoard
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

var playerTurn = 'X' //starts the game on the turn X

// function wrongEntry(row, column) {
//   if (!(row === '0' || row === '1' || row === '2') ||
//   !(column == '0' || row === '1' || row === '2')){
//     console.log("Sorry, enter a 0, 1, or 2");
//     return true;
//   }
//   else {
//     return false;
//   }
// }

function printBoard() { //puts numbers next to and on top of board
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() { //checks for three Xs or Os in horiz. row
    // Your code here
    if(
    (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn)
    ||
    (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn)
    ||
    (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)
  ) {
    return true; //returns that horizontal win is true
   }
  else
  {
    return false; //returns that horizontal win is false
  }
}

function verticalWin() { //checks for Xs and Os in vert. row
    if(
    (board [0][0] === playerTurn && board [1][0] === playerTurn && board[2][0] === playerTurn)
    ||
    (board [0][1] === playerTurn && board [1][1] === playerTurn && board[2][1] === playerTurn)
    ||
    (board [0][2] === playerTurn && board [1][2] === playerTurn && board[2][2] === playerTurn)
) {
  return true; //returns that verticalWin is true
}
  else
{
  return false; //returns that verticalWin is false
  }
}

function diagonalWin() { //checks for three Xs and Os in diag
    if(
    (board [0][0] === playerTurn && board [1][1] === playerTurn && board[2][2] === playerTurn)
    ||
    (board [0][2] === playerTurn && board [1][1] === playerTurn && board[2][0] === playerTurn)
  ) {
    return true; //returns that diagonalWin is true
  }
  else
  {
    return false; //returns that diagonalWin is false
  }
}

function checkForWin() { //checks if horizontalWin et al are true.
    if(horizontalWin() || verticalWin() || diagonalWin()) {
      return true;     //if one is true, it returns true.
    }
    else {
      {
        return false; //otherwise, it returns false.
      }
    }
}

function ticTacToe(row, column) {

    // if(wrongEntry(row,column)) {
    //   getPrompt();
    // }
    // else {
    if (board[row][column] === "X" || board[row][column] === "O" ) {
      console.log("That spot is taken! Try again")
    }
     else {
      board[row][column] = playerTurn; //takes the row/column input and makes it equal player turn
      if(checkForWin()) { //if checkForWin is true...
        printBoard(); //it prints the board...
        console.log('Player ' + playerTurn + ' Won!');//and says the person won
      }
      else { //otherwise it checks for an X and makes it an O, and if it's not an O, makes it an X (below)
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
      //acts person for the next entry, since no one won
    }
  }
  getPrompt();
// }
}

function getPrompt() { //prompts player
    printBoard(); //prints board for player to see
    console.log("It's Player " + playerTurn + "'s turn."); //says whose turn
    prompt.get(['row', 'column'], function (error, result) {
        ticTacToe(result['row'], result['column']);

    });
}



// Tests

if (typeof describe !== 'undefined') {

    describe('#ticTacToe()', function () {
        it('should place mark on the board', function () {
            ticTacToe(1, 1);
            assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
        });
        it('should alternate between players', function () {
            ticTacToe(0, 0);
            assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
        });
        it('should check for vertical wins', function () {
            board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
            assert.equal(verticalWin(), true);
        });
        it('should check for horizontal wins', function () {
            board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
            assert.equal(horizontalWin(), true);
        });
        it('should check for diagonal wins', function () {
            board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
            assert.equal(diagonalWin(), true);
        });
        it('should detect a win', function () {
            assert.equal(checkForWin(), true);
        });
    });
} else {

    getPrompt();

}
