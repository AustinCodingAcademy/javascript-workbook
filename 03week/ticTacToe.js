"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
let sideLength = board.length;

let playerOne = "X";
let playerTwo = "O";
let playerTurn = playerOne;

function printBoard() {
  console.log("   0  1  2");
  console.log("0 " + board[0].join(" | "));
  console.log("  ---------");
  console.log("1 " + board[1].join(" | "));
  console.log("  ---------");
  console.log("2 " + board[2].join(" | "));
}

function horizontalWin() {
  // Your code here
  for (let i = 0; i < sideLength; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return true;
    }
  }
  return false;
}

function verticalWin() {
  // Your code here
  for (let i = 0; i < sideLength; i++) {
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return true;
    }
  }
  return false;
}

function diagonalWin() {
  // Your code here
  if (
    (board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
    (board[0][2] === board[1][1] && board[1][1] === board[2][0])
  )
    return true;
  else return false;
}

function checkForWin() {
  // Your code here
  if (horizontalWin() || verticalWin() || diagonalWin()) return true;
  else return false;
}

function ticTacToe(row, column) {
  // Your code here
  let currentBoardPos = board[row][column];

  // assign current player symbol to designated row/column position if empty
  if (currentBoardPos === " ") {
    board[row][column] = playerTurn;
    if (checkForWin()) {
      announceWinner();
    }
  } else console.log("Invalid move.");

  // change playerTurn
  if (playerTurn === playerOne) playerTurn = playerTwo;
  else playerTurn = playerOne;
}

function announceWinner() {
  if (playerTurn === playerOne) {
    console.log("Player One wins!");
  } else console.log("Player Two wins!");
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
