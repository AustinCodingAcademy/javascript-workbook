'use strict';
alert("Hello pick X or O");

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
  if(board[0][0]=== playerTurn && board[0][1]===playerTurn && board[0][2]===playerTurn){
  return true;
} else if(board[1][0]=== playerTurn && board[1][1]===playerTurn && board[1][2]===playerTurn){
  return true;
} else if (board[2][0]=== playerTurn && board[2][1]===playerTurn && board[2][2]===playerTurn){
}
printWinner();
  return true;
  

}

function verticalWin() {
  if(board[0][0]=== playerTurn && board[1][0]===playerTurn && board[2][0]===playerTurn){
    return true;
  } else if(board[0][1]=== playerTurn && board[1][1]===playerTurn && board[2][1]===playerTurn){
    return true;
  } else if (board[2][0]=== playerTurn && board[1][2]===playerTurn && board[2][2]===playerTurn){
    {
  printWinner();
}

}return true;
}
function diagonalWin() {
  if(board[0][0]=== playerTurn && board[1][1]===playerTurn && board[2][2]===playerTurn){
    return true;
  } else if(board[0][2]=== playerTurn && board[1][1]===playerTurn && board[2][0]===playerTurn){
    return true;
 
  // Your code here
}
}
function checkForWin() {
  if(horizontalWin() || verticalWin() || diagonalWin()){
    console.log("you won");
    return true;
  }
  // Your code here
}

// function ticTacToe(row, column) {
//   if(playerTurn ==='X') {
//   board[row][column] = playerTurn;
//   playerTurn = 'O';
// } else if(playerTurn === 'O') {
//   board[row][column] = playerTurn;
//   playerTurn = 'X';
 
// }
function ticTacToe(row, column) {
    if (board[row][column] === ' ') {
      board[row][column] = playerTurn;
    } else {
      console.log('Try again! That place is already taken.');
      return playerTurn;
    }
checkForWin();
if (playerTurn == 'X') {
  playerTurn = 'O';
  let setX = document.getElementById('square'+row+column);
  setX.innerHTML = 'X';
  checkForWin();
  
}
else if (playerTurn == 'O') {
  playerTurn = 'X';
  let setO = document.getElementById('b'+row+column);
  setO.innerHTML = 'O';
  checkForWin();
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
var gameMarker = "O"
function changeMarkerToX(){
    gameMarker = "X";
   console.log("The x button was clicked!") 
}


function changeMarkerToO(){
     gameMarker = "O"
    console.log("The o button was clicked!") 
}

function placeMark(theId){
    console.log(theId)
    var square= document.getElementById(theId);
    console.log("square", square)
    square.innerHTML = gameMarker;

}
function printWinner() {
    let declareWinner = document.getElementById('board');
    let winText = document.getElementById('youWin');
    winText.innerHTML = playerTurn + ' WINS';
    declareWinner.style.pointerEvents = 'none';
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