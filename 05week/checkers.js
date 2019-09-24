'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  //create checker symbols
  this.color = color;
  if(color === 'white'){
    this.symbol = String.fromCharCode(0x125CB)
 }
 else{
   this.symbol = String.fromCharCode(0x125CF)
 }
}


class Board {
  constructor(grid,checkers){
    this.grid = [],
    this.checkers = [],
    this.playerTurn = this.whiteChecker;
    

      this.createCheckers = () => {
        let whitePositions = [[0, 1], [0, 3], [0, 5], [0, 7],
        [1, 0], [1, 2], [1, 4], [1, 6],
        [2, 1], [2, 3], [2, 5], [2, 7]];
        
        let blackPositions = [[5, 0], [5, 2], [5, 4], [5, 6],
        [6, 1], [6, 3], [6, 5], [6, 7],
        [7, 0], [7, 2], [7, 4], [7, 6]];
        //define positions
        for(let p = 0; p <= 11; p++){
          let whiteChecker = new Checker('white');
          this.checkers.push(whiteChecker);
          let position = whitePositions[p];
          this.grid[position[0]][position[1]] = whiteChecker;
          
          let blackChecker = new Checker('black');
          this.checkers.push(blackChecker);
          let position2 = blackPositions[p];
          this.grid[position2[0]][position2[1]] = blackChecker;
        }
      }

    legalMove(whichPiece,toWhere) {

    }
    };
    
  




  
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
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }}
  
  // initializeGrid(){
    //   row1 needs to be even
    //   col1 needs to be odd
    //   for(let row1 = 0; row1 < 3; row1++){
      //     for(let col1 = 0; col1 < 8; col1++){
        //       if(row1 % 2 ===0 && col1 % 2 === 1){
          //         this.grid[row1][col1] = this.whiteChecker;
          //       }
          //     }
          
          //   }
          // }
          // Your code here
          
          
          //check for valid input
          //has to be a number
          //has to be 2 numbers
          
          //valid move
          //check for proper color movement
          //has to be going to empty spot
          //goes from even to odd
          
          
          
          class Game {
            constructor() {
              this.board = new Board;
              }
          
            start() {
              this.board.createGrid();
              this.board.createCheckers();

              this.moveChecker = (whichPiece,toWhere) => {
                let which = whichPiece.split('')
                let where = toWhere.split('')

if (this.board.legalMove(whichPiece,toWhere) == true){
                this.board.grid[where[0]][where[1]] = this.board.grid[which[0]][which[1]];
                this.board.grid[which[0]][which[1]] = null;
}
              } 
            }
            
          }
          
          
          
          function getPrompt() {
            game.board.viewGrid();
            rl.question('which piece?: ', (whichPiece) => {
              rl.question('to where?: ', (toWhere) => {
                game.moveChecker(whichPiece, toWhere);
                getPrompt();
    });
  });
}

const game = new Game();
game.start();


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
