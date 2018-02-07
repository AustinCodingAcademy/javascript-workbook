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
let turns = 0;//count turns so we only start checking for win at 5
let win = false;//check this instead of checkForWin() to call annouceResult()

const printBoard=()=> {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}


// Whiteboard:
// 1. from ticTacToe() call a function to verify that user input is valid (0,1 or 2) by using search(), and that the spot is avaialbe-if not valid throw error
// 2. if the input is valid, move on to droping X or O using splice()
// 4. after 5 moves, run checkForWin() after each turn, which will call all 3 functions to determin if someone has won
// 5. Buld conditional statements for all 3 win functions, if a winner, retrun to ticTacToe(), and call anoucneWinner() to log the winner OR if there have been 9 turns and no winner, annouce a tie
// 6. create a new prompt question to start a new game, then call resetGame() to reset everything

const isIputValid=(row, column)=> {
  const validInputs = /[012]/;//search values for accetable inputs
  if (row.search(validInputs) === 0 && row.length === 1 &&//verify that row is between 0-2, and only 1 character
      column.search(validInputs) === 0 && column.length === 1 &&//verify that column is between 0-2, and only 1 character
      board[row][column] === ' ') {//verify the spot is open on the board
    return true//if all tests pass, return true to proceed with tictacToe();
  }
}

const horizontalWin=()=> {//checks if every value of any 2nd level array = current player
  if (board[0].every(x => x === playerTurn) ||
      board[1].every(x => x === playerTurn) ||
      board[2].every(x => x === playerTurn)){
    win = true;
    return true
  }
}

const verticalWin=()=>{
  if (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn ||
      board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn ||
      board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn) {
    win = true;
    return true
  }
}

const diagonalWin=()=> {
  if (board[1][1] === playerTurn){
    if (board[0][0] === playerTurn && board[2][2] === playerTurn ||
        board[0][2] === playerTurn && board[2][0] === playerTurn) {
      win = true;
      return true
    }
  }
}

const checkForWin=()=> {
  if (horizontalWin() ||
      diagonalWin() ||
      verticalWin()) {
    win = true;
    return true
  }
}

const announceResult=()=> {
  printBoard();//first print the resulting winning/tie board
  if (turns === 9) {//if no win and there have been 9 turns, it's a tie
    console.log(`It's a tie!`);
  }else{
    console.log(`Player ${playerTurn} wins!!!`);//otherwise annouce which player won
  }
}

const ticTacToe=(row, column)=> {
  if (isIputValid(row, column) === true){//call isInputValid() to be sure it's true, if so proceed
    turns++;//itterate turns each turn
    board[row].splice(column, 1, playerTurn)//remove space and splice in playerTurn (X or O) at rowcolumn

    if (turns >=5){//only check for a win once there have been 5 turns since no one could win prior to 5
      checkForWin();
    }

    if (win === false){//only change palyers IF there was not a win to avoid annoucing wrong winner
      if (playerTurn === 'X'){//change players
        playerTurn = 'O'
      }else{
        playerTurn = 'X'
      }
    }

    if (win === true || turns === 9){//check first if someone has won or it's a tie to call annouceResult()
      announceResult();
      rl.question('Press Enter to start a new game: ', () => {// if win or tie, prompt user to start new game
        resetGame();
      });
    }else{//else next turn
      getPrompt();
    }

  }else{//if isInputValid() is false, throw error and call getPrompt()

    // console.log('\n');
    console.log('\n \u{26a0} Invalid Input!!!: \n   Enter a number between 0-2 for row and column,\n   and make sure the spot is not already taken. \n');
    getPrompt();
  }
}

const resetGame=()=> {//resets entire game, resets all variables to start values
  win = false;
  turns = 0;
  playerTurn = 'X';
  board = [[' ', ' ', ' '],
           [' ', ' ', ' '],
           [' ', ' ', ' ']];

  getPrompt();
}

const getPrompt=()=> {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
    });
  });

}

//<********************* Tests ************************>

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
    it('detect a tie', () => {
      board = [ ['X', 'O', 'X'],['X', 'X', 'O'],['O', 'X', 'O'] ];
      assert.equal(checkForWin(), undefined);
    });
    it('prevent invalid inputs', () => {
      ticTacToe(6, 'cat');
      assert.equal(isInputValid(), undefined);
    });
  });
} else {
  getPrompt();
}

// board = [
//   ['0-0', '0-1', '0-2'],
//   ['1-0', '1-1', '1-2'],
//   ['2-0', '2-1', '2-2']
// ];
