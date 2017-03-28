'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

var blankBoard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
var playerTurn = 'X';
var playerO = 0;
var playerX = 0;
var tie = 0;

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  return ((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) || (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) || (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn));
}

function verticalWin() {
  return ((board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) || (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) || (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn));
}

function diagonalWin() {
  return ((board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) || (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn));
}

function checkTie() {
  return (board[0][0] !== ' ' && board[0][1] !== ' ' && board[0][2] !== ' ' && board[1][0] !== ' ' && board[1][1] !== ' ' && board[1][2] !== ' ' && board[2][0] !== ' ' && board[2][1] !== ' ' && board[2][2] !== ' ');
}

// let index = null;
// let win = null;
// let playerTurn = 'X'

// function checkForWin(playerTurn) {
// 	for (let i = 0; i < board.length; i++) {
// 		for (let j = 0; j < board[i].length; j++) {
// 			index += board[i][j].indexOf(' ')
// 			if (index === -9) {
// 				win = 'tie'
// 			}
// 		}
// 		if (!board[0][i].indexOf(playerTurn)) {
// 			if (!board[1][i].indexOf(playerTurn)) {
// 				if (!board[2][i].indexOf(playerTurn)) {
// 					win = 'vertically'
// 				}
// 			}
// 		}
// 		if (!board[i][0].indexOf(playerTurn)) {
// 			if (!board[i][1].indexOf(playerTurn)) {
// 				if (!board[i][2].indexOf(playerTurn)) {
// 					win = 'horizontally'
// 				}
// 			}
// 		}
// 		if (i % 2 === 0) {
// 			if (board[i][0].includes(playerTurn) && board[1][1].includes(playerTurn)) {
// 				win = 'diagonally'
// 			}
// 		}
// 	}
// 	return win
// }

function checkForWin() {
  if (checkTie()) {
    tie++;
    console.log('It is a tie! Resetting Board. Changing player.');
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    console.log('Current score X: ' + playerX + '   O: ' + playerO + '   Tie: ' + tie);
    //changePlayer();
    return true;
  }
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    console.log('Player ' + playerTurn + ' wins! Resetting Board.');
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    if (playerTurn === 'X') {
      playerX++;
    } else {
      playerO++;
    }
    console.log('Current score X: ' + playerX + '   O: ' + playerO + '   Tie: ' + tie);
    //changePlayer();
    return true;
  }

}

function changePlayer() {
  if (playerTurn === 'X') {
    playerTurn = 'O';
  } else {
    playerTurn = 'X';
  }
}

