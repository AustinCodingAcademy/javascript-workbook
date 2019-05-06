"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Checker {
  // Your code here
  constructor(color) {
    this.color = color;
    if (color === "white") {
      this.symbol = String.fromCharCode(0x125cb);
    } else {
      this.symbol = String.fromCharCode(0x125cf);
    }
  }
}

// const checker1 = new Checker('white');
// console.log(checker1);

class Board {
  constructor() {
    this.grid = [];
    this.checkers = [];
  }
  createCheckers() {
    // white positions array
    let whitePositions = [
      [0, 1],
      [0, 3],
      [0, 5],
      [0, 7],
      [1, 0],
      [1, 2],
      [1, 4],
      [1, 6],
      [2, 1],
      [2, 3],
      [2, 5],
      [2, 7]
    ];

    // black positions array
    let blackPositions = [
      [5, 0],
      [5, 2],
      [5, 4],
      [5, 6],
      [6, 1],
      [6, 3],
      [6, 5],
      [6, 7],
      [7, 0],
      [7, 2],
      [7, 4],
      [7, 6]
    ];

    // Instantiateed white/black checker from Checker class
    const whiteChecker = new Checker("white");
    const blackChecker = new Checker("black");

    // for loop to place white/black checkers on the board.
    for (let w = 0; w < whitePositions.length; w++) {
      const w0 = whitePositions[w][0];
      const w1 = whitePositions[w][1];
      this.grid[w0][w1] = whiteChecker;
      this.checkers.push(this.grid);
    }
    for (let b = 0; b < blackPositions.length; b++) {
      const b0 = blackPositions[b][0];
      const b1 = blackPositions[b][1];
      this.grid[b0][b1] = blackChecker;
      this.checkers.push(this.grid);
    }
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
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(" ");
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(" ");
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  // Your code here
  // Method to move a checker
  selectChecker(row, column) {
    return this.grid[row][column];
  }
}

class Game {
  constructor() {
    this.board = new Board();
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers();
  }
  moveChecker(start, end) {
    const xRow = start[0];
    const xCol = start[1];
    const yRow = end[0];
    const yCol = end[1];
    this.board.grid[yRow][yCol] = this.board.selectChecker(xRow, xCol);
    this.board.grid[xRow][xCol] = null;
    if(Math.abs(xRow - yRow) === 2) {
      
    }
  }
  killChecker(position) {
    const row = position[0];
    const col = position[1];
    this.checkers.splice(this.selectChecker(row, col), 1);
    this.grid[row][col] = null;
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question("which piece?: ", whichPiece => {
    rl.question("to where?: ", toWhere => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();

// Tests
if (typeof describe === "function") {
  describe("Game", () => {
    it("should have a board", () => {
      assert.equal(game.board.constructor.name, "Board");
    });
    it("board should have 24 checkers", () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe("Game.moveChecker()", () => {
    it("should move a checker", () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker("50", "41");
      assert(game.board.grid[4][1]);
      game.moveChecker("21", "30");
      assert(game.board.grid[3][0]);
      game.moveChecker("52", "43");
      assert(game.board.grid[4][3]);
    });
    it("should be able to jump over and kill another checker", () => {
      game.moveChecker("30", "52");
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
