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

var playerTurn = 'X';

function togglePlayer() {
  playerTurn = (playerTurn === 'X') ? 'O' : 'X';
}

function clearBoard() {
  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
}

function printBoard() {
  console.log(' ');
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
  console.log(' ');
}

function horizontalWin() {
  // Your code here
  return (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) || (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) || (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)
}

function horizontalRowWin(row) {
  return (board[row][0] === playerTurn && board[row][1] === playerTurn && board[row][2] === playerTurn)
}

function verticalWin() {
  // Your code here
  return (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) || (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) || (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)
}

function diagonalWin() {
  // Your code here
  return (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) || (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn)
}

function checkForWin() {
  if (horizontalWin() === true) {
    // console.log('Player ' + playerTurn + ' Won!')
    return true
  } else if (verticalWin() === true) {
    // console.log('Player ' + playerTurn + ' Won!')
    return true
  } else if (diagonalWin() === true) {
    // console.log('Player ' + playerTurn + ' Won!')
    return true
  } else {
    return false
  }
  // Your code here

}

var isSpaceAvailable = function(row, column) {
  if (board[row][column] === ' ') {
    return true;
  } else {
    return false;
  }
}


function ticTacToe(row, column) {
  // Your code here
  //Check for availability
  if (isSpaceAvailable(row, column)) {
    board[row][column] = playerTurn;
    if (checkForWin()) {
      return true;
    }
    togglePlayer()
  } else {
    console.log('that space is taken');
  }
  console.log(board[row][column]);
  return false;
}


function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      // If return true, game over
      if (ticTacToe(row, column)) {
        printBoard();
        console.log('Game Over ' + 'Player ' + playerTurn + ' Won!');
        rl.question('Do you want to play again? [y/n]', (playAgain) => {
          // If n, quit game
          if (playAgain === 'n') {
            console.log('Thanks for playing');
            process.exit();
            // Everythung but n, start over
          } else {
            clearBoard();
            getPrompt();
          }
        });
        // Continues if game not over
      } else {
        console.log("In getPrompt after ticTacToe");
        getPrompt();
      }

    });
  });
}




// Tests

if (typeof describe === 'function') {

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
  // ticTacToeApplication();

}
