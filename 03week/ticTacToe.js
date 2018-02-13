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

// create a player and turnCounter variables
let player = "X";
let turnCounter = 1

const printBoard = () => {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

// write 3 functions that take in one argument (player) which is either x or o and checks for posible
// wins based if certain combinations of board array values are the same.

const horizontalWin = () => {
  if((board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") ||
     (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X") ||
     (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X")){
     return true
  }else if((board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O") ||
     (board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O") ||
     (board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O")){
     return true
   }
}

const verticalWin = () => {
  if((board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") ||
     (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") ||
     (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X")){
     return  true
  } else if((board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O") ||
     (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O") ||
     (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O")){
     return  true
   }
}

const diagonalWin = () => {
  if((board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") ||
     (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X")){
     return true
  }else if((board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") ||
     (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O")){
     return true
   }
}

//write a function with no argument to be called back later, that returns the winner and prints the board
// that is if there is a winner. if all the spots are filled and there is no winner function returns a tie
//and prints the board
const checkForWin = () => {
  if(diagonalWin() || verticalWin() || horizontalWin()){
    return true
  }else if (diagonalWin() || verticalWin() || horizontalWin()){
    return true
  }else if(turnCounter > 9) {
    return "tie"
  }
}
//write a function that alternates the player using the turn counter variable to set a value "X" or "O" to
//the variable player
const alternatePlayers = () => {
  if(turnCounter % 2 === 0){
    player = "O"
  }else {
    player = "X"
  }
}

//write a function that takes two arguments which specify the idex value in the one of the 3 arrays in
// the board array. calls back the alternating player function and sets the specified index of the board
//array to the same value of the player variable. then adds 1 to turnCounter
// if the turn counter is greater than or equal to 5 check for a winner
const ticTacToe = (row, column) => {
  alternatePlayers()
  board[row][column] = player
  turnCounter ++
  if(turnCounter >= 5){
    checkForWin();
    }
}
// ticTacToe(0,0)//x
// ticTacToe(1,1)//o
// ticTacToe(0,2)//x
// ticTacToe(0,1)//o
// ticTacToe(1,2)//x
// ticTacToe(2,2)//o
// ticTacToe(2,1)//x
// ticTacToe(1,0)//o
// ticTacToe(2,0)//x




function getPrompt() {
  printBoard();
  console.log("It's Player " + player + "'s turn.");
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
