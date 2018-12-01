"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
let playerTurn = "X";
let gameOver = false;

let winCondition = (
  "" +
  playerTurn +
  "," +
  playerTurn +
  "," +
  playerTurn +
  ""
).toString();

function printBoard() {
  if (gameOver) {
    board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    gameOver = false;
    console.log("resetting game");
  }
  console.log("   0  1  2");
  console.log("0 " + board[0].join(" | "));
  console.log("  ---------");
  console.log("1 " + board[1].join(" | "));
  console.log("  ---------");
  console.log("2 " + board[2].join(" | "));
}

function playerChange() {
  if (playerTurn === "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X";
  }
}

function invalidMove(row, column) {
  if (board[row][column] === "X" || board[row][column] === "O") {
    return true;
  }
  return false;
}

function horizontalWin() {
  if (
    board[0].toString() === winCondition ||
    board[1].toString() === winCondition ||
    board[2].toString() === winCondition
  ) {
    console.log(playerTurn + " wins");
    return true;
  }
}

function verticalWin() {
  let columnLeft = (
    "" +
    board[0][0] +
    "," +
    board[1][0] +
    "," +
    board[2][0] +
    ""
  ).toString();
  let columnMiddle = (
    "" +
    board[0][1] +
    "," +
    board[1][1] +
    "," +
    board[2][1] +
    ""
  ).toString();
  let columnRight = (
    "" +
    board[0][2] +
    "," +
    board[1][2] +
    "," +
    board[2][2] +
    ""
  ).toString();
  console.log(columnMiddle, " middle wins");

  if (
    columnLeft === winCondition ||
    columnMiddle === winCondition ||
    columnRight === winCondition
  ) {
    console.log(playerTurn + " wins");
    return true;
  }
}

function diagonalWin() {
  let diagonalTopLeft = (
    board[0][0] +
    "," +
    board[1][1] +
    "," +
    board[2][2]
  ).toString();
  let diagonalTopRight = (
    board[0][2] +
    "," +
    board[1][1] +
    "," +
    board[2][0]
  ).toString();

  if (diagonalTopLeft === winCondition || diagonalTopRight === winCondition) {
    console.log(playerTurn + " wins");
    return true;
  }
}

function checkForWin() {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    printBoard();
    gameOver = true;
    return true;
  } else {
    return false;
  }
}

function ticTacToe(row, column) {
  if (invalidMove(row, column)) {
    console.log("Invalid Move");
  } else {
    board[row][column] = playerTurn;
    checkForWin();
    playerChange();
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
