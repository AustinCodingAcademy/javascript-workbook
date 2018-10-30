'use strict';

// Player 1 selects tile
// Check to see if valid selection = isValidPick()
// Check for win = checkForwin()
// If valid and no win, change players (and look for empty spots) switchPlayers() (if switch players with no moves left, draw!)
//(or set a counter to add when you switch players - also do checkForWin after switch players 4 times(?))



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
let isItAWinner = false;

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

const isValidPick = (row,column) =>{
  return board[row][column] == ' ';
}

const isEntryValid = (row,column) =>{
  return row >= 0 && row <= 2 && column >= 0 && column <= 2;
}

const switchPlayers = () =>{
  if (playerTurn == 'X'){
    playerTurn = 'O'
  }else{
    playerTurn = 'X';
  }
}

//try array.every() for horiz win once get working properly
const horizontalWin = () => {
  for(let x=0;x<3;x++){
    if(board[x][0] == board[x][1] && board[x][1] == board[x][2] && board[x][1] != ' '){
      isItAWinner = true;
      console.log('horiz win')
    }
  }
  return isItAWinner;
}

const verticalWin = () => {
  for(let y=0;y<3;y++){
    if(board[0][y] == board[1][y] && board[1][y] == board[2][y] && board[1][y] != ' '){
      isItAWinner = true;
      console.log('vert win')
    }
  }
  return isItAWinner;
}

const diagonalWin = () => {
  if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[1][1] != ' ' || board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[1][1] != ' '){
    isItAWinner = true;
    console.log('diag win');
  }
  return isItAWinner;
}

const checkForWin = () => {
  return horizontalWin() || verticalWin() || diagonalWin()
}

const checkForDraw = ()=>{
  return !board.every((boardArray)=>{
    return boardArray.every((IndividualArray)=>{
      return IndividualArray == ' ';
    });
  });
}

const resetBoard = () =>{
  board.forEach((x,index) => {
    board[index].fill(' ');
  });
  //when running through the foreach, and not using the element value, still need to put in a placeholder, x, in order to access the index, right?
  playerTurn = 'X';
  console.log("C'mon! Let's play again!");
}

const ticTacToe = (row,column) => {
  if (isEntryValid(row,column) && isValidPick(row,column)){
    board[row][column] = playerTurn;
    if(checkForWin()){
      console.log(playerTurn + ' wins!');
      isItAWinner = false;
      resetBoard();
    }else if(checkForDraw){
      console.log("It's a draw!")
      resetBoard();
    }else {
      switchPlayers();
    }
  }else console.log('pick a number between 0 and 2!!')
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

// const resetBoard = () =>{
//   playerTurn = 'X';
//   for(z=0;z<board.length-1;z++){
//     board[i].fill(' ');
//   }
// }

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
