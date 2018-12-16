"use strict";

const assert = require("assert");
const readline = require("readline");
const colors = require("colors");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Checker {
  constructor(symbol, color, row, column) {
    // if (color === "red") {
    //   this.symbol = colors.red(symbol);
    // } else {
    //   this.symbol = colors.blue(symbol);
    // }
    this.symbol = symbol;
    this.color = color;
    this.row = row;
    this.column = column;
    this.isKing = false;
    this.isDead = false;
  }
}

class Board {
  constructor() {
    this.grid = [];
    this.Checkers = [];
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    //loop to create the 8 rows
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
    let string = "    0 | 1 | 2 | 3 | 4 | 5 | 6 | 7\n";
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
      string += rowOfCheckers.join(" | ");
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  checkForWin(currentPlayer) {
    let win = false;
    let numRedDead = 0;
    let numBlueDead = 0;
    this.Checkers.forEach(checker => {
      if (currentPlayer === "r") {
        if (checker.symbol === "b") {
          if (checker.isDead) {
            numBlueDead++;
          }
        }
      } else if (currentPlayer === "b") {
        if (checker.symbol === "r") {
          if (checker.isDead) {
            numRedDead++;
          }
        }
      }
    });
    if (numRedDead === 12 || numBlueDead === 12) {
      win = true;
    }

    return win;
  }

  removePiece(pieceToRemove) {
    let removeRow = parseInt(pieceToRemove.row);
    let removeColumn = parseInt(pieceToRemove.column);
    this.grid[removeRow][removeColumn] = null;

    //make piece dead
    pieceToRemove.isDead = true;
    pieceToRemove.row = -1;
    pieceToRemove.column = -1;
  }

  isLegal(currentPiece, toWhere) {
    const toWhereIndexes = toWhere.split("");
    const newRow = parseInt(toWhereIndexes[0]);
    const newColumn = parseInt(toWhereIndexes[1]);
    const oldRow = parseInt(currentPiece.row);
    const oldColumn = parseInt(currentPiece.column);

    console.log(
      "old Row: " + oldRow,
      "old Col: " + oldColumn,
      "new Row " + newRow,
      "new Col: " + newColumn
    );

    const valid = [0, 1, 2, 3, 4, 5, 6, 7];
    if (
      !valid.includes(newRow) ||
      !valid.includes(newColumn) ||
      this.grid[newRow][newColumn]
    ) {
      console.log("Not valid");
      return false;
    } else if (currentPiece.symbol === "r") {
      console.log("piece is r");

      if (
        (newRow === oldRow + 1 && newColumn === oldColumn - 1) ||
        (newRow === oldRow + 1 && newColumn === oldColumn + 1)
      ) {
        return true;
      } else if (
        //if a opposite piece exists diagonal right from it
        this.grid[oldRow + 1][oldColumn + 1] &&
        this.grid[oldRow + 1][oldColumn + 1].symbol != "r" &&
        newRow === oldRow + 2 &&
        newColumn === oldColumn + 2
      ) {
        console.log("jumped piece, remove");

        this.removePiece(this.grid[oldRow + 1][oldColumn + 1]);
        if (this.checkForWin("r")) {
          console.log("Red Wins!");
        }
        return true;
      } else if (
        //if a opposite piece exists diagonal left from it
        this.grid[oldRow + 1][oldColumn - 1] &&
        this.grid[oldRow + 1][oldColumn - 1].symbol != "r" &&
        newRow === oldRow + 2 &&
        newColumn === oldColumn - 2
      ) {
        console.log("jumped piece, remove");

        this.removePiece(this.grid[oldRow + 1][oldColumn - 1]);
        if (this.checkForWin("r")) {
          console.log("Red Wins!");
        }
        return true;
      } else {
        return false;
      }
    } else if (currentPiece.symbol === "b") {
      console.log("piece is b");
      if (
        (newRow === oldRow - 1 && newColumn === oldColumn - 1) ||
        (newRow === oldRow - 1 && newColumn === oldColumn + 1)
      ) {
        return true;
      } else if (
        this.grid[oldRow - 1][oldColumn - 1] &&
        this.grid[oldRow - 1][oldColumn - 1].symbol != "b" &&
        newRow === oldRow - 2 &&
        newColumn === oldColumn - 2
      ) {
        this.removePiece(this.grid[oldRow - 1][oldColumn - 1]);
        if (this.checkForWin("b")) {
          console.log("Blue Wins!");
        }
        return true;
      } else if (
        this.grid[oldRow - 1][oldColumn + 1] &&
        this.grid[oldRow - 1][oldColumn + 1].symbol != "b" &&
        newRow === oldRow - 2 &&
        newColumn === oldColumn + 2
      ) {
        this.removePiece(this.grid[oldRow - 1][oldColumn + 1]);
        if (this.checkForWin("b")) {
          console.log("Blue Wins!");
        }
        return true;
      } else {
        return false;
      }
    }
  }

  //method for creating pieces
  placePieces() {
    const redSquares = [
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
    const blueSquares = [
      [7, 0],
      [7, 2],
      [7, 4],
      [7, 6],
      [6, 1],
      [6, 3],
      [6, 5],
      [6, 7],
      [5, 0],
      [5, 2],
      [5, 4],
      [5, 6]
    ];

    //use redSquares
    for (let j = 0; j < redSquares.length; j++) {
      let square = redSquares[j].toString();
      let row = square.charAt(0);
      let column = square.charAt(2);
      let c1 = new Checker("r", "red", row, column);
      this.Checkers.push(c1);
    }

    //use blueSquares
    for (let k = 0; k < blueSquares.length; k++) {
      let square = blueSquares[k].toString();
      let row = square.charAt(0);
      let column = square.charAt(2);
      let c1 = new Checker("b", "blue", row, column);
      this.Checkers.push(c1);
    }

    //go through Checkers, replace spot on board with checker
    this.Checkers.forEach(square => {
      let row = square.row;
      let column = square.column;
      this.grid[row][column] = square;
    });
  }
}

class Game {
  constructor() {
    this.board = new Board();
  }
  start() {
    this.board.createGrid();
    this.board.placePieces();
  }

  moveChecker(whichPiece, toWhere) {
    let currentIndexes = whichPiece.split("");
    let currentRow = currentIndexes[0];
    let currentColumn = currentIndexes[1];

    let currentPiece = this.board.Checkers.find(checker => {
      return checker.row === currentRow && checker.column === currentColumn;
    });

    if (!currentPiece) {
      console.log("Piece does not exist...");
      return false;
    }

    //make sure move is legal
    if (!this.board.isLegal(currentPiece, toWhere)) {
      console.log("Not  a legal move...");
      return false;
    }

    //move piece
    let whereIndexes = toWhere.split("");
    let whereRow = whereIndexes[0];
    let whereColumn = whereIndexes[1];

    this.board.grid[whereRow][whereColumn] = currentPiece;

    currentPiece.row = whereRow;
    currentPiece.column = whereColumn;

    this.board.grid[currentRow][currentColumn] = null;

    //EXTRA CREDIT - KING LOGIC, make piece king if reaches end of board, allows forward or backward jumping
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
    xit("should move a checker", () => {
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
