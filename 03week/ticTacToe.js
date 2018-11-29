"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Set up empty board array
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
let gameOver = false;

//AI stuff
let firstMove = true;
let lastRowPlayed = "";
let lastColumnPlayed = "";

//Stars with player X
let playerTurn = "X";

//function to display board
function printBoard() {
  if (gameOver) {
    //Clears board and resets player to X
    board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    playerTurn = "X";
    gameOver = false;
    firstMove = true;
    console.log("Starting new game...");
  }
  console.log("   0  1  2");
  console.log("0 " + board[0].join(" | "));
  console.log("  ---------");
  console.log("1 " + board[1].join(" | "));
  console.log("  ---------");
  console.log("2 " + board[2].join(" | "));
}

//function to check for horizontal wins
function horizontalWin() {
  console.log("Checking Horizontal Wins...");
  let winCombos = [
    //Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

  let i = -1;
  return winCombos.some(function(threeInARow) {
    i++;
    return threeInARow.every(function(square) {
      let rowChosen = board[i];
      let space = rowChosen[threeInARow.indexOf(square)];
      console.log(
        "checking item " + threeInARow.indexOf(square) + " in row " + i + ":",
        board[i]
      );
      console.log("item is ", space);
      if (space === playerTurn) {
        console.log("item matches current player, continuing to next item...");
      } else {
        console.log("item does not match current player, moving to next row");
      }
      return space === playerTurn;
    });
  });
}

//function to check for vertical wins
function verticalWin() {
  console.log("Checking Vertical Wins...");
  // let winCombos = [
  //   //Rows
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8]
  // ];

  // let i = -1;
  // return winCombos.every(function(threeInARow) {
  //   i++;
  //   return threeInARow.some(function(square) {
  //     let rowChosen = board[i];
  //     let space = rowChosen[threeInARow.indexOf(square)];
  //     console.log(
  //       "checking item " + threeInARow.indexOf(square) + " in row " + i + ":",
  //       board[i]
  //     );
  //     console.log("item is ", space);
  //     if (space === playerTurn) {
  //       console.log("item matches current player, continuing to next row...");
  //     } else {
  //       console.log("item does not match current player, moving to next item");
  //     }
  //     return space === playerTurn;
  //   });
  // });

  let foundLetterRow1 = "";
  let foundLetterRow2 = "";
  let foundLetterRow3 = "";
  let foundLetterRow1Index = "";
  let foundLetterRow2Index = "";
  let foundLetterRow3Index = "";
  checkRows();
  function checkRows() {
    for (let i = 0; i < board.length; i++) {
      //go through each row of board, check to see if X or O resides in any space
      checkItems();
      function checkItems() {
        for (let j = 0; j < board[i].length; j++) {
          console.log(
            "checking item " + j + ": ",
            board[i][j] + " of row " + i,
            board[i]
          );
          if (board[i][j] === playerTurn) {
            console.log(
              "item matches current player, continuing to next row..."
            );
            if (i === 0 && board[i][j] != " ") {
              foundLetterRow1 = board[i][j];
              foundLetterRow1Index = j;
              console.log(
                "first item ",
                board[i][j],
                " found at index " + foundLetterRow1Index
              );
            } else if (i === 1 && board[i][j] != " ") {
              foundLetterRow2 = board[i][j];
              foundLetterRow2Index = j;
              console.log(
                "second item ",
                board[i][j],
                " found at index " + foundLetterRow2Index
              );
            } else if (i === 2 && board[i][j] != " ") {
              foundLetterRow3 = board[i][j];
              foundLetterRow3Index = j;
              console.log(
                "third item ",
                board[i][j],
                " found at index " + foundLetterRow3Index
              );
            }
            return;
          } else {
            console.log(
              "item does not match current player, moving to next item"
            );
          }
        }
      }
    }
  }
  if (
    foundLetterRow1 != "" &&
    foundLetterRow1 === foundLetterRow2 &&
    foundLetterRow2 === foundLetterRow3 &&
    foundLetterRow1Index === foundLetterRow2Index &&
    foundLetterRow2Index === foundLetterRow3Index
  ) {
    return true;
  } else {
    return false;
  }
}

