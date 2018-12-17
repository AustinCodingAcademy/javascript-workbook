"use strict";

const assert = require("assert");
const readline = require("readline");
const colors = require("colors");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const topColor = "red";
const botColor = "white";
const topCheckerSymbol = colors.red("\u00A9");
const botCheckerSymbol = colors.white("\u00A9");
const topKingSymbol = colors.red("\u2655");
const botKingSymbol = colors.white("\u2655");

//user input errors
const USER_ERROR_1 = "Input too long and/or not a number.";
const USER_ERROR_2 = "Input must be between 00-77.";

// move errors
const MOVE_ERROR_0 = "has no checker.";
const MOVE_ERROR_1 = "cannot move more than 2 spaces at a time.";
const MOVE_ERROR_2 = "cannot move to a space that is already occupied.";
const MOVE_ERROR_3 = "cannot move in a straight line.";
const MOVE_ERROR_4 = "is not a king, therefore cannot move backwards.";
const MOVE_ERROR_5 = "not your turn.";
const MOVE_ERROR_6 = "has an available jump and must take it.";

//jump/kill errors
const KILL_ERROR_1 = "You can't jump you're own checkers.";

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
      }
    }
  }

  placeCheckers() {
    this.insertCheckers(0, topColor, topCheckerSymbol);
    this.insertCheckers(5, botColor, botCheckerSymbol);
  }
}

