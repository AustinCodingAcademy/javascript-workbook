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
  // Your code here
}

function verticalWin() {
  // Your code here
}

function diagonalWin() {
  // Your code here
}

function checkForWin() {
  // Your code here
}

function ticTacToe(row, column) {
  // Your code here
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

$(document).ready(function() {
  var move = 1;
  var play = true;

  $("#gameBoard tr td").click(function() {
    if ($(this).text() == "" && play) {
      if (move % 2 == 1) {
        $(this)
          .append("X")
          .css({ fontSize: "50px", color: "pink" });
      } else {
        $(this)
          .append("O")
          .css({ fontSize: "50px", color: "#00ffff6f" });
      }
      move++;
      if (checkForWin() != -1 && checkForWin() != "") {
        // Write function: winner text
        if (checkForWin() == "X") {
          alert("Player 1 Winner!");
        }
        // Write function: winner text
        else {
          alert("Player 2 Winner!");
        }
        play = false;
      }
    }
  });
  // Write function: clear board

  /* $('.reset').click (function () {
    let clearBoard = $("#gameBoard");
    let i = 0;
    for (i = 0; i < clearBoard.length; i++) {
      $(clearBoard[i]).text('');
    }
  } */

  // Write function: check for win
  function checkForWin() {
    var box1 = $("#gameBoard tr:nth-child(1) td:nth-child(1)").text();
    var box2 = $("#gameBoard tr:nth-child(1) td:nth-child(2)").text();
    var box3 = $("#gameBoard tr:nth-child(1) td:nth-child(3)").text();
    var box4 = $("#gameBoard tr:nth-child(2) td:nth-child(1)").text();
    var box5 = $("#gameBoard tr:nth-child(2) td:nth-child(2)").text();
    var box6 = $("#gameBoard tr:nth-child(2) td:nth-child(3)").text();
    var box7 = $("#gameBoard tr:nth-child(3) td:nth-child(1)").text();
    var box8 = $("#gameBoard tr:nth-child(3) td:nth-child(2)").text();
    var box9 = $("#gameBoard tr:nth-child(3) td:nth-child(3)").text();
    // check all rows
    if (box1 == box2 && box2 == box3) {
      return box3;
    } else if (box4 == box5 && box5 == box6) {
      return box6;
    } else if (box7 == box8 && box8 == box9) {
      return box9;
    }
    // check all columns
    else if (box1 == box4 && box4 == box7) {
      return box7;
    } else if (box2 == box5 && box5 == box8) {
      return box8;
    } else if (box3 == box6 && box6 == box9) {
      return box9;
    }
    // check both diagonals
    else if (box1 == box5 && box5 == box9) {
      return box9;
    } else if (box3 == box5 && box5 == box7) {
      return box7;
    }
    // no winner
    return -1;
  }
});
