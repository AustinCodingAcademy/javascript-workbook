'use strict';
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function checkers() {
  // Your code here

}

//checkers class to define key value pairs, color and symbol to create black and red piece
class Checkers {
  constructor(color, symbol) {
    this.color = color;
    this.symbol = symbol;
  }
}

//new instances of Checkers class
const blackPiece = new Checkers('black', 'b')
const redPiece = new Checkers('red', 'r')

//switch player
let playerTurn = blackPiece;

function switchPlayer() {
  if(playerTurn == blackPiece) {
    playerTurn = redPiece; 
  } else {
    playerTurn = blackPiece;
  }
}

class Board {
  constructor(grid, checkers) {
    this.grid = [],
    this.checkers = []
  }
  selectChecker(row, column) {
    return this.grid[row][column];
  }

  //Find the index of that checker in the this.checkers array. then remove it by .splice()ing it out
  killChecker(position) {
    let checkerToKill = selectChecker(position[0],position[1]);
    let checkerIndex = this.checkers.indexOf(checkerToKill);

    this.checkers.splice(checkerIndex, 1);

    this.board.grid[position[0]][position[1]] = null;   
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
      // we whichPiece with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column]);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }

      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  //push red pieces to board
  initializeGrid () {
    for (let row1 = 0; row1 < 3; row1++) {
      for(let col1 = 0; col1 < 8; col1++) {
        if(row1 % 2 == 0 & col1 % 2 == 1) {
          this.grid[row1][col1] = redPiece.symbol;
          this.checkers.push(this.redPiece)
        } if(row1 % 2 == 1 & col1 % 2 == 0) {
          this.grid[row1][col1] = redPiece.symbol;
          this.checkers.push(this.redPiece);
        } 
      }
    }

    //push black pieces to board
    for (let row2 = 5; row2 < 8; row2++) {
      for(let col2 = 0; col2 < 8; col2++) {
        if(row2 % 2 == 0 & col2 % 2 == 1) {
          this.grid[row2][col2] = blackPiece.symbol;
          this.checkers.push(this.blackPiece);
        }if(row2 % 2 == 1 & col2 % 2 == 0) {
          this.grid[row2][col2] = blackPiece.symbol;
          this.checkers.push(this.blackPiece);
        } 
      }
    }
  }
}

class Game {
  constructor() {
    this.board = new Board;
  }
  whichPiece() {
    this.board.createGrid();
    this.board.initializeGrid(); 
  }
  moveChecker(whichPiece, toWhere) {
      let whichPieceArray = whichPiece.split("");//start; create variable and turn a string into an array

      let selectedPiece = this.board.selectChecker(whichPieceArray[0], whichPieceArray[1])
      //create new variable to pick up a piece to move
      let toWhereArray = toWhere.split(""); //end;

      this.board.grid[toWhereArray[0]][toWhereArray[1]] = selectedPiece//place selectedPiece and move those coordinates
      this.board.grid[whichPieceArray[0]][whichPieceArray[1]] = null//remove selectedPiece that moved from those coordinates
      switchPlayer();

      //
      if(Math.abs(toWhereArray - whichPieceArray === 2)) {

        let killPosition1 = [toWhereArray[0]] + [whichPieceArray[0]]
        let killPosition1A = killPosition1/2;
        let killPosition2 = [toWhereArray[1]] + [whichPieceArray[1]]
        let killPosition2A = killPosition2/2;
        
        this.board.killChecker([killPosition1A][killPosition2A]) = null;
        this.board.checkers.pop();
      }
}

   //input can only be 2 numbers. and between 0 & 7.
  validInput(whichPiece, toWhere) {
    let whichPieceArray = whichPiece.split(""); 
    let toWhereArray = toWhere.split("");

    if(whichPieceArray.length === 2 && toWhereArray.length === 2) {
      if(whichPieceArray[0] >= 0 && whichPieceArray[0] <= 7 && whichPieceArray[1] >= 0 && whichPieceArray[1] <= 7 && toWhereArray[0] >= 0 && toWhereArray[0] <= 7 && toWhereArray[1] >= 0 && toWhereArray[1] <= 7) {
        return true
      }
    }console.log("Invalid Input")
     return false 
  }
    //only diagonal moves are allowed, space must be empty, forward move do not allow backward move.
    legalMove(whichPiece, toWhere) {
      let toWhereNumber = toWhere.split("").map(Number);//turn the end string into an array of numbers

      let row1 = toWhereNumber[0];
      let column1 = toWhereNumber[1];

      let endPosition = this.board.grid[row1][column1];//end postion equals end row, and end column 

        //when black piece moves, it can only move up the board (-) 9 or 11, and end pos. must be empty
        if(playerTurn.symbol == "b") {
          if(Number(whichPiece) - 9 === Number(toWhere) || Number(whichPiece) - 11 === Number(toWhere)) {
            if(endPosition === null){
            console.log("Not a Legal Move")
            return true 
            }
          }
       }

        //when red piece moves, it can only move down the board (+) 9 or 11, and end pos. must be empty
        if(playerTurn.symbol == "r") {
        if(Number(whichPiece) + 9 === Number(toWhere) || Number(whichPiece) + 11 === Number(toWhere)) {
          if(endPosition === null){
          // console.log("Not a Legal Move")
          return true 
          }
        }
     }
          return false
     }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      if(game.validInput(whichPiece, toWhere)) {
      if (game.legalMove(whichPiece, toWhere)) {
        game.moveChecker(whichPiece, toWhere);
      };
      };
      getPrompt();
    });
  });
}

const game = new Game();
game.whichPiece();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}