function AImove(playerTurn, row, column) {
  if (playerTurn === 'O') {
    if (board[1][1] === ' ') {
      ticTacToe(1, 1);
    }
    //take win horizontal
    else if (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === ' ') {
      ticTacToe(0, 2);
    } else if (board[0][0] === 'O' && board[0][1] === ' ' && board[0][2] === 'O') {
      ticTacToe(0, 1);
    } else if (board[0][0] === ' ' && board[0][1] === 'O' && board[0][2] === 'O') {
      ticTacToe(0, 0);
    } else if (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === ' ') {
      ticTacToe(1, 2);
    } else if (board[1][0] === 'O' && board[1][1] === ' ' && board[1][2] === 'O') {
      ticTacToe(1, 1);
    } else if (board[1][0] === ' ' && board[1][1] === 'O' && board[1][2] === 'O') {
      ticTacToe(1, 0);
    } else if (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === ' ') {
      ticTacToe(2, 2);
    } else if (board[2][0] === 'O' && board[2][1] === ' ' && board[2][2] === 'O') {
      ticTacToe(2, 1);
    } else if (board[2][0] === ' ' && board[2][1] === 'O' && board[2][2] === 'O') {
      ticTacToe(2, 0);
    }
    //take win vertical
    else if (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === ' ') {
      ticTacToe(2, 0);
    } else if (board[0][0] === 'O' && board[1][0] === ' ' && board[2][0] === 'O') {
      ticTacToe(1, 0);
    } else if (board[0][0] === ' ' && board[1][0] === 'O' && board[2][0] === 'O') {
      ticTacToe(0, 0);
    } else if (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === ' ') {
      ticTacToe(2, 1);
    } else if (board[0][1] === 'O' && board[1][1] === ' ' && board[2][1] === 'O') {
      ticTacToe(1, 1);
    } else if (board[0][1] === ' ' && board[1][1] === 'O' && board[2][1] === 'O') {
      ticTacToe(0, 1);
    } else if (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === ' ') {
      ticTacToe(2, 2);
    } else if (board[0][2] === 'O' && board[1][2] === ' ' && board[2][2] === 'O') {
      ticTacToe(1, 2);
    } else if (board[0][2] === ' ' && board[1][2] === 'O' && board[2][2] === 'O') {
      ticTacToe(0, 2);
    }
    //take win diagonal
    else if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === ' ') {
      ticTacToe(2, 2);
    } else if (board[0][0] === 'O' && board[1][1] === ' ' && board[2][2] === 'O') {
      ticTacToe(1, 1);
    } else if (board[0][0] === ' ' && board[1][1] === 'O' && board[2][2] === 'O') {
      ticTacToe(0, 0);
    } else if (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === ' ') {
      ticTacToe(2, 0);
    } else if (board[0][2] === 'O' && board[1][1] === ' ' && board[2][0] === 'O') {
      ticTacToe(1, 1);
    } else if (board[0][2] === ' ' && board[1][1] === 'O' && board[2][0] === 'O') {
      ticTacToe(0, 2);
    }
    //block win horizontal
    else if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === ' ') {
      ticTacToe(0, 2);
    } else if (board[0][0] === 'X' && board[0][1] === ' ' && board[0][2] === 'X') {
      ticTacToe(0, 1);
    } else if (board[0][0] === ' ' && board[0][1] === 'X' && board[0][2] === 'X') {
      ticTacToe(0, 0);
    } else if (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === ' ') {
      ticTacToe(1, 2);
    } else if (board[1][0] === 'X' && board[1][1] === ' ' && board[1][2] === 'X') {
      ticTacToe(1, 1);
    } else if (board[1][0] === ' ' && board[1][1] === 'X' && board[1][2] === 'X') {
      ticTacToe(1, 0);
    } else if (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === ' ') {
      ticTacToe(2, 2);
    } else if (board[2][0] === 'X' && board[2][1] === ' ' && board[2][2] === 'X') {
      ticTacToe(2, 1);
    } else if (board[2][0] === ' ' && board[2][1] === 'X' && board[2][2] === 'X') {
      ticTacToe(2, 0);
    }
    //block win vertical
    else if (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === ' ') {
      ticTacToe(2, 0);
    } else if (board[0][0] === 'X' && board[1][0] === ' ' && board[2][0] === 'X') {
      ticTacToe(1, 0);
    } else if (board[0][0] === ' ' && board[1][0] === 'X' && board[2][0] === 'X') {
      ticTacToe(0, 0);
    } else if (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === ' ') {
      ticTacToe(2, 1);
    } else if (board[0][1] === 'X' && board[1][1] === ' ' && board[2][1] === 'X') {
      ticTacToe(1, 1);
    } else if (board[0][1] === ' ' && board[1][1] === 'X' && board[2][1] === 'X') {
      ticTacToe(0, 1);
    } else if (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === ' ') {
      ticTacToe(2, 2);
    } else if (board[0][2] === 'X' && board[1][2] === ' ' && board[2][2] === 'X') {
      ticTacToe(1, 2);
    } else if (board[0][2] === ' ' && board[1][2] === 'X' && board[2][2] === 'X') {
      ticTacToe(0, 2);
    }
    //block win diagonal
    else if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === ' ') {
      ticTacToe(2, 2);
    } else if (board[0][0] === 'X' && board[1][1] === ' ' && board[2][2] === 'X') {
      ticTacToe(1, 1);
    } else if (board[0][0] === ' ' && board[1][1] === 'X' && board[2][2] === 'X') {
      ticTacToe(0, 0);
    } else if (board[2][0] === 'X' && board[1][1] === 'X' && board[0][2] === ' ') {
      ticTacToe(0, 2);
    } else if (board[2][0] === 'X' && board[1][1] === ' ' && board[0][2] === 'X') {
      ticTacToe(1, 1);
    } else if (board[2][0] === ' ' && board[1][1] === 'X' && board[0][2] === 'X') {
      ticTacToe(2, 0);
    }
    //take corner
    else if (board[0][0] === ' ' && ((board[0][1] === 'X' || board[1][0] === 'X' || board[1][2] === 'X') && board[2][2] !== 'X')) {
      ticTacToe(2, 2);
    } else if (board[0][2] === ' ' && ((board[0][1] === 'X' || board[1][2] === 'X' || board[2][1] === 'X') && board[2][0] !== 'X')) {
      ticTacToe(2, 0);
    } else if (board[2][2] === ' ' && ((board[1][2] === 'X' || board[2][1] === 'X' || board[1][0] === 'X') && board[0][0] !== 'X')) {
      ticTacToe(0, 0);
    } else if (board[2][0] === ' ' && ((board[2][1] === 'X' || board[1][0] === 'X' || board[0][0] === 'X') && board[0][2] !== 'X')) {
      ticTacToe(0, 2);
    } else if (board[0][0] === ' ' && board[1][1] === 'X') {
      ticTacToe(0, 0);
    }
    //take optimal side 
    else if (board[0][1] === ' ' && ((board[0][0] === 'X' || board[0][2] === 'X') && board[2][1] !== 'X')) {
      ticTacToe(0, 1);
    } else if (board[1][2] === ' ' && ((board[0][2] === 'X' || board[2][2] === 'X') && board[1][0] !== 'X')) {
      ticTacToe(1, 2);
    } else if (board[2][1] === ' ' && ((board[0][2] === 'X' || board[0][0] === 'X') && board[0][1] !== 'X')) {
      ticTacToe(2, 1);
    } else if (board[1][0] === ' ' && ((board[2][2] === 'X' || board[0][2] === 'X') && board[1][2] !== 'X')) {
      ticTacToe(1, 0);
    }
    //no other moves
    else if (board[0][0] === 'X' || board[0][2] === 'X' || board[2][2] === 'X' || board[2][0] === 'X') {
      row = Math.floor(Math.random() * 3);
      column = Math.floor(Math.random() * 3);
      ticTacToe(row, column);
    } else {
      row = Math.floor(Math.random() * 3);
      column = Math.floor(Math.random() * 3);
      ticTacToe(row, column);
    }
  }
}

