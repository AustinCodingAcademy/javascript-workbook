"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
console.log(board[1].indexOf("X"));
let playerTurn = "X";
// const winForX = "X is the winner!";
// const winForO = "O is the winner!";
const tieGame = "Tie game";

function printBoard() {
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

function horizontalWin() {
  let horizontalCheck = board.join(",");
  console.log(horizontalCheck);
  if (
    (horizontalCheck === "X", "X", "X", " ", " ", " ", " ", " ", " ") ||
    (horizontalCheck === " ", " ", " ", "X", "X", "X", " ", " ", " ") ||
    (horizontalCheck === " ", " ", " ", " ", " ", " ", "X", "X", "X")
  ) {
    getPrompt();
    console.log("Congratulations! X Wins!!");
    return true;
  }
  if (
    (horizontalCheck === "O", "O", "O", " ", " ", " ", " ", " ", " ") ||
    (horizontalCheck === " ", " ", " ", "O", "O", "O", " ", " ", " ") ||
    (horizontalCheck === " ", " ", " ", " ", " ", " ", "O", "O", "O")
  ) {
    getPrompt();
    console.log("Congratulations! O Wins!!");
    return true;
  }
}

function verticalWin() {
  let verticalCheck = board.join(",");
  console.log(verticalCheck);
  if (
    (verticalCheck === "X", " ", " ", "X", " ", " ", "X", " ", " ") ||
    (verticalCheck === " ", "X", " ", " ", "X", " ", " ", "X", " ") ||
    (verticalCheck === " ", " ", "X", " ", " ", "X", " ", " ", "X")
  ) {
    getPrompt();
    console.log("Congratulations! X Wins!!");
    return true;
  }
  if (
    (verticalCheck === "O", " ", " ", "O", " ", " ", "O", " ", " ") ||
    (verticalCheck === " ", "O", " ", " ", "O", " ", " ", "O", " ") ||
    (verticalCheck === " ", " ", "O", " ", " ", "O", " ", " ", "O")
  ) {
    getPrompt();
    console.log("Congratulations! O Wins!!");
    return true;
  }
}

function diagonalWin() {
  let diagonalCheck = board.join(",");
  console.log(diagonalCheck);
  if (
    (diagonalCheck === "X", " ", " ", " ", "X", " ", " ", " ", "X") ||
    (diagonalCheck === " ", " ", "X", " ", "X", " ", "X", " ", " ")
  ) {
    getPrompt();
    console.log("Congratulations! X Wins!!");
    return true;
  }
  if (
    (diagonalCheck === "O", " ", " ", " ", "O", " ", " ", " ", "O") ||
    (diagonalCheck === " ", " ", "O", " ", "O", " ", "O", " ", " ")
  ) {
    getPrompt();
    console.log("Congratulations! O Wins!!");
    return true;
  }
}

function checkForWin() {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    return true;
  } else if (horizontalWin() || verticalWin() || diagonalWin() != true) {
    return false;
  } else {
    return tieGame;
  }
}

function ticTacToe(row, column) {
  board[row][column] = playerTurn;
  playerChange();
  checkForWin();
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
