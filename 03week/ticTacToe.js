"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [[" ", "X", " "], [" ", " ", "X"], [" ", " ", " "]];
console.log(board[1].indexOf("X"));
let playerTurn = "X";
const winForX = "X is the winner!";
const winForO = "O is the winner!";
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
  if (
    (board = [["X", "X", "X"], [" ", " ", " "], [" ", " ", " "]]) ||
    (board = [[" ", " ", " "], ["X", "X", "X"], [" ", " ", " "]]) ||
    (board = [[" ", " ", " "], [" ", " ", " "], ["X", "X", "X"]])
  ) {
    console.log(board);
    return true;
  } else {
    (board = [["O", "O", "O"], [" ", " ", " "], [" ", " ", " "]]) ||
      (board = [[" ", " ", " "], ["O", "O", "O"], [" ", " ", " "]]) ||
      (board = [[" ", " ", " "], [" ", " ", " "], ["O", "O", "O"]]);
    return true;
  }
}

function verticalWin() {
  if (
    (board = [["X", " ", " "], ["X", " ", " "], ["X", " ", " "]]) ||
    (board = [[" ", "X", " "], [" ", "X", " "], [" ", "X", " "]]) ||
    (board = [[" ", " ", "X"], [" ", " ", "X"], [" ", " ", "X"]])
  ) {
    return true;
  } else {
    (board = [["O", " ", " "], ["O", " ", " "], ["O", " ", " "]]) ||
      (board = [[" ", "O", " "], [" ", "O", " "], [" ", "O", " "]]) ||
      (board = [[" ", " ", "O"], [" ", " ", "O"], [" ", " ", "O"]]);
    return true;
  }
}

function diagonalWin() {
  // for (var i = 0; i <= board.length; i++) {
  // for (var j = 0; j < 3; j++ {
  //   if(board) {
  //   }
  // }return true;
  // } else if (
  //   (ticTacToe(0, 0) === "O" &&
  //     ticTacToe(1, 1) === "O" &&
  //     ticTacToe(2, 2) === "O") ||
  //   (ticTacToe(0, 2) === "O" &&
  //     ticTacToe(1, 1) === "O" &&
  //     ticTacToe(2, 0) === "O")
  // ) {
  //   return true;
  // }
}

function checkForWin() {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    console.log(verticalWin());
    return true;
  } else if (horizontalWin() || verticalWin() || diagonalWin() != true) {
    return false;
  } else {
    return tieGame;
  }
}

function ticTacToe(row, column) {
  board[row][column] = playerTurn;
  // checkForWin();
  playerChange();
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
