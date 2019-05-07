'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker {
  constructor(color) {
    if (color === 'white') {
      this.symbol = '○';
    } else {
      this.symbol = '●';
    }
  }
}

class Board {
  constructor() {
    this.grid = []
    this.checkers = []
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
    // will create the pieces and adding them to array of checkers
    for (let row = 0; row < 8; row++) {
      // loop through board in order to find spots where checkers need to be placed
      if (row != 3 && row != 4) {
      for (let column = 0; column < 8; column++) {
        if (row == 0 || row == 2) {
          if (column % 2 != 0) {
            this.checkers.push(new Checker('white'))
            this.grid[row][column] = new Checker('white')
          }
        } else if (row == 1) {
          if (column % 2 == 0) {
            this.checkers.push(new Checker('white'))
            this.grid[row][column] = new Checker('white')
          }
        } else if (row == 5 || row == 7) {
          if (column % 2 == 0) {
            this.checkers.push(new Checker('black'))
            this.grid[row][column] = new Checker('black')
          }
        } else if (row == 6) {
          if (column % 2 != 0) {
            this.checkers.push(new Checker('black'))
            this.grid[row][column] = new Checker('black')
          }
        }
      }
    }
    }
  }

  killChecker(position) {
    let position = this.board.selectChecker(whichPiece.charAt(0), whichPiece.charAt(1))
    const deadChecker = this.checkers.indexOf(position)
    this.checkers.splice(deadChecker)
    this.board.grid[whichPiece.charAt(0)][whichPiece.charAt(1)] = null

  }

  selectChecker(row, column) {
    console.log(row, column);
    return this.grid[row][column];
  }
}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers(); // adding pieces before the game starts
  }
  moveChecker(whichPiece, toWhere) {
    let checker = this.board.selectChecker(whichPiece.charAt(0), whichPiece.charAt(1))
    this.board.grid[whichPiece.charAt(0)][whichPiece.charAt(1)] = null
    this.board.grid[toWhere.charAt(0)][toWhere.charAt(1)] = checker
    if (Math.abs(whichPiece.charAt(0) - toWhere.charAt(0)) === 2) {
      const killPosition = this.board.selectChecker((Math.abs((whichPiece.charAt(0) + toWhere.charAt(0)) / 2)) , (Math.abs(((whichPiece.charAt(1) + toWhere.charAt(1)) / 2))))
      killChecker(killPosition);
    }
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
