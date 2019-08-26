"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

let playerTurn = "X";

function printBoard() {
  console.log("   0  1  2");
  console.log("0 " + board[0].join(" | "));
  console.log("  ---------");
  console.log("1 " + board[1].join(" | "));
  console.log("  ---------");
  console.log("2 " + board[2].join(" | "));
}

function horizontalWin() {
  for (let r = 0; r < board.length; r++) {
    // for (let c = 0; c < board.length; c++) {
    let horizontalResult = board[r];
    // console.log(horizontalResult);
    let horizontalWin = [playerTurn, playerTurn, playerTurn];

    function equal(arr1, arr2) {
      // Comapring to see if both arguments are arrays
      if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
        return arr1 === arr2;
      }
      // Comparing to see if both arrays are the same length
      if (arr1.length !== arr2.length) {
        return false;
      }
      // Comparing to see if the arrays contain the same data
      for (let i = 0; i < arr1.length; i++) {
        if (!equal(arr1[i], arr2[i])) {
          return false;
        }
      }
      return true;
    }

    if (equal(horizontalResult, horizontalWin)) {
      console.log(`Player ${playerTurn} wins`);
    }
    // equal(horizontalResult, oWin);

    // console.log(horizontalResult);
    // console.log(Object.prototype.toString.call(horizontalResult));
    // console.log(board[0], board[1], board[2]);
    // }
  }
}

function verticalWin() {
  // for (let r = 0; r < board.length; r++) {
  //   let arrayRows = board[r];
  let verticalWin = [playerTurn, playerTurn, playerTurn];

  if (board[0][0] === board[1][0] && board[1][0] === board[2][0]) {
    console.log(`Player ${playerTurn} wins.`);
    return true;
  }
  // console.log(`Player ${playerTurn} wins`);
}

function diagonalWin() {
  // Your code here
}

function checkForWin() {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    console.log(`Player ${playerTurn} wins.`);
    return true;
  }
}

// Parent Function
// Run Check for Win here.
function ticTacToe(row, column) {
  board[row][column] = playerTurn;
  horizontalWin();

  if (verticalWin()) {
    console.log(`Player ${playerTurn} wins.`);
  }

  if (playerTurn === "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X";
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question("row: ", row => {
    rl.question("column: ", column => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === "function") {
  describe("#ticTacToe()", () => {
    it("should place mark on the board", () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [" ", " ", " "],
        [" ", "X", " "],
        [" ", " ", " "]
      ]);
    });
    it("should alternate between players", () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ["O", " ", " "],
        [" ", "X", " "],
        [" ", " ", " "]
      ]);
    });
    it("should check for vertical wins", () => {
      board = [[" ", "X", " "], [" ", "X", " "], [" ", "X", " "]];
      assert.equal(verticalWin(), true);
    });
    it("should check for horizontal wins", () => {
      board = [["X", "X", "X"], [" ", " ", " "], [" ", " ", " "]];
      assert.equal(horizontalWin(), true);
    });
    it("should check for diagonal wins", () => {
      board = [["X", " ", " "], [" ", "X", " "], [" ", " ", "X"]];
      assert.equal(diagonalWin(), true);
    });
    it("should detect a win", () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {
  getPrompt();
}
