"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Checker() {
  // Your code here
}

class CheckerPiece {
  constructor(checker) {
    this.symbol = checker;
    game.board.checkers.push(this.symbol);
  }
}

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
  // Populate Board with Checkers
  populateBoard() {
    for (let row = 0; row < 8; row++) {
      for (let column = 0; column < 8; column++) {
        if ((row === 0 || row === 2) && column % 2 === 1) {
          this.grid[row][column] = new CheckerPiece("b");
        } else if (row === 1 && column % 2 === 0) {
          this.grid[row][column] = new CheckerPiece("b");
        } else if ((row === 5 || row === 7) && column % 2 === 0) {
          this.grid[row][column] = new CheckerPiece("r");
        } else if (row === 6 && column % 2 === 1) {
          this.grid[row][column] = new CheckerPiece("r");
        }
      }
    }
    // console.log(`this.checkers array: `, this.checkers);
  }
}

class Game {
  constructor() {
    this.board = new Board();
  }
  start() {
    this.board.createGrid();
    this.board.populateBoard();
  }

  moveChecker(whichPiece, toWhere) {
    const whichPieceSplit = whichPiece.trim().split("");
    const toWhereSplit = toWhere.trim().split("");

    // Set toWhereSplit = WhichPieceSplit in Grid
    this.board.grid[toWhereSplit[0]][toWhereSplit[1]] = this.board.grid[
      whichPieceSplit[0]
    ][whichPieceSplit[1]];

    // Set WhichPieceSPlit to null
    this.board.grid[whichPieceSplit[0]][whichPieceSplit[1]] = null;
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
