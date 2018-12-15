"use strict";

const assert = require("assert");
const readline = require("readline");
const colors = require("colors");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// checker symbols
const topSymbol = colors.red("\u00A9");
const bottomSymbol = colors.white("\u00A9");

// return codes
const STANDARD_MOVE = 1;
const JUMP_DOWN_LEFT = 2;
const JUMP_DOWN_RIGHT = 3;
const JUMP_UP_LEFT = 4;
const JUMP_UP_RIGHT = 5;
const WRONG_TURN = -1;
const INVALID_MOVE = -2;

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
        let newChecker = new Checker(column, row);
        this.grid[row][column] = newChecker;
        this.checkers.push(newChecker);
      }
    }

    // bottom player checkers
    for (let row = 5; row < 8; row++) {
      let startCol = 0;
      if (row === 6) startCol = 1;
      for (let column = startCol; column < 8; column += 2) {
        let newChecker = new Checker(column, row);
        this.grid[row][column] = newChecker;
        this.checkers.push(newChecker);
      }
    }
  }
}

// create a Checker class
class Checker {
  constructor(col, row) {
    this.col = col;
    this.row = row;

    // top checkers
    if (row < 3) {
      this.symbol = topSymbol;
    }

    // bottom checkers
    if (row > 4) {
      this.symbol = bottomSymbol;
    }
  }
}

class Game {
  constructor() {
    this.board = new Board();
  }
  start() {
    this.board.createGrid();
    this.board.placeCheckers();
    this.turnSymbol = bottomSymbol;
    this.turnNumber = 1;
  }
  nextTurn() {
    this.turnNumber++;
    if (this.turnSymbol === bottomSymbol) this.turnSymbol = topSymbol;
    else this.turnSymbol = bottomSymbol;
  }
  moveChecker(whichPiece, toWhere) {
    // ensure valid input
    if (
      !parseInt(whichPiece, 10) ||
      !parseInt(toWhere, 10) ||
      whichPiece.length != 2 ||
      toWhere.length != 2
    )
      return colors.red(
        "ERROR: Not of format 'yx' , where y = row number and x = column nummber."
      );

    // coordinates
    let originY = whichPiece[0];
    let originX = whichPiece[1];
    let targetY = toWhere[0];
    let targetX = toWhere[1];
    let victimY = null;
    let victimX = null;

    // grid locations
    let origin = this.board.grid[originY][originX];
    let target = this.board.grid[targetY][targetX];
    let victim = null;

    // symbol of checker to move
    let symbol = null;
    if (origin) symbol = this.board.grid[originY][originX].symbol;

    let turnSymbol = this.turnSymbol;
    let move = checkMove(
      originY,
      originX,
      target,
      targetY,
      targetX,
      symbol,
      turnSymbol
    );

    switch (move) {
      case WRONG_TURN:
        let wrongSymbol = null;
        if (this.turnSymbol === bottomSymbol) wrongSymbol = topSymbol;
        else wrongSymbol = bottomSymbol;
        return "ERROR: It is not " + wrongSymbol + "'s turn.";
      case INVALID_MOVE:
        return colors.red(
          "ERROR: Cannot move from (" +
            originY +
            "," +
            originX +
            ") to (" +
            targetY +
            "," +
            targetX +
            ")."
        );
      case STANDARD_MOVE:
        this.board.grid[targetY][targetX] = this.board.grid[originY][originX];
        this.board.grid[originY][originX] = null;
        return colors.green(
          "Moved from (" +
            originY +
            "," +
            originX +
            ") to (" +
            targetY +
            "," +
            targetX +
            ")."
        );
      case JUMP_DOWN_LEFT:
        victimY = parseInt(originY) + 1;
        victimX = parseInt(originX) - 1;
        victim = this.board.grid[victimY][victimX];
        // valid jump
        if (victim.symbol === bottomSymbol) {
          // kill the victim!
          this.board.grid[victimY][victimX] = null;
          this.board.checkers.pop();
          // move the checker
          this.board.grid[targetY][targetX] = this.board.grid[originY][originX];
          this.board.grid[originY][originX] = null;
          return (
            "Jumped from (" +
            originY +
            "," +
            originX +
            ") to (" +
            targetY +
            "," +
            targetX +
            "). Killing (" +
            victimY +
            "," +
            victimX +
            ")."
          );
        } else
          return colors.red(
            "ERROR: " + this.turn + " cannout jump over " + victim.symbol
          );
      case JUMP_DOWN_RIGHT:
        victimY = parseInt(originY) + 1;
        victimX = parseInt(originX) + 1;
        victim = this.board.grid[victimY][victimX];
        // valid jump
        if (victim.symbol === bottomSymbol) {
          // kill the victim!
          this.board.grid[victimY][victimX] = null;
          this.board.checkers.pop();
          // move the checker
          this.board.grid[targetY][targetX] = this.board.grid[originY][originX];
          this.board.grid[originY][originX] = null;
          return colors.green(
            "Jumped from (" +
              originY +
              "," +
              originX +
              ") to (" +
              targetY +
              "," +
              targetX +
              "). Killing (" +
              victimY +
              "," +
              victimX +
              ")."
          );
        } else
          return colors.red(
            "ERROR: " + this.turn + " cannout jump over " + victim.symbol
          );
      case JUMP_UP_LEFT:
        victimY = parseInt(originY) - 1;
        victimX = parseInt(originX) - 1;
        victim = this.board.grid[victimY][victimX];
        // valid jump
        if (victim.symbol === topSymbol) {
          // kill the victim!
          this.board.grid[victimY][victimX] = null;
          this.board.checkers.pop();
          // move the checker
          this.board.grid[targetY][targetX] = this.board.grid[originY][originX];
          this.board.grid[originY][originX] = null;
          return colors.green(
            "Jumped from (" +
              originY +
              "," +
              originX +
              ") to (" +
              targetY +
              "," +
              targetX +
              "). Killing (" +
              victimY +
              "," +
              victimX +
              ")."
          );
        } else
          return colors.red(
            "ERROR: " + this.turn + " cannout jump over " + victim.symbol
          );
      case JUMP_UP_RIGHT:
        victimY = parseInt(originY) - 1;
        victimX = parseInt(originX) + 1;
        victim = this.board.grid[victimY][victimX];
        // valid jump
        if (victim.symbol === topSymbol) {
          // kill the victim!
          this.board.grid[victimY][victimX] = null;
          this.board.checkers.pop();
          // move the checker
          this.board.grid[targetY][targetX] = this.board.grid[originY][originX];
          this.board.grid[originY][originX] = null;
          return colors.green(
            "Jumped from (" +
              originY +
              "," +
              originX +
              ") to (" +
              targetY +
              "," +
              targetX +
              "). Killing (" +
              victimY +
              "," +
              victimX +
              ")."
          );
        } else
          return colors.red(
            "ERROR: " + this.turn + " cannout jump over " + victim.symbol
          );
      default:
        return colors.red("ERROR: Invalid Move.");
    }
  }
}

