"use strict";

const assert = require("assert");
const readline = require("readline");
const colors = require("colors");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Checker {
  //put a piece in here
  constructor(symbol, color, row, column) {
    (this.symbol = symbol),
      (this.color = color),
      (this.row = row),
      (this.column = column),
      (this.king = false);
  }
  makeKing() {
    if (!this.king) {
      this.king = true;
      if (this.symbol === "r") {
        this.symbol = "R";
      } else {
        this.symbol = "B";
      }
    }
  }
}
// Your code HE

//function moveChecker(whichPiece, toWhere) {
//}

class Board {
  constructor() {
    (this.grid = []), (this.checkers = []);
    // board needs an array of checkers
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
  // checking through either checkers symbol to see if there are any of each symbol left on the board
  checkForWin(currentPlayer) {
    let win = true;
    this.checkers.forEach(checkers => {
      // if player r it checks for and "b" checkers on the board to determine win condition for "r" checkers player
      if (currentPlayer === "r" || currentPlayer === "R") {
        if (checkers.symbol === "b" || checkers.symbol === "B") {
          win = false;
        }
        // same as above checking for "r" checkers on the board to determine win conditions for the "b" checkers player
      } else if (currentPlayer === "b" || currentPlayer === "B") {
        if (checkers.symbol === "r" || checkers.symbol === "R") {
          win = false;
        }
      }
    });
    return win;
  }

  removePiece(pieceToRemove) {
    const removeRow = parseInt(pieceToRemove.row);
    const removeColumn = parseInt(pieceToRemove.column);
    this.grid[removeRow][removeColumn] = null;
    //splice end of array to remove pieces from checkers array
    // pieceToRemove.isDead = true;
    // pieceToRemove.row = -1;
    // pieceToRemove.column = -1;

    let removedIndex = this.checkers.indexOf(pieceToRemove);
    this.checkers.splice(removedIndex, 1);
  }
  //set piece after jumped to is dead

  isLegal(currentPiece, toWhere) {
    const toWhereIndex = toWhere.split(""); //splitting index into string
    const newRow = parseInt(toWhereIndex[0]); //  new variable for acquiring new row index position and converting that into a number, parseInt takes a string and turns into a number
    const newColumn = parseInt(toWhereIndex[1]); // new variable for acquiring new column index position and converting into a number using parseInt
    const oldRow = parseInt(currentPiece.row); //variable for current pieces row index before it is moved, logging location
    const oldColumn = parseInt(currentPiece.column); // variable for current pieces column index before it is moved, logging location

    const valid = [0, 1, 2, 3, 4, 5, 6, 7];
    if (
      !valid.includes(newRow) ||
      !valid.includes(newColumn) ||
      this.grid[newRow][newColumn]
    ) {
      // limiting movement to the array valid
      console.log("Not a valid move");
      return false;
    }
    if (currentPiece.symbol === "r") {
      if (
        (newRow === oldRow + 1 && newColumn === oldColumn - 1) || //limiting movement to within 1 space of starting position or oldRow
        (newRow === oldRow + 1 && newColumn === oldColumn + 1)
      ) {
        return true;
      } else if (
        newRow === oldRow + 2 &&
        newColumn === oldColumn + 2 &&
        this.grid[oldRow + 1][oldColumn + 1] &&
        this.grid[oldRow + 1][oldColumn + 1].symbol != "r" //jumping piece logic in the + or ascending column direction, if piece does not match current symbol and is adjacent,
      ) {
        //logic for jumping piece 2 spaces instead of one
        this.removePiece(this.grid[oldRow + 1][oldColumn + 1]); // removing the jumped piece logic
        if (this.checkForWin("r")) {
          // checking for win conditions
          console.log("redWins");
        }

        return true;
      } else if (
        newRow === oldRow + 2 &&
        newColumn === oldColumn - 2 &&
        this.grid[oldRow + 1][oldColumn - 1] &&
        this.grid[oldRow + 1][oldColumn - 1].symbol != "r"
      ) {
        // jumping piece logic for jumping in the - column direction or descending direction
        this.removePiece(this.grid[oldRow + 1][oldColumn - 1]);
        if (this.checkForWin("r")) {
          console.log("redWins");
        }
        return true;
      } else {
        return false;
      }
    } else if (currentPiece.symbol === "b") {
      if (
        (newRow === oldRow - 1 && newColumn === oldColumn - 1) ||
        (newRow === oldRow - 1 && newColumn === oldColumn + 1)
      ) {
        return true;
      } else if (
        newRow === oldRow - 2 &&
        newColumn === oldColumn - 2 &&
        this.grid[oldRow - 1][oldColumn - 1] &&
        this.grid[oldRow - 1][oldColumn - 1].symbol != "b"
      ) {
        // same move logic as above just applied to the b symbol and moving the rows in the negative or up direction on the board, all row moves are negative
        this.removePiece(this.grid[oldRow - 1][oldColumn - 1]); // left coloumn moves are negative and right column moves are positive.
        if (this.checkForWin("b")) {
          console.log("blueWins");
        }
        return true;
      } else if (
        newRow === oldRow - 2 &&
        newColumn === oldColumn + 2 &&
        this.grid[oldRow - 1][oldColumn + 1] &&
        this.grid[oldRow - 1][oldColumn + 1].symbol != "b"
      ) {
        this.removePiece(this.grid[oldRow - 1][oldColumn + 1]);
        if (this.checkForWin("b")) {
          console.log("blueWins");
        }
        return true;
      } else {
        return false;
      }
      //king movement
      // } else if (currentPiece.king) {
      //   if (newRow === oldRow - 1 && newColumn === oldColumn - 1) ||
      //     (newRow === oldRow - 1 && newcolumn === oldColumn + 1) ||
      //     (newRow === oldRow + 1 && newColumn === oldColumn - 1) ||
      //     (newRow === oldRow + 1 && newColumn === oldColumn + 1)
      // }
      // return true;
      //else if (this.grid[oldRow])
      // jumping logic for king piece
    }
  }
  placePieces() {
    const redPosition = [
      // [0, 1],
      // [0, 3],
      // [0, 5],
      // [0, 7],
      // [1, 0],
      // [1, 2],
      // [1, 4],
      // [1, 6],
      // [2, 1],
      // [2, 3],
      // [2, 5],
      // [2, 7]
      [6, 5]
    ];
    const bluePosition = [
      // [7, 0],
      // [7, 2],
      // [7, 4],
      // [7, 6],
      // [6, 1],
      // [6, 3],
      // [6, 5],
      // [6, 7],
      // [5, 0],
      // [5, 2],
      // [5, 4],
      // [5, 6]
      [1, 2]
    ];
    for (let i = 0; i < redPosition.length; i++) {
      let square = redPosition[i].toString();
      let row = square.charAt(0);
      let column = square.charAt(2);
      let c1 = new Checker("r", "red", row, column);
      this.checkers.push(c1);
    }
    for (let j = 0; j < bluePosition.length; j++) {
      let square = bluePosition[j].toString();
      let row = square.charAt(0);
      let column = square.charAt(2);
      let c1 = new Checker("b", "blue", row, column);
      this.checkers.push(c1);
    }

    this.checkers.forEach(square => {
      let row = square.row;
      let column = square.column;
      this.grid[row][column] = square;
    });
    // make checker pieces appear on board
    // push this into board.checkers
    // Your code here
  }
  //refactor to move to game class as a method
  // checking the grid first
  // create function for legal move on board
  //const
  //create function for legal move on board
  //const isLegalMove

  // math.abs gives you the absolute number. probably need later
  //moveChecker(start, end) {

  //}
}
class Game {
  constructor(board) {
    this.board = new Board();
  }
  start() {
    this.board.createGrid();
    this.board.placePieces();
  }
  moveChecker(whichPiece, toWhere) {
    let currentIndex = whichPiece.split("");
    let currentRow = currentIndex[0];
    let currentColumn = currentIndex[1];

    let currentPiece = this.board.checkers.find(checkers => {
      return checkers.row === currentRow && checkers.column === currentColumn;
    });
    if (!currentPiece) {
      console.log("Not valid");
      return false;
    }
    if (!this.board.isLegal(currentPiece, toWhere)) {
      console.log("Not Legal");
      return false;
    }
    let whereIndex = toWhere.split("");
    let whereRow = whereIndex[0];
    let whereColumn = whereIndex[1];
    this.board.grid[whereRow][whereColumn] = currentPiece;
    currentPiece.row = whereRow;
    currentPiece.column = whereColumn;
    this.board.grid[currentRow][currentColumn] = null;
    if (whereRow === "0" || whereRow === "7") {
      currentPiece.makeKing();
    }

    // if (!currentPiece.king) {
    //   if (currentPiece.color === "red" && whereRow === "7") {
    //     console.log("red piece hit bottom of board");
    //     currentPiece.king = true;
    //     currentPiece.symbol = "R";
    //   }
    //   if (currentPiece.color === "blue" && whereRow === "0") {
    //     console.log("blue piece on top row");
    //     currentPiece.king = true;
    //     currentPiece.symbol = "B";
    //   }
    // }
  }
}
//moveChecker(whichPiece, toWhere) {
// make sure move is legal
// we wanna make sure that no piece is in a legal adjacent
// if there is we need to check the next adjacent spot
// if that legal move allowed
// Extra Credit: King Logic
// Extra Credit: jump logic
//}
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
