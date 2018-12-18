"use strict";

const assert = require("assert");
const readline = require("readline");
const colors = require("colors");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

colors.setTheme({
  topColor: ["red", "underline"],
  botColor: ["cyan", "underline"]
});

// checker appearances
const topColor = "red";
const botColor = "cyan";
const topCheckerSymbol = colors.topColor("\u04E9");
const topKingSymbol = colors.topColor("\u04EB");
const botCheckerSymbol = colors.botColor("\u04E9");
const botKingSymbol = colors.botColor("\u04EB");

// error constants
// user input errors
const USER_ERROR_1 = "Input too long and/or not a number.";
const USER_ERROR_2 = "Input must be between 00-77.";

// move errors
const MOVE_ERROR_0 = "has no checker.";
const MOVE_ERROR_1 = "can only move 1 space (2 if jumping) at a time.";
const MOVE_ERROR_2 = "cannot move to a space that is already occupied.";
const MOVE_ERROR_3 = "cannot move in a straight line.";
const MOVE_ERROR_4 = "is not a king, therefore cannot move backwards.";
const MOVE_ERROR_5 = "not your turn.";
const MOVE_ERROR_6 = "has an available jump and must take it.";
const MOVE_ERROR_7 = "cannot jump there.";

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
    let string = "  ";
    for (let i = 0; i < 8; i++) {
      string += colors.underline(i.toString()) + " ";
    }
    string += "\n";
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
          rowOfCheckers.push("_");
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join("|") + "|";
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  // your code here
  placeCheckers() {
    this.insertCheckers(0, topColor, topCheckerSymbol);
    this.insertCheckers(5, botColor, botCheckerSymbol);
  }
  insertCheckers(startRow, color, symbol) {
    let checkerCount = 1;
    for (let row = startRow; row < startRow + 3; row++) {
      // start in column 0 for even rows, column 1 for odd rows, increment by 2
      for (let col = row % 2 ? 0 : 1; col < 8; col += 2) {
        let checker = new Checker(color, symbol, checkerCount);
        this.grid[row][col] = checker;
        this.checkers.push(checker);
        checkerCount++;
      }
    }
  }
}

class Game {
  constructor() {
    this.board = new Board();
    this.turnCount = 1;
    this.turnColor = botColor;
    this.turnSymbol = botCheckerSymbol;
    this.winner = false;
  }

  start() {
    this.board.createGrid();
    this.board.placeCheckers();
  }

  nextTurn() {
    this.turnCount++;
    this.turnColor = this.turnCount % 2 ? botColor : topColor;
    this.turnSymbol = this.turnCount % 2 ? botCheckerSymbol : topCheckerSymbol;
  }
  displayTurn() {
    console.log("\n" + "Turn", this.turnCount + ":", this.turnSymbol);
  }
  displayScore() {
    let botCheckers = this.board.checkers.filter(function(checker) {
      return checker.color === botColor;
    });
    let topCheckers = this.board.checkers.filter(function(checker) {
      return checker.color === topColor;
    });
    let botScore = botCheckers.length;
    let topScore = topCheckers.length;

    console.log(
      "\n   " + botCheckerSymbol + ":",
      botScore,
      "|",
      topCheckerSymbol + ":",
      topScore
    );
  }

  checkForWin() {
    // if remaining checkers <= 12, assign a winner if all are the same color
    if (this.board.checkers.length <= 12) {
      this.winner = this.board.checkers.every(function(checker, i, checkers) {
        return checker.color === checkers[0].color;
      });
    }
  }
  endGame() {
    if (this.winner) {
      this.board.viewGrid();
      console.log("\n", this.turnSymbol, "wins!!!");
      return true;
    }
  }

