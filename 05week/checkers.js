'use strict';
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//checkers class to define key value pairs, color and symbol to create black and red piece
class Checkers {
  constructor(color, symbol) {
    this.color = color;
    this.symbol = symbol;
  }
}

//new instances of Checkers class, black piece, and red piece, color and symbol
const blackPiece = new Checkers('black', 'b')
const redPiece = new Checkers('red', 'r')

//switch player, black piece starts
let playerTurn = blackPiece;

function switchPlayer() {
  if(playerTurn == blackPiece) {
    playerTurn = redPiece; 
  } else {
    playerTurn = blackPiece;
  }
}

//define the grid and checkers array, pass into the Board 
class Board {
  constructor(grid, checkers) {
    this.grid = [],
    this.checkers = []
  }
  selectChecker(row, column) {
    return this.grid[row][column];
  }

  //assign the position on this.grid to null. That checker is now gone.
  killChecker(position) {
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

  //push red pieces to board, rows 0 through 3, all columns, odds and evens
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

  //push black pieces to board, rows 5 through 8, all columns, odds and evens
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
    let whichPieceArray = whichPiece.split("");//start position; create variable and turn a string into an array

    let toWhereArray = toWhere.split("");//end position; create variable and turn a string into an array

    if (this.legalMove(whichPiece, toWhere)) {
      //create new variable to pick up a piece to move
      let selectedPiece = this.board.selectChecker(whichPieceArray[0], whichPieceArray[1])

      this.board.grid[toWhereArray[0]][toWhereArray[1]] = selectedPiece//select piece to move
      this.board.grid[whichPieceArray[0]][whichPieceArray[1]] = null//set position back to null
      switchPlayer();
      // console.log("condition", toWhereArray[0], whichPieceArray[0])
    };
    
    let toWhereNumber = toWhere.split("").map(Number);//turn the end string into an array of numbers

    let row1 = toWhereNumber[0];//define row
    let column1 = toWhereNumber[1];//define column

    let endPosition = this.board.grid[row1][column1];//end postion equals end row, and end column 

        //to jump piece, start position, needs to be 18 or 22 away from end position, end position must be empty. 
        //use Number() to convert variables to numbers.
        //use selectedPiece to access and move piece, and set (remove) position back to null.
        if(playerTurn.symbol == "b") {
          if(Number(whichPiece) - 18 === Number(toWhere) || Number(whichPiece) - 22 === Number(toWhere)) {
            if(endPosition === null){
              let selectedPiece = this.board.selectChecker(whichPieceArray[0], whichPieceArray[1])
              

              this.board.grid[toWhereArray[0]][toWhereArray[1]] = selectedPiece//select piece to move
              this.board.grid[whichPieceArray[0]][whichPieceArray[1]] = null//set position back to null

              this.board.grid[Number(whichPieceArray[0]) - 1][Number(whichPieceArray[1]) + 1] = null;
              this.board.checkers.pop();//remove from checkers array, change length
              // console.log(this.board.checkers.length)
            }     
          }
       }

        //to jump piece, start position, needs to be 18 or 22 away from end position, end position must be empty. 
        //use Number() to convert variables to numbers.
        //use selectedPiece to access and move piece, and set (remove) position back to null.
      if(playerTurn.symbol == "r") {
        if(Number(whichPiece) + 18 === Number(toWhere) || Number(whichPiece) + 22 === Number(toWhere)) {
          if(endPosition === null){
            let selectedPiece = this.board.selectChecker(whichPieceArray[0], whichPieceArray[1])
      
            this.board.grid[toWhereArray[0]][toWhereArray[1]] = selectedPiece//select piece to move
            this.board.grid[whichPieceArray[0]][whichPieceArray[1]] = null//set position back to null
            this.board.grid[Number(whichPieceArray[0]) + 1][Number(whichPieceArray[1]) +1] = null;
            this.board.checkers.pop()//remove from checkers array, change length
            // console.log(this.board.checkers.length)
          }           
        }
     }
}

   //input can only be 2 numbers. and between 0 & 7.
  validInput(whichPiece, toWhere) {
    let whichPieceArray = whichPiece.split(""); 
    let toWhereArray = toWhere.split("");

    //loop through start and end array(position) and make sure input is only 2
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
            console.log("Legal Move")
            return true
            }     
            console.log("Not a Legal Move")
          }
       }

        //when red piece moves, it can only move down the board (+) 9 or 11, and end pos. must be empty
        if(playerTurn.symbol == "r") {
        if(Number(whichPiece) + 9 === Number(toWhere) || Number(whichPiece) + 11 === Number(toWhere)) {
          if(endPosition === null){
          console.log("Legal Move")
          return true 
          }           
          console.log("Not a Legal Move")
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
        game.moveChecker(whichPiece, toWhere);
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