class Game {
  constructor() {
    this.board = new Board();
    this.turnCount = 1;
    this.turnColor = botColor;
    this.winner = false;
  }
  start() {
    this.board.createGrid();
    this.board.placeCheckers();
  }
  nextTurn() {
    this.turnCount++;
    this.turnColor = this.turnCount % 2 ? botColor : topColor;
  }
  displayTurn() {
    let turnSymbol = this.turnCount % 2 ? botCheckerSymbol : topCheckerSymbol;
    console.log("\nTurn", this.turnCount + ":", turnSymbol);
  }
  checkForWin() {
    if (this.board.checkers.length <= 12) {
      this.winner = this.board.checkers.every(function(checker, i, checkers) {
        return checker.color === checkers[0].color;
      });
    }
  }
  endGame() {
    let turnSymbol = this.turnCount % 2 ? topCheckerSymbol : botCheckerSymbol;
    if (this.winner) {
      console.log(turnSymbol, "wins!!!");
      return true;
    }
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
      parseInt(whichPiece) > 77 ||
      parseInt(toWhere) < 0 ||
      parseInt(toWhere) > 77
    ) {
      console.log(USER_ERROR_2);
      return false;
    } else return true;
  }
  parseInput(whichPiece, toWhere) {
    if (!this.checkInput(whichPiece, toWhere)) return;
    else {
      // grid coordinates
      let y1 = parseInt(whichPiece[0]);
      let x1 = parseInt(whichPiece[1]);
      let y2 = parseInt(toWhere[0]);
      let x2 = parseInt(toWhere[1]);

      if (!this.checkForValidMove(y1, x1, y2, x2)) return;
      else this.moveChecker(y1, x1, y2, x2);
    }
  }
  checkForValidMove(y1, x1, y2, x2) {
    let distanceX = x2 - x1;
    let distanceY = y2 - y1;
    let checkerToMove = this.board.grid[y1][x1];
    let landingZone = this.board.grid[y2][x2];

    // no checker to move
    if (!checkerToMove) {
      console.log("(" + y1 + "," + x1 + ")", MOVE_ERROR_0);
      return false;
    }

    // moved out of turn
    if (this.turnColor !== checkerToMove.color) {
      console.log(checkerToMove.symbol, MOVE_ERROR_5);
      return false;
    }

    // didn't move diagonally
    if (y1 === y2 || x1 === x2) {
      console.log(checkerToMove.symbol, MOVE_ERROR_3);
      return false;
    }

    // moved too far
    if (distanceX > 2 || distanceY > 2 || distanceX < -2 || distanceY < -2) {
      console.log(checkerToMove.symbol, MOVE_ERROR_1);
      return false;
    }

    // moved onto occupied space
    if (landingZone) {
      console.log(checkerToMove.symbol, MOVE_ERROR_2);
      return false;
    }

    // red/white non-king tried to move up/down
    if (!checkerToMove.isKing) {
      if (checkerToMove.color === botColor) {
        if (distanceY > 0) {
          console.log(checkerToMove.symbol, MOVE_ERROR_4);
          return false;
        }
      } else {
        if (distanceY < 0) {
          console.log(checkerToMove.symbol, MOVE_ERROR_4);
          return false;
        }
      }
    }

    // didn't jump when one was available
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (
          this.board.grid[row][col] &&
          this.board.grid[row][col].color === this.turnColor
        ) {
          if (
            this.locatedAdditionalTargets(row, col) &&
            (Math.abs(distanceX) < 2 || Math.abs(distanceY) < 2)
          ) {
            console.log(checkerToMove.symbol, MOVE_ERROR_6);
            return false;
          }
        }
      }
    }
    return true;
  }
  moveChecker(y1, x1, y2, x2) {
    let checker = this.board.grid[y1][x1];
    let currentTargetKilled = false;
    let distanceX = x2 - x1;
    let distanceY = y2 - y1;

    if (distanceY > 1 && distanceX > 1)
      currentTargetKilled = this.acquireTarget(y2 - 1, x2 - 1, checker);
    if (distanceY < -1 && distanceX > 1)
      currentTargetKilled = this.acquireTarget(y2 + 1, x2 - 1, checker);
    if (distanceY > 1 && distanceX < -1)
      currentTargetKilled = this.acquireTarget(y2 - 1, x2 + 1, checker);
    if (distanceY < -1 && distanceX < -1)
      currentTargetKilled = this.acquireTarget(y2 + 1, x2 + 1, checker);

    if (
      currentTargetKilled ||
      (!currentTargetKilled &&
        (Math.abs(distanceX) === 1 && Math.abs(distanceY) === 1))
    ) {
      this.board.grid[y2][x2] = this.board.grid[y1][x1];
      this.board.grid[y1][x1] = null;
      this.crownKing(this.board.grid[y2][x2], y2);

      if (this.locatedAdditionalTargets(y2, x2) && currentTargetKilled) return;

      this.nextTurn();
    } else {
      console.log(checker.symbol, MOVE_ERROR_1);
      return;
    }
  }
  locatedAdditionalTargets(y, x) {
    let scout = this.board.grid[y][x];
    let scoutResult = false;

    // kings
    if (scout.isKing) {
      scoutResult = scoutResult || this.scoutTargetAndLZ(y, x, -1, -1, scout);
      scoutResult = scoutResult || this.scoutTargetAndLZ(y, x, -1, 1, scout);
      scoutResult = scoutResult || this.scoutTargetAndLZ(y, x, 1, 1, scout);
      scoutResult = scoutResult || this.scoutTargetAndLZ(y, x, 1, -1, scout);
      // non kings
    } else {
      // white
      if (scout.color === botColor) {
        scoutResult = scoutResult || this.scoutTargetAndLZ(y, x, -1, -1, scout);
        scoutResult = scoutResult || this.scoutTargetAndLZ(y, x, -1, 1, scout);
        // red
      } else {
        scoutResult = scoutResult || this.scoutTargetAndLZ(y, x, 1, 1, scout);
        scoutResult = scoutResult || this.scoutTargetAndLZ(y, x, 1, -1, scout);
      }
    }
    return scoutResult;
  }
  scoutTargetAndLZ(y, x, directionY, directionX, scout) {
    let targetY = y + directionY;
    let targetX = x + directionX;
    let lzY = y + directionY * 2;
    let lzX = x + directionX * 2;
    let target = null;
    let lz = true;

    // ensure target is inbounds
    if (7 >= targetY && targetY >= 0 && (7 >= targetX && targetX >= 0))
      target = this.board.grid[targetY][targetX];

    // ensure landing zone is inbounds
    if (7 >= lzY && lzY >= 0 && (7 >= lzX && lzX >= 0))
      lz = this.board.grid[lzY][lzX];

    if (scout.color === botColor) {
      // white non king
      if (target && !lz) if (target.color === topColor) return true;
    } else {
      // red non king
      if (target && !lz) if (target.color === botColor) return true;
    }
    return false;
  }
  acquireTarget(y, x, jumper) {
    let target = this.board.grid[y][x];
    if (!target) return false;
    if (target.color !== jumper.color) {
      this.terminateTarget(y, x);
      return true;
    } else console.log(KILL_ERROR_1);
  }
  terminateTarget(y, x) {
    this.board.grid[y][x] = null;
    this.board.checkers.splice(
      this.board.checkers.indexOf(this.board.grid[y][x], 1)
    );
  }
  crownKing(checker, row) {
    if (checker.color === botColor && row === 0) {
      checker.isKing = true;
      checker.symbol = botKingSymbol;
    }
    if (checker.color === topColor && row === 7) {
      checker.isKing = true;
      checker.symbol = topKingSymbol;
    }
  }
}

function getPrompt() {
  game.displayTurn();
  game.board.viewGrid();
  rl.question("which piece?: ", whichPiece => {
    rl.question("to where?: ", toWhere => {
      game.parseInput(whichPiece, toWhere);
      game.checkForWin();
      if (game.endGame()) return;
      else getPrompt();
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

  describe("Game.parseInput()", () => {
    it("should move a checker", () => {
      assert(!game.board.grid[4][1]);
      game.parseInput("50", "41");
      assert(game.board.grid[4][1]);
      game.parseInput("21", "30");
      assert(game.board.grid[3][0]);
      game.parseInput("52", "43");
      assert(game.board.grid[4][3]);
    });
    it("should be able to jump over and kill another checker", () => {
      game.parseInput("30", "52");
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