function ticTacToe(row, column) {
  checkForWin();
  if (!(row == 0 || row == 1 || row == 2) || !(column == 0 || column == 1 || column == 2)) {
    console.log('Invalid entry, please try again')
    return;
  }
  if (board[row][column] !== ' ') {
    console.log('That spot appears taken, please try again');
    return;
  } else {
    checkForWin();
    board[row][column] = playerTurn;
    checkForWin();
    changePlayer();
    AImove(playerTurn, row, column);
    checkForWin();
  }
  // checkForWin();
  // changePlayer();
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', function () {
    it('should place mark on the board', function () {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [' ', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should alternate between players', function () {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ['O', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should check for vertical wins', function () {
      board = [
        [' ', 'X', ' '],
        [' ', 'X', ' '],
        [' ', 'X', ' ']
      ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', function () {
      board = [
        ['X', 'X', 'X'],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', function () {
      board = [
        ['X', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', 'X']
      ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', function () {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}

function masterMove(board, blankBoard, playerTurn, row, column) {
  if (board === blankBoard) {
    ticTacToe(0, 0);
  }
  if (board === [['O', ' ', ' '],['X', ' ', ' '],[' ', ' ', ' ']] || board === [['O', ' ', ' '],[' ', ' ', ' '],['X', ' ', ' ']] ) {
    ticTacToe(0, 2);
  }else if (board === [['O', 'X', ' '],[' ', ' ', ' '],[' ', ' ', ' ']] || board === [['O', ' ', 'X'],[' ', ' ', ' '],[' ', ' ', ' ']]){
    ticTacToe(1, 0);
  }
}