  parseInput(whichPiece, toWhere) {
    // exit upon user input error
    if (!this.checkInput(whichPiece, toWhere)) return;
    else {
      // grid coordinates
      let y1 = parseInt(whichPiece[0]);
      let x1 = parseInt(whichPiece[1]);
      let y2 = parseInt(toWhere[0]);
      let x2 = parseInt(toWhere[1]);

      // exit upon invalid move
      if (!this.checkForValidMove(y1, x1, y2, x2)) return;
      else this.moveChecker(y1, x1, y2, x2);
    }
  }
  checkInput(whichPiece, toWhere) {
    // catch all for user input errors
    let error = {
      // too long or not a number
      a: isNaN(whichPiece),
      b: isNaN(toWhere),
      c: whichPiece.length != 2,
      d: toWhere.length != 2,

      // not in range 00-77
      e: parseInt(whichPiece) < 0,
      f: parseInt(whichPiece) > 77,
      g: parseInt(toWhere) < 0,
      h: parseInt(toWhere) > 77
    };

    if (error.a || error.b || error.c || error.d) {
      console.log("\n", USER_ERROR_1);
      return false;
    } else if (error.e || error.f || error.g || error.h) {
      console.log("\n", USER_ERROR_2);
      return false;
    } else return true;
  }

  checkForValidMove(y1, x1, y2, x2) {
    let distanceX = x2 - x1;
    let distanceY = y2 - y1;
    let checkerToMove = this.board.grid[y1][x1];
    let landingZone = this.board.grid[y2][x2];

    // no checker to move
    if (!checkerToMove) {
      console.log("\n", "(" + y1 + "," + x1 + ")", MOVE_ERROR_0);
      return false;
    }

    // moved out of turn
    if (this.turnColor !== checkerToMove.color) {
      console.log("\n", checkerToMove.symbol, MOVE_ERROR_5);
      return false;
    }

    // didn't move diagonally
    if (y1 === y2 || x1 === x2) {
      console.log("\n", checkerToMove.symbol, MOVE_ERROR_3);
      return false;
    }

    // moved too far
    if (distanceX > 2 || distanceY > 2 || distanceX < -2 || distanceY < -2) {
      console.log("\n", checkerToMove.symbol, MOVE_ERROR_1);
      return false;
    }

    // moved onto occupied space
    if (landingZone) {
      console.log("\n", checkerToMove.symbol, MOVE_ERROR_2);
      return false;
    }

    // red/white non-king tried to move up/down
    if (!checkerToMove.isKing) {
      if (checkerToMove.color === botColor) {
        if (distanceY > 0) {
          console.log("\n", checkerToMove.symbol, MOVE_ERROR_4);
          return false;
        }
      } else {
        if (distanceY < 0) {
          console.log("\n", checkerToMove.symbol, MOVE_ERROR_4);
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
            console.log("\n", this.turnSymbol, MOVE_ERROR_6);
            return false;
          }
        }
      }
    }
    return true;
  }

  moveChecker(y1, x1, y2, x2) {
    let checker = this.board.grid[y1][x1];
    let distanceX = x2 - x1;
    let distanceY = y2 - y1;
    let validJump = false;
    let standardMove = Math.abs(distanceX) === 1 && Math.abs(distanceY) === 1;

    // ensure valid jump
    if (distanceY > 1 && distanceX > 1)
      validJump = this.acquireTarget(y2 - 1, x2 - 1, checker);
    if (distanceY < -1 && distanceX > 1)
      validJump = this.acquireTarget(y2 + 1, x2 - 1, checker);
    if (distanceY > 1 && distanceX < -1)
      validJump = this.acquireTarget(y2 - 1, x2 + 1, checker);
    if (distanceY < -1 && distanceX < -1)
      validJump = this.acquireTarget(y2 + 1, x2 + 1, checker);

    // make the move if checker jumped successfully or just did a standard move
    if (validJump || standardMove) {
      this.board.grid[y2][x2] = this.board.grid[y1][x1];
      this.board.grid[y1][x1] = null;

      // crown this checker a king if it lands on the correct row
      this.crownKing(this.board.grid[y2][x2], y2);

      // check the board state for a win
      this.checkForWin();

      // if there is another valid jump after previous valid jump, exit before nextTurn()
      if (this.locatedAdditionalTargets(y2, x2) && validJump) return;

      // if the game is over, dont go to nextTurn()
      if (this.endGame()) return;

      // if we get this far, call nextTurn()
      this.nextTurn();
    } else {
      console.log("\n", checker.symbol, MOVE_ERROR_7);
      return;
    }
  }

  acquireTarget(y, x, killer) {
    // assign target using coordinates
    let target = this.board.grid[y][x];

    // exit if target is empty
    if (!target) return false;

    // terminate target if killer and target colors are not the same
    if (target.color !== killer.color) {
      this.terminateTarget(y, x);
      return true;
    } else console.log("\n", KILL_ERROR_1);
  }
  terminateTarget(y, x) {
    let targetLocation = this.board.checkers.indexOf(this.board.grid[y][x]);
    this.board.checkers.splice(targetLocation, 1);
    this.board.grid[y][x] = null;
  }
  locatedAdditionalTargets(y, x) {
    let scout = this.board.grid[y][x];
    let scoutResult = false;

    // kings, check above and below
    if (scout.isKing) {
      // scout result will equal false or true every time we scout for targets
      scoutResult = scoutResult || this.scoutForTargets(scout, y, x, -1, -1);
      scoutResult = scoutResult || this.scoutForTargets(scout, y, x, -1, 1);
      scoutResult = scoutResult || this.scoutForTargets(scout, y, x, 1, 1);
      scoutResult = scoutResult || this.scoutForTargets(scout, y, x, 1, -1);
      // non kings, check only above or below
    } else {
      // white
      if (scout.color === botColor) {
        scoutResult = scoutResult || this.scoutForTargets(scout, y, x, -1, -1);
        scoutResult = scoutResult || this.scoutForTargets(scout, y, x, -1, 1);
        // red
      } else {
        scoutResult = scoutResult || this.scoutForTargets(scout, y, x, 1, 1);
        scoutResult = scoutResult || this.scoutForTargets(scout, y, x, 1, -1);
      }
    }
    return scoutResult;
  }
  scoutForTargets(scout, scoutY, scoutX, directionY, directionX) {
    let targetY = scoutY + directionY;
    let targetX = scoutX + directionX;
    let target = null; // assume target is an empty spot
    let landZoneY = targetY + directionY;
    let landZoneX = targetX + directionX;
    let landZone = true; // assume landZone is not null (not empty or off the board)

    // ensure target is inbounds
    if (7 >= targetY && targetY >= 0 && (7 >= targetX && targetX >= 0))
      target = this.board.grid[targetY][targetX]; // assign target using calculated coordinates

    // ensure landing zone is inbounds
    if (7 >= landZoneY && landZoneY >= 0 && (7 >= landZoneX && landZoneX >= 0))
      landZone = this.board.grid[landZoneY][landZoneX]; // assign landZone using calculated coordinates

    // white non king
    if (scout.color === botColor) {
      // if we have a target and landing zone is empty, found a valid jump
      if (target && !landZone) if (target.color === topColor) return true;
      // red non king
    } else {
      if (target && !landZone) if (target.color === botColor) return true;
    }
    return false;
  }

  crownKing(checker, row) {
    // no need to make a king a king again
    if (checker.isKing) return;

    // if bottom checker reaches the top, crown it
    if (checker.color === botColor && row === 0) {
      checker.isKing = true;
      checker.symbol = botKingSymbol;
    }

    // if top checker reaches the bottom, crown it
    if (checker.color === topColor && row === 7) {
      checker.isKing = true;
      checker.symbol = topKingSymbol;
    }
  }
}

function getPrompt() {
  game.displayTurn();
  game.displayScore();
  game.board.viewGrid();
  rl.question("which piece?: ", whichPiece => {
    rl.question("to where?: ", toWhere => {
      game.parseInput(whichPiece, toWhere);
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
