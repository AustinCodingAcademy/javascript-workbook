'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

var playerTurn = 'X';

function printBoard() {
    console.log('\n');
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
    console.log('\n');
}

function horizontalWin() {
    // Are all three sub-array values the same? If so, we have a winner.
    if ((board[0][0] === playerTurn &&
        board[0][1] === playerTurn &&
        board[0][2] === playerTurn) ||
        (board[1][0] === playerTurn &&
        board[1][1] === playerTurn &&
        board[1][2] === playerTurn) ||
        (board[2][0] === playerTurn &&
        board[2][1] === playerTurn &&
        board[2][2] === playerTurn)) {
          return true;
        }
      else {
        return false;
      }
}

function verticalWin() {
  // Is the first value of all three sub-array values the same?
  // If so, we have a winner.
  if ((board[0][0] === playerTurn &&
      board[1][0] === playerTurn &&
      board[2][0] === playerTurn) ||
      (board[0][1] === playerTurn &&
      board[1][1] === playerTurn &&
      board[2][1] === playerTurn) ||
      (board[0][2] === playerTurn &&
      board[1][2] === playerTurn &&
      board[2][2] === playerTurn)) {
        return true;
      }
    else {
      return false;
    }
}

function diagonalWin() {
    // There are only two diagnols that can be formed. We'll check them both.
    if ((board[0][0] === playerTurn &&
        board[1][1] === playerTurn &&
        board[2][2] === playerTurn) ||
        (board[0][2] === playerTurn &&
        board[1][1] === playerTurn &&
        board[2][0] === playerTurn)) {
          return true;
        }
      else {
        return false;
      }
}

function checkForWin() {
    //Check the board for a winner. If there is one, change the value of our
    //global winner variable.
    if(horizontalWin() || verticalWin() || diagonalWin()){
      return true;
    }
    else {
      return false;
    }
}

function ticTacToe(row, column) {
    // Check if the player made a valid choice
    if(validMark(row, column)) {
      // Place a mark according to which playerTurn is current in the
      // passed row & column.
      board[row][column] = playerTurn;
      //Check for a winner. If there is a winner, we're done. Otherwise, keep
      //playing.
      if (checkForWin()) {
        console.log("Player " + playerTurn + " wins!");
      }
      else {
        //If there isn't a winer, we'll switch players & prompt for a new mark.
        playerTurn = (playerTurn === 'X') ? 'O' : 'X';
        getPrompt();
      }//end checkForWin() else
    }//end if
    else {
      //If the user made an Invalid mark, we'll prompt them again
      getPrompt();
    }//end validMark() else

}

function getPrompt() {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");
    prompt.get(['row', 'column'], function (error, result) {
        ticTacToe(result['row'], result['column']);
        //getPrompt();
    });
}

function validMark(row, column) {
  //check if the row & column values are within the board
  if (!(row == '0' || row == '1' || row == '2') ||
      !(column == '0' || column == '1' || column == '2')) {
    console.log("Invalid row/column selection. Options are 0, 1 or 2.");
    return false;
  }
  //next we'll check to see if there is already a mark on the row/column
  else if (board[row][column] !== ' ') {
    console.log("That space is already played. Choose another row/column!");
    return false;
  }
  //if we don't catch any errors, we'll assume they made valid input
  else {
    return true;
  }
}//end validMark()


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
