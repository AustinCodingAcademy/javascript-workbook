"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let checkers = "x";


class Checker {
  //put a piece in here
  constructor(startPos) {
    if (parseInt(startPos, 10) < 40) {
      this.symbol = "O";
    } else {
      this.symbol = "X";
    }
  }
  // Your code HE
}


function moveChecker(whichPiece, toWhere) {

}

class Board {
  constructor(checkers) {
    this.grid = [],
      this.checkers = []
    // board needs an array of checkers
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(" ");
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join("|");
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }
  placePieces() {
    for (let i = 0; i < 24; i++) {
      const element = array[i];
      // make checker pieces appear on board
      // push this into board.checkers
    }
  }

  // Your code here
}

class Game {
  constructor() {
    this.board = new Board();

  }
  start() {
    this.board.createGrid();
    this.board.placePieces();
  }
  moveChecker(whichPiece, toWhere) {
    // make sure move is legal
    // we wanna make sure that no piece is in a legal adjacent
    // if there is we need to check the next adjacent spot
    // if that legal move allowed
    // Extra Credit: King Logic
    // Extra Credit: has to jump logic
  }

  function getPrompt() {
    game.board.viewGrid();
    rl.question("which piece?: ", whichPiece => {
      rl.question("to where?: ", toWhere => {
        game.moveChecker(whichPiece, toWhere);
        getPrompt();
      });
    });
  }

  const game = new Game();
  game.start();

  // Tests
  if (typeof describe === "function") {
    describe("Game", () => {
      it("should have a board", () => {
        assert.equal(game.board.constructor.name, "Board");
      });
      it("board should have 24 checkers", () => {
        assert.equal(game.board.checkers.length, 24);
      });
    });


    describe("Game.moveChecker()", () => {
      it("should move a checker", () => {
        assert(!game.board.grid[4][1]);
        game.moveChecker("50", "41");
        assert(game.board.grid[4][1]);
        game.moveChecker("21", "30");
        assert(game.board.grid[3][0]);
        game.moveChecker("52", "43");
        assert(game.board.grid[4][3]);
      });
      it("should be able to jump over and kill another checker", () => {
        game.moveChecker("30", "52");
        assert(game.board.grid[5][2]);
        assert(!game.board.grid[4][1]);
        assert.equal(game.board.checkers.length, 23);
      });
    });
  } else {
    getPrompt();
  }