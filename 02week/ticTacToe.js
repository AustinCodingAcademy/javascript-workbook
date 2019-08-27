'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  if ((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn)
  || (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn)
  || (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)) {
    // console.log("Horizontal win.");
    return true;
  } 
}

function verticalWin() {
  if ((board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn)
  || (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn)
  || (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)) {
    // console.log("Vertical win.");
    return true;
  }else {
    return false;
  }
  
}

function diagonalWin() {
  if ((board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) 
  || (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn)) {
    // console.log("Diagonal win.");
    return true;
  }else {
    return false;
  }
}

function checkForWin() {
  if (verticalWin() === true || horizontalWin() === true || diagonalWin() === true) {
    return true;
  }else {
    return false;
  }
}

function ticTacToe(row, column) {
  
  // Check to see that index in the board is empty.
  if(board[row][column] === ' ') {
    if (row <= 2 && column <= 2){
      // Check to see that user input is less than or equal to 2.
      if (checkForWin() === true) {
        // Check if there's a win.
        console.log(`Player ${playerTurn} wins!`);
        console.log(' ');
        board = [
              [' ', ' ', ' '],
              [' ', ' ', ' '],
              [' ', ' ', ' ']
            ];
      } else {
        // assign X or Y to user input index
        board[row][column] = playerTurn;
        //switch user
        if (playerTurn === 'X') {
          playerTurn = 'O';
        } else if(playerTurn === 'O') {
          playerTurn = 'X';
        } 
      }
      
      
    }else {
      // User input is not index between 0-2
      console.log('Please enter a valid number.');
    }
  } else {
    // if index is not empty
    console.log('This spot is taken.');
  }
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

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
