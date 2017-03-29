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

function resetBoard(){
 board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
return board;
}

/*function checkCell(){
  var i = 0;
    for(i = 0; i <= board.length; i++){
      if(board[i][i] !== '' ){
        baord[i][i] = board
        return getPrompt();
      }
    return 0;
  }
};*/



var playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}
/* Test for horizontal win by parsing through each cell in the board[][] array, looking for playerTurn value
   within that array cells, if the value returns true on three horizontal cells in the same row, exit the 
   function with return true; The value of horizontallWin() is now the boolean value of true*/
function horizontalWin() {
  // Your code here
  if(
   (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) ||
   (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) || 
   (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)
  ){ 
 return true;
  }
}


/*Do the same test as horizontalWin() here, but this time, change the cells you search to that 
of the columns, exit the function by returning true when the value of playerTurn exists in the 
 three matching vertical cells*/
function verticalWin() {
  // Your code here
  if(
   (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) ||
   (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) ||
   (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)
  ){
 return true;
  }
return false;


/* Do the same as the first two tests, only change will be the cells we are searching. I searched
   from top left to bottom right diagonal, and bottom left , top right diagonal. Once again return
  true to exit the function */
function diagonalWin() {
  // Your code here
  if(
   (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) ||
   (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn)
  ){
 return true;
  }
return false;
}
/* Test to see if any of the winning functions above are true, In the event they are, out to the console
   the player which has won. to exit this function, return the boolean value of true */
function checkForWin() {
  // Your code here
  if(horizontalWin() === true || verticalWin() === true || diagonalWin() === true){
     console.log('Player ' + playerTurn + ' Won!');
  resetBoard();
return true;
  }

return false;
}

/* This is where the game will be played. playerTurn is default as 'X', assign it to the board and
  use the check for win function to test if the game has a winner, otherwise, change playerTurn to
  'O' and continue to play Tic Tac Toe */
function ticTacToe(row, column) {
  // Your code here
    board[row][column] = playerTurn; // add player to the board
    
    checkForWin() // test for a winning combination
    //checkCell();
    playerTurn = (playerTurn === 'X') ? 'O' : 'X'; // switch between players
    
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