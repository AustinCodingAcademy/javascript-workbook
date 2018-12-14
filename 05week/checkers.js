"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Board {
  constructor() {
    this.grid = [];
    this.checkers = [];
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push();
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
  // method to insert new Checkers to starting places
  placeCheckers() {
    // top player checkers
    for (let row = 0; row < 3; row++) {
      let startCol = 1;
      if (row === 1) startCol = 0;
      for (let column = startCol; column < 8; column += 2) {
        let newChecker = new Checker("B", row, column);
        this.grid[row][column] = newChecker;
        this.checkers.push(newChecker);
      }
    }

    // bottom player checkers
    for (let row = 5; row < 8; row++) {
      let startCol = 0;
      if (row === 6) startCol = 1;
      for (let column = startCol; column < 8; column += 2) {
        let newChecker = new Checker("R", row, column);
        this.grid[row][column] = newChecker;
        this.checkers.push(newChecker);
      }
    }
  }
}

// create a Checker class
class Checker {
  constructor(symbol, x, y) {
    this.symbol = symbol;
    this.x = x;
    this.y = y;
  }
}

class Game {
  constructor() {
    this.board = new Board();
  }
  start() {
    this.board.createGrid();
    this.board.placeCheckers();
  }
  moveChecker(whichPiece, toWhere) {
    // ensure legal move
    let x1 = whichPiece[0];
    let y1 = whichPiece[1];
    let x2 = toWhere[0];
    let y2 = toWhere[1];

    this.board.grid[x2][y2] = this.board.grid[x1][y1];
    this.board.grid[x1][y1] = null;
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
    xit("should be able to jump over and kill another checker", () => {
      game.moveChecker("30", "52");
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
