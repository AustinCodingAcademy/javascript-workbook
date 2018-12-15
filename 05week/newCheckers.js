"use strict";

const assert = require("assert");
const readline = require("readline");
const colors = require("colors");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const topSymbol = colors.red("\u00A9");
const bottomSymbol = colors.white("\u00A9");

//user input errors
const USER_ERROR_1 = "Input too long and/or not a number.";
const USER_ERROR_2 = "Input must be between 00-77.";

// move errors
const MOVE_ERROR_0 = "has no checker.";
const MOVE_ERROR_1 = "cannot move more than 2 spaces at a time.";
const MOVE_ERROR_2 = "cannot to a space that is already occupied.";
const MOVE_ERROR_3 = "cannot move in a straight line.";
const MOVE_ERROR_4 = "is not a king, therefore cannot move backwards.";

//jump/kill errors
const KILL_ERROR_1 = "You can't jump you're own checkers idiot.";

class Checker {
  constructor(color, symbol, number) {
    this.color = color;
    this.symbol = symbol;
    this.number = number;
    this.isKing = false;
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
      for (let col = 0; col < 8; col++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our col numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let col = 0; col < 8; col++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][col]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][col].symbol);
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

  // your code here
  insertCheckers(startRow, color, symbol) {
    let checkerCount = 1;
    for (let row = startRow; row < startRow + 3; row++) {
      for (let col = row % 2 ? 0 : 1; col < 8; col += 2) {
        let checker = new Checker(color, symbol, checkerCount);
        this.grid[row][col] = checker;
        this.checkers.push(checker);
        checkerCount++;
        console.log(checker);
        // this.checkers.push(newChecker);
      }
    }
  }

  placeCheckers() {
    this.insertCheckers(0, "red", topSymbol);
    this.insertCheckers(5, "white", bottomSymbol);
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
  checkInput(whichPiece, toWhere) {
    // catch all for user input errors
    if (
      isNaN(whichPiece) ||
      isNaN(toWhere) ||
      whichPiece.length != 2 ||
      toWhere.length != 2
    ) {
      console.log(USER_ERROR_1);
      return false;
    } else if (
      parseInt(whichPiece) < 0 ||
      parseInt(toWhere) < 0 ||
      parseInt(whichPiece) > 77 ||
      parseInt(toWhere) > 77
    ) {
      console.log(USER_ERROR_2);
      return false;
    } else return true;
  }
  moveChecker(whichPiece, toWhere) {
    if (!this.checkInput(whichPiece, toWhere)) return;
    else {
      // grid coordinates
      let originY = parseInt(whichPiece[0]);
      let originX = parseInt(whichPiece[1]);
      let targetY = parseInt(toWhere[0]);
      let targetX = parseInt(toWhere[1]);

      if (!this.checkForValidMove(originY, originX, targetY, targetX)) return;
      else {
        this.actuallyMoveChecker(originY, originX, targetY, targetX);
      }
    }
  }
  checkForValidMove(y1, x1, y2, x2) {
    let distanceX = x2 - x1;
    let distanceY = y2 - y1;
    let checkerToMove = this.board.grid[y1][x1];
    let targetToOccupy = this.board.grid[y2][x2];

    // no checker to move
    if (!checkerToMove) {
      console.log("(" + y1 + "," + x1 + ")", MOVE_ERROR_0);
      return false;
    }

    // moved too far
    if (distanceX > 2 || distanceY > 2 || distanceX < -2 || distanceY < -2) {
      console.log(checkerToMove.symbol, MOVE_ERROR_1);
      return false;
    }

    // moved onto occupied space
    if (targetToOccupy) {
      console.log(checkerToMove.symbol, MOVE_ERROR_2);
      return false;
    }

    // didn't move diagonally
    if (y1 === y2 || x1 === x2) {
      console.log(checkerToMove.symbol, MOVE_ERROR_3);
      return false;
    }

    // red/white non-king tried to move up/down
    if (!checkerToMove.isKing) {
      if (checkerToMove.color === "white") {
        if (distanceY > 0) {
          console.log(checkerToMove.symbol, MOVE_ERROR_4);
          return false;
        }
      } else if (distanceY < 0) {
        console.log(checkerToMove.symbol, MOVE_ERROR_4);
        return false;
      }
    }

    return true;
  }
  actuallyMoveChecker(y1, x1, y2, x2) {
    let killerColor = this.board.grid[y1][x1].color;
    let distanceX = x2 - x1;
    let distanceY = y2 - y1;

    this.board.grid[y2][x2] = this.board.grid[y1][x1];
    this.board.grid[y1][x1] = null;

    if (distanceY > 1 && distanceX > 1)
      this.killChecker(y2 - 1, x2 - 1, killerColor);
    if (distanceY < -1 && distanceX > 1)
      this.killChecker(y2 + 1, x2 - 1, killerColor);
    if (distanceY > 1 && distanceX < -1)
      this.killChecker(y2 - 1, x2 + 1, killerColor);
    if (distanceY < -1 && distanceX < -1)
      this.killChecker(y2 + 1, x2 + 1, killerColor);
  }
  killChecker(y, x, killerColor) {
    let victimColor = this.board.grid[y][x].color;
    if (victimColor !== killerColor) {
      this.board.grid[y][x] = null;
      this.board.checkers.pop();
    } else {
      console.log(KILL_ERROR_1);
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
