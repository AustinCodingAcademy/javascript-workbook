"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Checker {
  // Your code here
  constructor(symbol, row, col) {
    this.symbol = symbol;
    this.row = row;
    this.col = col;
    this.isKing = false;
  }

  makeKing() {
    this.isKing = true;
    if (this.symbol === "x") {
      this.symbol = "X";
    } else {
      this.symbol = "O";
    }
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

  // Your code here
  createCheckers() {
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if ((row + col) % 2 === 1 && row < 3) {
          const newChecker = new Checker("x", row, col);
          this.grid[row][col] = newChecker;
          this.checkers.push(newChecker);
        } else if ((row + col) % 2 === 1 && row > 4) {
          const newChecker = new Checker("o", row, col);
          this.grid[row][col] = newChecker;
          this.checkers.push(newChecker);
        }
      }
    }
  }

  findPiece(whichPiece) {
    const coordinate = whichPiece.split("");
    const row = parseInt(coordinate[0]);
    const col = parseInt(coordinate[1]);
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

  isLegalMove(currentPiece, toWhere) {
    const coordinate = toWhere.split("");
    const newRow = parseInt(coordinate[0]);
    const newCol = parseInt(coordinate[1]);
    const oldRow = currentPiece.row;
    const oldCol = currentPiece.col;
    const validInputs = [0, 1, 2, 3, 4, 5, 6, 7];
    if (
      !validInputs.includes(newRow) ||
      !validInputs.includes(newCol) ||
      this.grid[newRow][newCol]
    ) {
      return false;
    } else if (currentPiece.isKing || currentPiece.symbol === "x") {
      if (
        newRow === oldRow + 1 &&
        (newCol === oldCol + 1 || newCol === oldCol - 1)
      ) {
        return true;
      } else if (
        this.grid[oldRow + 1][oldCol + 1] &&
        newRow === oldRow + 2 &&
        newCol === oldCol + 2
      ) {
        this.removePiece(this.grid[oldRow + 1][oldCol + 1]);
        return true;
      } else if (
        this.grid[oldRow + 1][oldCol - 1] &&
        newRow === oldRow + 2 &&
        newCol === oldCol - 2
      ) {
        this.removePiece(this.grid[oldRow + 1][oldCol - 1]);
        return true;
      } else {
        return false;
      }
    } else if (currentPiece.isKing || currentPiece.symbol === "o") {
      if (
        newRow === oldRow - 1 &&
        (newCol === oldCol + 1 || newCol === oldCol - 1)
      ) {
        return true;
      } else if (
        this.grid[oldRow - 1][oldCol + 1] &&
        newRow === oldRow - 2 &&
        newCol === oldCol + 2
      ) {
        this.removePiece(this.grid[oldRow - 1][oldCol + 1]);
        return true;
      } else if (
        this.grid[oldRow - 1][oldCol - 1] &&
        newRow === oldRow - 2 &&
        newCol === oldCol - 2
      ) {
        this.removePiece(this.grid[oldRow - 1][oldCol - 1]);
        return true;
      } else {
        return false;
      }
    }
  }

  movePiece(currentPiece, toWhere) {
    const coordinate = toWhere.split("");
    const newRow = parseInt(coordinate[0]);
    const newCol = parseInt(coordinate[1]);
    const oldRow = currentPiece.row;
    const oldCol = currentPiece.col;
    this.grid[newRow][newCol] = currentPiece;
    this.grid[oldRow][oldCol] = null;
    currentPiece.row = newRow;
    currentPiece.col = newCol;
    if (newRow === 7 || newRow === 0) {
      currentPiece.makeKing();
    }
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
  moveChecker(whichPiece, toWhere) {
    const currentPiece = this.board.findPiece(whichPiece);
    if (!currentPiece) {
      console.log("Invalid piece!");
      return null;
    }
    const isLegalMove = this.board.isLegalMove(currentPiece, toWhere);
    if (!isLegalMove) {
      console.log("Invalid destination!");
      return null;
    } else {
      this.board.movePiece(currentPiece, toWhere);
    }
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
