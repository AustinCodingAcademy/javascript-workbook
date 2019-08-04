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
  if ((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) || (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) || (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)){
    return true;
  } else {
    return false;
  };
};
function verticalWin() {
  if ((board[0][0]=== playerTurn && board[1][0]=== playerTurn && board[2][0]=== playerTurn) || (board[0][1]=== playerTurn && board[1][1]===playerTurn && board[2][1]=== playerTurn) || (board[0][2]=== playerTurn && board[1][2]===playerTurn && board[2][2]=== playerTurn)){
    return true;
  }else{
    return false;
  };
};
function diagonalWin(){
  if ((board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) || (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0]) === playerTurn){
    return true;
  } else {
    return false;
  };

};


function checkForWin() {
  // if horizontal Win is met or others are met,them it's a win
  if (horizontalWin()) {
    console.log("game over! " + playerTurn + "wins!");
    board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    return true;
  } else if (verticalWin()) {
    console.log("game over" + playerTurn + "wins");
    board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    return true;
  } else if (diagonalWin()) {
    console.log("game over" + playerTurn + "wins");
    board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    return true;
  }
}
//}else switchplayer();
//justdoit:define validMove
//justdoit:define is it empety?
//justdoit:define is it winner?
//justdoit:define how to switch players
const validInput = (row, column) => {
  if (row >= 0 && row <= 2 && (column >= 0 && column <= 2)) {
    return true;
  }
};

const validMove = (row, column) => {
  if (board[row][column] === " ") {
    return true;
  }
};
function switchPlayer () {
  if (playerTurn === 'X') {
    playerTurn = 'O';
  } else {
    playerTurn = 'X';
  };
};
function ticTacToe(row, column) {
  console.log(1)
  if (validInput(row, column)) {
    console.log(2)
    if (validMove(row, column)) {
      console.log(3)
      // marking the board here
      board[row][column] = playerTurn;
      console.log('playerTurn', playerTurn)
      checkForWin();
      switchPlayer();
    } else {
      console.log("please chose an open space.");
    }
  }
}
//what we need here:
//is valid (pick something else..?) if valid then
//place on the board[1][1]=player1]

//if not valid move:
//if (!board[1][1])
//if board[1][1=player1]

//flipping betteween x and o
//player = 'x'
//player = 'o'
//how do we keep track of switching player?
//if current == playerx {set current = playero} else {corrent = playerx}
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
