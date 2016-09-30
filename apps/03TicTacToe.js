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
var cont_try = 0;

function printBoard() {
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
    // Your code here
    var resultHor = true;

    for (var i=0; (i<board.length);i++){

      // Check for one Horizontal line
      resultHor = true;
      for (var j=0;j<board[i].length;j++) {
        if (board[i][j] !== playerTurn) {
          resultHor = false; }
      }
      if (resultHor) {
        return true;
      }
    }
    return false;

    // var resultHor0 = (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn);
    // var resultHor1 = (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn);
    // var resultHor2 = (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn);
    //
    // return ( resultHor0 || resultHor1 || resultHor2 );
}

function verticalWin() {
    // Your code here
    var resultVer = true;
    for (var i=0; (i<board.length);i++){
      // Check for one vertical line
      resultVer = true;
      for (var j=0;j<board[i].length;j++) {
        if (board[j][i] !== playerTurn) { resultVer = false; }
      }
      if (resultVer) { return resultVer; }
    }
    return false;

    // var resultVer0 = (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn);
    // var resultVer1 = (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn);
    // var resultVer2 = (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn);
    //
    // return ( resultVer0 || resultVer1 || resultVer2 );
}

function diagonalWin() {
    // Your code here
    var resultDiag = true;
    for (var i=0; (i<board.length);i++){
      if (board[i][i] !== playerTurn ) {
        resultDiag = false;
       }
    }
    if (!resultDiag) {
      var j = board.length;
      for (var i=0; (i<board.length);i++){
        if (board[i][j-i] !== playerTurn ) {
          resultDiag = false;
         }
      }
    }

    return resultDiag;

    // var resultDia0 = (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn);
    // var resultDia1 = (board[2][0] === playerTurn && board[1][1] === playerTurn && board[0][2] === playerTurn);
    //
    // return ( resultDia0 || resultDia1 );

}

function checkForTie(){
  for (var i=0;i<board.length;i++){
    for (var j=0;j<board[i].length;j++) {
      if (board[i][j] === ' ') {
        return false;
      }
    }
  }
  return true;
}


function checkForWin() {
    // Your code here

    return (horizontalWin() || verticalWin() || diagonalWin() ) ;
}

function ticTacToe(row, column) {
    // Your code here
    var gameOver = false;
    if (board[row][column] === ' ') {
      board[row][column] = playerTurn;
      if (checkForWin()) {
        console.log("Awesome!, The "+playerTurn+" Win!");
        gameOver = true;
      } else {
        if (checkForTie()) {
          console.log("OOHHH!, The the game is Tie!");
          gameOver = true;
        } else {
          playerTurn = (playerTurn === 'X') ? 'O' : 'X';
        }
      }

    } else {
      console.log("This row and column is already in use, choose another one!. ");
      // playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    }
    return gameOver;
}

function getPrompt() {

    printBoard();
    cont_try++;
    console.log("Try #"+cont_try+"It's Player " + playerTurn + "'s turn.");
    prompt.get(['row', 'column'], function (error, result) {
        var someOneWin = ticTacToe(result['row'], result['column']);
        if (someOneWin ) {
          printBoard();
        } else {
          getPrompt();
        }
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
            playerTurn = 'X';
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
