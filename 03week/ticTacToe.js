"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

let playerTurn = "X";

function isValidMove(row, col) {
  const validMoves = ["0", "1", "2"];
  if (
    validMoves.includes(row) &&
    validMoves.includes(col) &&
    board[row][col] === " "
  ) {
    return true;
  }
  return false;
}

function changePlayer() {
  if (playerTurn === "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X";
  }
}

function printBoard() {
  console.log("   0  1  2");
  console.log("0 " + board[0].join(" | "));
  console.log("  ---------");
  console.log("1 " + board[1].join(" | "));
  console.log("  ---------");
  console.log("2 " + board[2].join(" | "));
}

function horizontalWin() {
  const winningRow = playerTurn + "," + playerTurn + "," + playerTurn;
  for (let row = 0; row < 3; row++) {
    if (board[row].toString() === winningRow) {
      return true;
    }
  }
  return false;
}

function verticalWin() {
  const winningColumn = playerTurn + "," + playerTurn + "," + playerTurn;
  for (let col = 0; col < 3; col++) {
    let currentColumn = [];
    for (let row = 0; row < 3; row++) {
      currentColumn.push(board[row][col]);
    }
    if (currentColumn.toString() === winningColumn) {
      return true;
    }
  }
  return false;
}

function diagonalWin() {
  if (board[1][1] != playerTurn) {
    return false;
  } else if (board[0][0] === playerTurn && board[2][2] === playerTurn) {
    return true;
  } else if (board[0][2] === playerTurn && board[2][0] === playerTurn) {
    return true;
  }
  return false;
}

function checkForWin() {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    return true;
  } else {
    return false;
  }
}

function ticTacToe(row, column) {
  if (isValidMove(row, column)) {
    board[row][column] = playerTurn;
  } else {
    console.log("Invalid move, try again.");
    changePlayer();
  }
  if (checkForWin()) {
    console.log("Player " + playerTurn + " wins!");
  } else {
    changePlayer();
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