function checkMove(
  originY,
  originX,
  target,
  targetY,
  targetX,
  symbol,
  turnSymbol
) {
  let distanceX = Math.abs(targetX - originX);
  let distanceY = Math.abs(targetY - originY);

  let directionY = null;
  if (targetY - originY < 0) directionY = "UP";
  if (targetY - originY > 0) directionY = "DOWN";

  let directionX = null;
  if (targetX < originX) directionX = "LEFT";
  if (targetX > originX) directionX = "RIGHT";

  if (symbol !== turnSymbol) return WRONG_TURN;

  if (symbol === topSymbol) {
    // top player move logic
    if (!target && directionY === "DOWN") {
      if (distanceX === 1 && distanceY === 1) return STANDARD_MOVE;
      else if (distanceX === 2 && distanceY === 2) {
        if (directionX === "LEFT") return JUMP_DOWN_LEFT;
        if (directionX === "RIGHT") return JUMP_DOWN_RIGHT;
      } else return INVALID_MOVE;
    } else return INVALID_MOVE;
  }

  // bottom player move logic
  if (symbol === bottomSymbol) {
    if (!target && directionY === "UP") {
      if (distanceX === 1 && distanceY === 1) return STANDARD_MOVE;
      else if (distanceX === 2 && distanceY === 2) {
        if (directionX === "LEFT") return JUMP_UP_LEFT;
        if (directionX === "RIGHT") return JUMP_UP_RIGHT;
      } else return INVALID_MOVE;
    } else return INVALID_MOVE;
  }
}

function getPrompt() {
  console.log("Turn " + game.turnNumber + ": " + game.turnSymbol);
  game.board.viewGrid();
  rl.question("which piece?: ", whichPiece => {
    rl.question("to where?: ", toWhere => {
      let result = game.moveChecker(whichPiece, toWhere);
      if (result.includes("ERROR")) console.log("\n" + result + "\n");
      else {
        console.log("\n" + game.turnSymbol + " " + result + "\n");
        game.nextTurn();
      }
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
