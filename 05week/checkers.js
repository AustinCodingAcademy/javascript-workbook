'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker {
  // Your code here
  constructor(symbol, row, col){
    this.symbol = symbol;
    this.row= row;
    this.col = col;

  }
}

class Board {
  constructor() {
    this.grid = []
    this.checkers = []
  }
  // creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows of null values
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of null values
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // adding our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece)
        if (this.grid[row][column]) {
          // push the symbol of the checker in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
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


  // Your code here
createCheckers() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      // add the row and col coordinates and divide the sum by 2. if there is a remainder
      // of 1 && the row value is less than 3, push an 'x' into that coordinate of the array. 
      if ((row + col) % 2 === 1 && row < 3) {
        const newChecker = new Checker("x", row, col);
        this.grid[row][col] = newChecker;
        this.checkers.push(newChecker);
        // add the row and col coordinates and divide the sum by 2. if there is a remainder
        // of 1 and the row value is greater than 4, push an 'o' into that coordinate of the array.
      } else if ((row + col) % 2 === 1 && row > 4) {
        const newChecker = new Checker("o", row, col);
        this.grid[row][col] = newChecker;
        this.checkers.push(newChecker);
      }
    }
  }
}

findPiece(coordinate) {
  const row = coordinate[0];
  const col = coordinate[1];
  const currentPiece = this.checkers.find(checker => {
    return checker.row === row && checker.col === col;
  });
  return currentPiece;
}

removePiece(currentPiece) {
  const row = currentPiece.row;
  const col = currentPiece.col;
  this.grid[row][col] = null;
  const index = this.checkers.indexOf(currentPiece);
  this.checkers.splice(index, 1);
}
}



class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
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

/* 
-create the board dimensions
-lay all pieces on the board
-be able to move pieces
-be able to kill another piece
*/