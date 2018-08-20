'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* WHITEBOARD

Checkers - 8x8

METHODS:
  movePiece(begCoord, endCoor)
    - can move forward and backwards from start of game
    - pieces have to move diagonally
    - takes begining and end coordinates as pararms
  checkForWin()
    - check to see if all pieces are gone for a team
    - keep a counter of all pieces that have been jumped
  isMoveLegal()
    - is the end position not occupied
  isValidInput()
    - check to make sure the move coordinates entered are inside the board
  killPiece()
    - if an opponent piece is jumped, remove it from the board
  resetGame()
    - reset gloabl vars: board, playerTurn
  initBoard()
    - initially setup the board
  switchPlayer()
    - will toggle current active player
    - refer to tic tac toe app to see how this was implemented

 */

function Checker() {
  // Your code here
}

class Board {
  constructor() {
    this.grid = []
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }

  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          // rowOfCheckers.push(this.grid[row][column].symbol);
          rowOfCheckers.push(this.grid[row][column]);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }


  initializeGrid() {
    // set initial pieces for first part of grid
    // loop over first 3 rows
    for (let row1=0; row1<3; row1++) {
      // loop over cols of first 3 rows
      for (let col1=0; col1<8; col1++) {
        // populate first 3 rows of board
        if (col1 % 2 === 1 && row1 % 2 === 0) {
          this.grid[row1][col1] = 'R';
        } else if (col1 % 2 === 0 && row1 % 2 === 1) {
          this.grid[row1][col1] = 'R';
        }
      }
    }

    // set initial pieces for latter half of the grid
    // loop over rows 5-7
    for (let row2=5; row2<8; row2++) {
      // loop over cols of rows 5-7
      for (let col2=0; col2<8; col2++) {
        // populate rows 5-7 of board
        if(col2 % 2 === 0 && row2 % 2 === 1) {
          this.grid[row2][col2] = 'B';
        } else if (col2 % 2 === 1 && row2 % 2 === 0) {
          this.grid[row2][col2] = 'B';
        }
      }
    }
  }
}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    // initialize game pieces
    this.board.initializeGrid();
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