//function to check for diagonal wins
function diagonalWin() {
  console.log("Checking Diagonal Wins...");
  let row0Index0 = "";
  let row0Index2 = "";
  let row1Index1 = "";
  let row2Index0 = "";
  let row2Index2 = "";
  if (board[0][0] === playerTurn) {
    console.log("Row 0 index 0 matches " + playerTurn);
    row0Index0 = playerTurn;
  }
  if (board[0][2] === playerTurn) {
    console.log("Row 0 index 2 matches " + playerTurn);
    row0Index2 = playerTurn;
  }
  if (board[1][1] === playerTurn) {
    console.log("Row 1 index 1 matches " + playerTurn);
    row1Index1 = playerTurn;
  }
  if (board[2][0] === playerTurn) {
    console.log("Row 2 index 0 matches " + playerTurn);
    row2Index0 = playerTurn;
  }
  if (board[2][2] === playerTurn) {
    console.log("Row 2 index 2 matches " + playerTurn);
    row2Index2 = playerTurn;
  }
  if (
    (row0Index0 === playerTurn &&
      row1Index1 === playerTurn &&
      row2Index2 === playerTurn) ||
    (row0Index2 === playerTurn &&
      row1Index1 === playerTurn &&
      row2Index0 === playerTurn)
  ) {
    return true;
  } else {
    row0Index0 = "";
    row0Index2 = "";
    row1Index1 = "";
    row2Index0 = "";
    row2Index2 = "";
    return false;
  }
}

function checkForWin() {
  console.log("Checking all possible win conditions...");
  if (horizontalWin()) {
    return true;
  } else if (verticalWin()) {
    return true;
  } else if (diagonalWin()) {
    return true;
  } else {
    return false;
  }
}

function ticTacToe(row, column) {
  console.log(
    "player is: " +
      playerTurn +
      ", row entered is " +
      parseInt(row) +
      " and column entered is " +
      parseInt(column)
  );
  //if player enters invalid row/column
  if (
    (row != "0" && row != "1" && row != "2") ||
    (column != "0" && column != "1" && column != "2")
  ) {
    console.log("You must enter a valid row/column!");
    return "You must enter a valid row/column!";
  }

  //if player is X
  let rowChosen = board[row];
  let space = rowChosen[column];
  if (playerTurn === "X") {
    if (space != "X" && space != "O") {
      board[row].splice(column, 1, "X");
      console.log("Placing X in row " + row + ", column " + column);
      if (checkForWin()) {
        gameOver = true;
        return "Player Wins!";
      }
      playerTurn = "O";
      return "";
    } else {
      return "Space Occupied!";
    }
  } else {
    //if player is O
    if (space != "X" && space != "O") {
      board[row].splice(column, 1, "O");
      console.log("Placing O in row " + row + ", column " + column);
      if (checkForWin()) {
        printBoard();
        gameOver = true;
        return "AI Wins!";
      }
      console.log("returning test");
      playerTurn = "X";
      return "";
    } else {
      return "Space Occupied!";
    }
  }
}

function AIChoose() {
  if (firstMove) {
    const nums = [0, 1, 2];
    let chosen = [];
    let row = nums[Math.floor(Math.random() * nums.length)];
    chosen.push(row);

    let col = nums[Math.floor(Math.random() * nums.length)];
    chosen.push(col);

    if (firstMove === 0 && lastRowPlayed === "") {
      console.log("AI choosing first row!");
      lastRowPlayed = row;
    }
    if (firstMove === 1 && lastColumnPlayed === "") {
      console.log("AI choosing first column!");
      lastColumnPlayed = col;
    }
    firstMove = false;
    console.log(chosen);
    return chosen;
  } else {
    //check for adjacent spaces next to already placed O
    const nums = [0, 1, 2];
    let chosen = [];
    let row = nums[Math.floor(Math.random() * nums.length)];
    chosen.push(row);

    let col = nums[Math.floor(Math.random() * nums.length)];
    chosen.push(col);

    return chosen;

    //TODO: logic for checking adjacent spaces
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player's turn.");
  if (playerTurn === "X") {
    rl.question("row: ", row => {
      rl.question("column: ", column => {
        console.log(ticTacToe(row, column));
        getPrompt();
      });
    });
  } else {
    let rowcolumn = AIChoose();
    let row = rowcolumn[0];
    let column = rowcolumn[1];
    console.log(ticTacToe(row, column));
    getPrompt();
  }
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
