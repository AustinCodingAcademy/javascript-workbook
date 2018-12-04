"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
// playerTurn gives a starting point to alternate between players
let playerTurn = "X";
// gameOver is false until a win condition = true
let gameOver = false;
// winCondition variable takes the current player (x3) and turns it into a string (.toString()) with comma deliminator. this is reused and passed into horizontal, vertical and diagonal
const winCondition = (
  "" +
  playerTurn +
  "," +
  playerTurn +
  "," +
  playerTurn +
  ""
).toString();

function printBoard() {
  // if gameOver is true (implied) then reset the board variable (array)
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

// playerChange is passed into ticTacToe() to alternate between players
function playerChange() {
  if (playerTurn === "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X";
  }
}

// invalidMove looks at the board row and column and if it is already occupied with an "X" or "O" returns true - passed into ticTacToe() and if true returns "invalid move"
function invalidMove(row, column) {
  if (board[row][column] === "X" || board[row][column] === "O") {
    return true;
  }
  return false;
}

// horizontalWin() turns the index of board variables into strings and then checks against winCondition()
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
// verticalWin uses variables in bracket notation to grab the space on the board and turns it into strings and then compared to winCondition
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

  // comparing variables that have been converted from array to string
  if (
    columnLeft === winCondition ||
    columnMiddle === winCondition ||
    columnRight === winCondition
  ) {
    console.log(playerTurn + " wins");
    return true;
  }
}
// similar concept as the verticalWin - grab board spaces via brackett notation and convert into string / variables
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

// checkForWin looks for any type of win condition and if there is a win, prints a blank board (gameOver takes care of the reset)
function checkForWin() {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    printBoard();
    gameOver = true;
    return true;
  } else {
    return false;
  }
}

// the parent ticTacToe function contains invalidMove() and always checks to make sure the user inputted a valid move - then moves down to checkForWin - if there isn't any of the two former conditions, it changes to the next player's move.
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
