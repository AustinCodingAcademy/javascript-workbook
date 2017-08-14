'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let PLAYER1 = '0';
let PLAYER2 = '1';

let PLAYER1_SET = [[1, 0], [3, 0], [5, 0], [7, 0],
                   [0, 1], [2, 1], [4, 1], [6, 1],
                   [1, 2], [3, 2], [5, 2], [7, 2]];

let PLAYER2_SET = [[0, 5], [2, 5], [4, 5], [6, 5],
                   [1, 6], [3, 6], [5, 6], [7, 6],
                   [0, 7], [2, 7], [4, 7], [6, 7]];


class Checker {
  constructor(symbol, row, col) {
    this.symbol = symbol;
    this.row = row;
    this.col = col;
  }

  updateChecker(row, col) {
    this.row = row;
    this.col = col;
  }

  toString() {
    console.log("symbol: " + this.symbol);
    console.log("row: " + this.row);
    console.log("col: " + this.col);
  }
}

class Board {
  constructor() {
    this.name = 'Board';
    this.grid = [];
    this.checkers = [];
    for (let i = 0; i < PLAYER1_SET.length; i++) {
      this.checkers.push(new Checker(PLAYER1, PLAYER1_SET[i][1], PLAYER1_SET[i][0]));
    }
    for (let i = 0; i < PLAYER2_SET.length; i++) {
      this.checkers.push(new Checker(PLAYER2, PLAYER2_SET[i][1], PLAYER2_SET[i][0]));
    }
  }

  // creates an 8x8 array, filled with null values
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

  setInitialGrid() {
    for (let i = 0; i < this.checkers.length; i++) {
      let row = this.checkers[i].row;
      let col = this.checkers[i].col;

      this.grid[row][col] = this.checkers[i];
    }
  }

  killChecker(row, col) {
    for (let i = 0; i < this.checkers.length; i++) {
      if (this.checkers[i].row === row && this.checkers[i].col === col) {
        this.checkers.splice(i, 1);
        break;
      }
    }
    this.grid[row][col] = null;
  }

  updateChecker(rowStart, colStart, rowEnd, colEnd) {
    this.grid[rowEnd][colEnd] = this.grid[rowStart][colStart];
    this.grid[rowStart][colStart] = null;

    for (let i = 0; i < this.checkers.length; i++) {
      if (this.checkers[i].row === rowStart && this.checkers[i].col === colStart) {
        this.checkers[i].updateChecker(rowEnd, colEnd);
      }
    }
  }

  // prints out the board
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

}


class Game {
  constructor() {
    this.board = new Board();
  }

  start() {
    this.board.createGrid();
    this.board.setInitialGrid();
    this.board.viewGrid();
  }

  moveChecker(checkerStart, checkerEnd) {
    let rowStart = parseInt(checkerStart[0]);
    let colStart = parseInt(checkerStart[1]);
    let rowEnd = parseInt(checkerEnd[0]);
    let colEnd = parseInt(checkerEnd[1]);

    if (!this.board.grid[rowStart][colStart]) {
      return;
    }
    if (this.board.grid[rowEnd][colEnd]) {
      return;
    }

    // Determine if jump operation
    if (Math.abs(rowStart - rowEnd) === 2 && Math.abs(colStart - colEnd) === 2) {
      let rowMiddle = Math.min(rowStart, rowEnd) + 1;
      let colMiddle = Math.min(colStart, colEnd) + 1;

      if (!this.board.grid[rowMiddle, colMiddle]) {
        return;
      }

      this.board.killChecker(rowMiddle, colMiddle);
    }

    this.board.updateChecker(rowStart, colStart, rowEnd, colEnd);

    this.board.viewGrid();
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

  describe('Game.moveChecker()', function() {
    it('should move a checker', function() {
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
