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

  isLegal(inputRow, inputColumn, newRow, newColumn) {
    // Make variables for user input = integer for move algo.
    let inputInfo = parseInt(inputRow + inputColumn);
    let moveToInfo = parseInt(newRow + newColumn);
    let inputRowJumpedRed = inputRow - 1;
    // console.log(`inputRowJumpedRed: `, inputRowJumpedRed)
    let inputRowJumpedBlack = inputRow + 1;
    let inputColumnJumpedEast = inputColumn / 10 + 1;
    // console.log(`inputColumnJumpedEast: `, inputColumnJumpedEast)
    let inputColumnJumpedWest = inputColumn / 10 - 1;
    let jumpedCheckerEast = `${inputRowJumpedRed}${inputColumnJumpedEast}`;
    console.log(`jumpedCheckerEast: `, jumpedCheckerEast);

    if (this.board.grid[inputRow][inputColumn] === null) {
      console.log(
        `There is no piece in the location you have provided. check your GPS.`
      );
      return false;
    }

    if (
      this.board.grid[newRow][newColumn] !== undefined &&
      this.board.grid[newRow][newColumn] !== null
    ) {
      console.log(
        `There is a piece in the location you are attempting to move to. Check your Radar.`
      );
      return false;
    }

    if (newRow < 0 || newRow > 7 || (newColumn < 0 || newColumn > 7)) {
      console.log(`Stay on the board!`);
      return false;
    }

    if (
      this.board.grid[inputRow][inputColumn].symbol === "r" &&
      inputInfo - moveToInfo !== 9 &&
      inputInfo - moveToInfo !== 11
    ) {
      console.log(
        `Illegal move. Only Move diagonally toward your opponent's end row. Check your map for directions.`
      );
      return false;
    }

    if (
      this.board.grid[inputRow][inputColumn].symbol === "b" &&
      moveToInfo - inputInfo !== 9 &&
      moveToInfo - inputInfo !== 11
    ) {
      console.log(
        `Illegal move. Only Move diagonally toward your opponent's end row. Check your map for directions.`
      );
      return false;
    }
    return true;
  }

  // killMove(inputRow, inputColumn, newRow, newColumn) {
  //   let inputInfo = parseInt(inputRow + inputColumn);
  //   let moveToInfo = parseInt(newRow + newColumn);
  //   console.log(`inputInfo: `, inputInfo, `moveToInfo: `, moveToInfo)

  // if (
  //   this.board.grid[inputRow][inputColumn].symbol === "r" &&
  //   inputInfo - moveToInfo === 18
  // ) {
  //   jumpedChecker = null;
  // }

  //   ];
  //   // Set WhichPieceSplit to null
  //   this.board.grid[inputRow][inputColumn] = null
  //   moveToInfo - 9 = null;
  // }

  // inputInfo - moveToInfo !== 22
  // ) {
  //   console.log(
  //     `Illegal move. Only Move diagonally toward your opponent's end row. Check your map.`
  //   );
  //   return false;
  // }

  // if (
  //   this.board.grid[inputRow][inputColumn].symbol === "b" &&
  //   moveToInfo - inputInfo !== 18 &&
  //   moveToInfo - inputInfo !== 22
  // ) {
  //   console.log(
  //     `Illegal move. Only Move diagonally toward your opponent's end row. Check your map.`
  //   );
  //   return false;
  // }
  // }

  moveChecker(whichPiece, toWhere) {
    const whichPieceSplit = whichPiece.trim().split("");
    const toWhereSplit = toWhere.trim().split("");
    let inputRow = whichPieceSplit[0];
    let inputColumn = whichPieceSplit[1];
    let newRow = toWhereSplit[0];
    let newColumn = toWhereSplit[1];

    if (this.isLegal(inputRow, inputColumn, newRow, newColumn)) {
      // Set toWhereSplit = WhichPieceSplit in Grid
      this.board.grid[newRow][newColumn] = this.board.grid[inputRow][
        inputColumn
      ];
      // Set WhichPieceSplit to null
      this.board.grid[inputRow][inputColumn] = null;
    }

    // this.killMove();

    // console.log(
    //   `inputRow: `,
    //   inputRow,
    //   `| inputColumn: `,
    //   inputColumn,
    //   `| newRow: `,
    //   newRow,
    //   `| newColumn: `,
    //   newColumn
    // );
    // console.log(`checkers: `, this.board.checkers);
    // console.log(`checker: `, CheckerPiece.checker);
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
