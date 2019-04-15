'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [ // 3 arrays of 3 items all within 1 array
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X'; // game marker

function printBoard() { // how the board is printed to the console and appears
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | ')); // .join is placing the | inbetween array items 
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  for (let i = 0; i < board.length; i++) {
    // loops through the set of arrays in board changing the row #
    if(board[i][0] == board[i][1] && board[i][0] == board[i][2] && board[i][0] == playerTurn) {
      return true
    }
  } return false
}

function verticalWin() {
  for (let i = 0; i < board[0].length; i++) {
    // looping through just the first array in board to test if a column matches
    if (board[0][i] == playerTurn && board[0][i] == board[1][i] && board[0][i] == board[2][i]) {
      return true
    }
  } return false
}

function diagonalWin() {
  // nested if statements. middle box must be included. if so do opposite corners match
  if (board[1][1] == playerTurn) {
    if (board[0][0] == playerTurn && board [2][2] == playerTurn) {
      return true
    } else if (board[0][2] == playerTurn && board[2][0] == playerTurn) {
      return true
    } else return false;
  } else return false;
}

function checkForWin() {
  // if any of the win finctions pass then the game will declare a winner
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    console.log(playerTurn + " is the WINNER!!!")
    return true
  } else return false
}

function ticTacToe(row, column) {
  // if the coordinate is empty then the payer can mark the spot
  if (board[row][column] === " ") { //board [first array] [second array]
    board[row][column] = playerTurn //when a coordinate is selected it will be marked
  } else {
    // if the coordinate is already filled the player must choose another spot
    console.log("Invalid move. Spot already taken. Please select another spot.")
    return playerTurn //this calls player turn for the 2nd turn so the player doesn;t lose a turn for choosing an invalid spot
    }
  checkForWin(); //after each coordinate is marked it will then check against the win finctions to see if the game should continue
  if (playerTurn === 'X') {
    playerTurn = 'O'; // immediately changes player turn after player makes their mark
  } else {
    (playerTurn = 'X')
  }
}

function getPrompt() {
  if (checkForWin() === true) {
    console.log("Game Over") // ending the game to the best of my abaility at this point
  } else {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");
    rl.question('row: ', (row) => {
      rl.question('column: ', (column) => {
        ticTacToe(row, column);
        getPrompt();
      });
    });
  }
}

// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => { // simulating actual live game play so existing mark must remain and alternate turns
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
      ticTacToe(0, 1);
      assert.deepEqual(board, [ [' ', 'O', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
      ticTacToe(2, 2);
      assert.deepEqual(board, [ [' ', 'O', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ]);
    });
    it('should alternate between players', () => { // simulating actual live game play so existing mark must remain and alternate turns
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', 'O', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ]);
      ticTacToe(2, 0);
      assert.deepEqual(board, [ ['O', 'O', ' '], [' ', 'X', ' '], ['X', ' ', 'X'] ]);
      ticTacToe(1, 2);
      assert.deepEqual(board, [ ['O', 'O', ' '], [' ', 'X', 'O'], ['X', ' ', 'X'] ]);
    });
    it('should check for vertical wins', () => {
      board = [ ['X', ' ', ' '], ['X', ' ', ' '], ['X', ' ', ' '] ];
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      board = [ [' ', ' ', 'X'], [' ', ' ', 'X'], [' ', ' ', 'X'] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      board = [ [' ', ' ', ' '], ['X', 'X', 'X'], [' ', ' ', ' '] ];
      board = [ [' ', ' ', ' '], [' ', ' ', ' '], ['X', 'X', 'X'] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
      board = [ [' ', ' ', 'X'], [' ', 'X', ' '], ['X', ' ', ' '] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => { // won't pass until you make sure the function returns true for being true by manually writing it into the function
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
