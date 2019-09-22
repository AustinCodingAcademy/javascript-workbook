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

// Game class - Makes calls to create and populate board.
// Contains Legal Moves logic, jump and kill piece logic and move Piece Logic
class Game {
  constructor() {
    this.board = new Board();
  }
  start() {
    this.board.createGrid();
    this.board.populateBoard();
  }

  playerTurn(inputRow, inputColumn) {
    let playerTurn = this.board.grid[inputRow][inputColumn].symbol;
    if (playerTurn === 'r') {
      playerTurn = 'Black Turn'
    } else {
      playerTurn = 'Red Turn'
    }
    console.log(playerTurn)
    return true
  }

  // Player Turn non-functioning logic.
      // if (inputRow === undefined) {
    //   return `Red Player Starts: `;
    // } else if (this.board.grid[inputRow][inputColumn].symbol === "r") {
    //   return `Black Turn`;
    // } else {
    //   return `Red Turn;`;
    // }

  isLegal(inputRow, inputColumn, newRow, newColumn) {
    // Make variables for user input = integer for move algo + jumped piece location.
    let inputInfo = parseInt(inputRow + inputColumn);
    let moveToInfo = parseInt(newRow + newColumn);

    // User input for of piece must be on the board.
    if (inputRow < 0 || inputRow > 7 || inputColumn < 0 || inputColumn > 7) {
      console.log(`Enter a number from the board!`);
      return false;
    }

    if (newRow < 0 || newRow > 7 || (newColumn < 0 || newColumn > 7)) {
      console.log(`Stay on the board!`);
      return false;
    }
    // console.log(`inputRow: `, inputRow, `inputColumn: `, inputColumn);

    // User input for a starting position must match to a piece on the board.
    if (inputRow === undefined || inputColumn === undefined) {
      console.log(`Please enter a valid board loaction`);
      return false;
    }
    if (this.board.grid[inputRow][inputColumn] === null) {
      console.log(
        `There is no piece in the location you have provided. check your GPS.`
      );
      return false;
    }

    // User input for end position must be on the board (defined) and empty.
    if (
      this.board.grid[newRow][newColumn] !== undefined &&
      this.board.grid[newRow][newColumn] !== null
    ) {
      console.log(
        `There is a piece in the location you are attempting to move to. Check your Radar.`
      );
      return false;
    }
    // Logic ensuring moves are legal for red pieces.
    if (
      this.board.grid[inputRow][inputColumn].symbol === "r" &&
      inputInfo - moveToInfo !== 9 &&
      inputInfo - moveToInfo !== 11
    ) {
      console.log(
        `Illegal move. Diagonal moves only. If attempting to jump a square...only jump when opponets checker is adjacent.`
      );
      return false;
    }

    // Logic ensuring moves are legal for red pieces.
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

  killMove(inputRow, inputColumn, newRow, newColumn) {
    let startPositionRow = parseInt(inputRow);
    let startPositionColumn = parseInt(inputColumn);
    let inputInfo = parseInt(inputRow + inputColumn);
    let moveToInfo = parseInt(newRow + newColumn);

    // console.log(`inputRow: `, inputRow, `inputColumn: `, inputColumn);

    // Variables to create Jumped Checker
    let inputRowJumpedRed = startPositionRow - 1;
    // console.log(`inputRowJumpedRed: `, inputRowJumpedRed);
    // console.log(
    //   `startpos - 1: `,
    //   startPositionRow - 1,
    //   Object.prototype.toString.call(inputRowJumpedRed)
    // );

    let inputRowJumpedBlack = startPositionRow + 1;
    // console.log(`inputRowJumpedBlack: `, inputRowJumpedBlack);

    let inputColumnJumpedEast = startPositionColumn + 1;
    // console.log(`inputColumnJumpedEast: `, inputColumnJumpedEast);

    let inputColumnJumpedWest = startPositionColumn - 1;
    // console.log(`inputColumnJumpedWest: `, inputColumnJumpedWest);

    //  Because the number of Input Rows are the same length of Input Columns the if wrapper keeps all inputs between 0 and 7
    if (
      this.board.grid[inputRow] &&
      this.board.grid[inputColumn] &&
      this.board.grid[inputRow][inputColumn] !== null &&
      this.board.grid[newRow][newColumn] === null
    ) {
      // Looks for checker symbol 'r' or 'b'. if move is a jump, and there is a checker
      // in the position under the jumping checker, and that checker is the other players
      // the checker jumps and sets that square to null.
      if (
        this.board.grid[inputRow][inputColumn].symbol === "r" &&
        inputInfo - moveToInfo === 18 &&
        this.board.grid[inputRowJumpedRed][inputColumnJumpedEast] !== null &&
        this.board.grid[inputRowJumpedRed][inputColumnJumpedEast].symbol === "b"
      ) {
        this.board.grid[inputRowJumpedRed][inputColumnJumpedEast] = null;
        this.board.grid[newRow][newColumn] = this.board.grid[inputRow][
          inputColumn
        ];
        this.board.grid[inputRow][inputColumn] = null;
        return true;
      } else if (
        this.board.grid[inputRow][inputColumn].symbol === "r" &&
        inputInfo - moveToInfo === 22 &&
        this.board.grid[inputRowJumpedRed][inputColumnJumpedWest] !== null &&
        this.board.grid[inputRowJumpedRed][inputColumnJumpedWest].symbol === "b"
      ) {
        this.board.grid[inputRowJumpedRed][inputColumnJumpedWest] = null;
        this.board.grid[newRow][newColumn] = this.board.grid[inputRow][
          inputColumn
        ];
        this.board.grid[inputRow][inputColumn] = null;
        return true;
      } else if (
        this.board.grid[inputRow][inputColumn].symbol === "b" &&
        moveToInfo - inputInfo === 18 &&
        this.board.grid[inputRowJumpedBlack][inputColumnJumpedWest] !== null &&
        this.board.grid[inputRowJumpedBlack][inputColumnJumpedWest].symbol ===
          "r"
      ) {
        this.board.grid[inputRowJumpedBlack][inputColumnJumpedWest] = null;
        this.board.grid[newRow][newColumn] = this.board.grid[inputRow][
          inputColumn
        ];
        this.board.grid[inputRow][inputColumn] = null;
        return true;
      } else if (
        this.board.grid[inputRow][inputColumn].symbol === "b" &&
        moveToInfo - inputInfo === 22 &&
        this.board.grid[inputRowJumpedBlack][inputColumnJumpedEast] !== null &&
        this.board.grid[inputRowJumpedBlack][inputColumnJumpedEast].symbol ===
          "r"
      ) {
        this.board.grid[inputRowJumpedBlack][inputColumnJumpedEast] = null;
        this.board.grid[newRow][newColumn] = this.board.grid[inputRow][
          inputColumn
        ];
        this.board.grid[inputRow][inputColumn] = null;
        return true;
      } else {
        return false;
      }
    }
  }

  kingMakerRed(inputRow, inputColumn, newRow, newColumn) {
    if (
      this.board.grid[newRow] &&
      this.board.grid[newColumn] &&
      this.board.grid[newRow][newColumn] !== null
    ) {
      // console.log(
      //   `location: kingmaker first if`,
      //   `New Row string: `,
      //   newRow == 0,
      //   `checker: `,
      //   this.board.grid[newRow][newColumn]
      // );
      // new Row is a string so... == instead of ===. grabbing the 'r' @ king row
      if (newRow == 0 && this.board.grid[newRow][newColumn].symbol === "r") {
        // console.log(`kingmaker: 2nd if`);
        this.board.grid[newRow][newColumn].symbol = "R";
        // console.log();
      }
    }
  }

  kingMakerBlack(inputRow, inputColumn, newRow, newColumn) {
    if (
      this.board.grid[newRow] &&
      this.board.grid[newColumn] &&
      this.board.grid[newRow][newColumn] !== null
    ) {
      // console.log(
      //   `location: kingmaker first if`,
      //   `New Row string: `,
      //   newRow == 7,
      //   `checker: `,
      //   this.board.grid[newRow][newColumn]
      // );
      // new Row is a string so... == instead of ===. grabbing the 'r' @ king row
      if (newRow == 7 && this.board.grid[newRow][newColumn].symbol === "b") {
        // console.log(`kingmaker: 2nd if`);
        this.board.grid[newRow][newColumn].symbol = "B";
        // console.log();
      }
    }
  }

  // takes user input and defines variables that can access locations on the grid
  moveChecker(whichPiece, toWhere) {
    const whichPieceSplit = whichPiece.trim().split("");
    const toWhereSplit = toWhere.trim().split("");
    let inputRow = whichPieceSplit[0];
    let inputColumn = whichPieceSplit[1];
    let newRow = toWhereSplit[0];
    let newColumn = toWhereSplit[1];

    this.playerTurn(inputRow, inputColumn);

    if (this.killMove(inputRow, inputColumn, newRow, newColumn)) {
      // removes checker from checkers array
      game.board.checkers.pop();
      // if killMove runs, exits logic and starts again with new player (would have to have
      // new logic for double jump)
    }

    // runs logic to ensure that moves are legal
    else if (this.isLegal(inputRow, inputColumn, newRow, newColumn)) {
      // Set toWhereSplit = WhichPieceSplit in Grid
      this.board.grid[newRow][newColumn] = this.board.grid[inputRow][
        inputColumn
      ];
      // Set WhichPieceSplit to null
      this.board.grid[inputRow][inputColumn] = null;
    }

    // kills a checker function
    if (this.kingMakerRed(inputRow, inputColumn, newRow, newColumn)) {
      console.log(`KING ME!`);
    }

    if (this.kingMakerBlack(inputRow, inputColumn, newRow, newColumn)) {
      console.log(`KING ME!`);
    }
  }
}

function getPrompt() {
  game.board.viewGrid();
  console.log(game.playerTurn);
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
