"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({  //<heh???
  input: process.stdin,
  output: process.stdout
});
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

let playerTurn = "X";

function printBoard() {
  console.log("   0  1  2");//<have on clue
  console.log("0 " + board[0].join(" | "));//join board sub so input doesn't misalign rest
  console.log("  ---------");
  console.log("1 " + board[1].join(" | "));
  console.log("  ---------");
  console.log("2 " + board[2].join(" | "));
}

function horizontalWin() {
  //horizontal on top "row" depending on who's turn
  if (
    board[0][0] === playerTurn &&
    board[0][1] === playerTurn &&
    board[0][2] === playerTurn
  ) {
    console.log(true);
    return true;
  }
  //horizontal on middle "row" depending on who's turn
  else if (
    board[1][0] === playerTurn &&
    board[1][1] === playerTurn &&
    board[1][2] === playerTurn
  ) {
    console.log(true);
    return true;
  }
  //horizontal on last "row" depending on who's turn
  else if (
    board[2][0] === playerTurn &&
    board[2][1] === playerTurn &&
    board[2][2] === playerTurn
  ) {
    console.log(true);
    return true;
  }
  //still hasn't won horizontally
  else {
    return false;
  }
}
//setting up function of how someone would win vertically.
function verticalWin() {
  //vertical win on first[0] "column" if current player selects all true for this line.
  if (
    board[0][0] === playerTurn &&
    board[1][0] === playerTurn &&
    board[2][0] === playerTurn
  ) {
    console.log(true);
    //vertical win on second[1] "column" if current player selects all true for this line.
  } else if (
    board[0][1] === playerTurn &&
    board[1][1] === playerTurn &&
    board[2][1] === playerTurn
  ) {
    console.log(true);
    return true;
    //vertical win on last[2] "column"
  } else if (
    board[0][2] === playerTurn &&
    board[1][2] === playerTurn &&
    board[2][2] === playerTurn
  ) {
    console.log(true);
    return true;
  } //still haven't won vertically
  else {
    return false;
  }
}
//setting up function for horizontal win.
function diagonalWin() {
  //going in a row top left to bottom right.
  if (
    board[0][0] === playerTurn &&
    board[1][1] === playerTurn &&
    board[2][2] === playerTurn
  ) {
    console.log(true);
    //going in a row from top right to bottom left.
  } else if (
    board[0][2] === playerTurn &&
    board[1][1] === playerTurn &&
    board[2][0] === playerTurn
  ) {
    console.log(true);
    return true;
  }
  //still haven't gotten diagonal win.
  else {
    return false;
  }
}
//has anyone won yet?
function checkForWin() {
  //when someone wins vertically I want this to happen. "Row" and "Column" is now being defined.
  if (verticalWin(row, column)) {
    console.log("VERTICAL WIN!!");
    return true;
  }
  //when someone wins diagnally true, i want this to happen
  else if (diagonalWin(row, column)) {
    console.log("DIAGONAL WIN!!");
    return true;
  } //when someone wins horizontal "true" i want this to happen
  else if (horizontalWin(row, column)) {
    console.log("HORIZONTAL WIN!!");
    return true;
  } else {
    return false;
  }
}
//setting up "scan for empty function"
const checkValidEntry = (row, column) => {
  //if everything is ***see "note jack"
  if (
    (row === "0" || row === "1" || row === "2") &&
    (column === "0" || column === "1" || column === "2") &&
    board[row][column] === " " //***note jack: equal to empty do this
  ) {
    return true;
  } else {
    return false;
  }
};
//in the name
const switchPlayer = (row, column) => {
  //if it's x...switch to O, if not...switch to X.
  if (playerTurn === "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X";
  }
};
//don't steal things that aren't yours
function ticTacToe(row, column) {
  if (checkValidEntry(row, column)) {
    board[row][column] = playerTurn;
    switchPlayer(row, column);
  } else {
    console.log("Invalid entry!");
  }
}

//define player
function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question("row: ", row => { // < what do big arrows do again?
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
