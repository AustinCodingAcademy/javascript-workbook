"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Checker {
  // Your code here
  constructor(checkerColor) {
    // similar to what we did in class, but using if statement create "B" black or "R" red pieces
    if (checkerColor === "red") {
      // (taken from viewGrid) push the symbol of the checker in that location into the array
      this.symbol = "r";
    } else {
      this.symbol = "b";
    }
    // console.log(this.symbol, "============this is a game piece===========");
  }
}

function placePieces() {
  console.log("place pieces");
}

class Board {
  constructor() {
    this.grid = [];
    this.checkers = [];
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
          // push the symbol of the checker in that location into the array
          // symbol = checker (specify red or black)
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(" ");
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(" ");
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  placePieces() {
    let redPiece = [];
    for (let redHorizontal = 0; redHorizontal < 3; redHorizontal++) {
      for (let redVertical = 0; redVertical < 8; redVertical++) {
        if ((redHorizontal + redVertical) % 2 === 1) {
          redPiece.push([redHorizontal, redVertical]);
        }
      }
    }
    console.log(redPiece);
    for (let i = 0; i < 12; i++) {
      // make the next checker piece
      let redRow = redPiece[i][0];
      let redColumn = redPiece[i][1];
      let newRedPiece = new Checker("red");
      this.checkers.push(newRedPiece);
      console.log(this.grid);
      console.log(this.grid[redRow]);

      this.grid[redRow][redColumn] = newRedPiece;
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
  moverChecker(whichPiece, toWhere) {
    console.log(whichPiece, toWhere);
    // we wanna make sure the move is legal
    // we wanna make sure that no piece is a leaga adjecent
    // we want to check the next adjacent spot

    //EXTRA CREDIT king logic
    // EXTRA CREDIT - required moves logic (jumps)
  }
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
