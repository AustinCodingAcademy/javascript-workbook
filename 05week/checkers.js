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
 if(color === 'black'){
   this.symbol = String.fromCharCode(0x125CF)
  }
}
//switches players



let player = 'white'

class Board {
  playerTurn(){
    if (player === 'white'){
      player = 'black'
      console.log('black player turn')
    }
    
    else if(player === 'black') {
      player = 'white'
    console.log('white player turn')
    }}

  constructor(grid,checkers){
    this.grid = [],
    this.checkers = [],
   
    
    
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
    
  };
  legalMove(which,where) {
   
    console.log(which,where);
    
    if(which.length !== 2 || which[0] > 7 || which[1] > 7){
      console.log('Please enter numbers less than 8')
      return false;
    }
    if(where.length !== 2 || where[0] > 7 || where[1] > 7){
      console.log('Please enter numbers less than 8')
      return false;
    }
    
    else{
      return true;
    }
    
  }
  validMove(whichPiece,toWhere){
      // white moves
var start = parseInt(whichPiece);
var end = parseInt(toWhere);

console.log(start,end);
      if(player == 'white'){
        if(end - start !==9 && end - start !== 11){
          console.log("Invalid Move");
          return false
        }
        }
        // if(start - end !== 18 || start - end !== 22){
  
        //   return false
        // }
      
      //black moves
      if(player == 'black'  ){
        //flip start and end so the value's not negative
        if(start - end !== 9 && start - end !==11 ){
          console.log("Invalid Move");
          return false
        }
      //  if(start - end !== 18 && start - end !== 22){
      //    return false
      //  }
  }
      return true
    }
    
  killChecker(whichPiece,toWhere){
    var start = parseInt(whichPiece);
    var end = parseInt(toWhere);
    var jumpRightWhite = this.board.grid[((start)[0]) +1][((start)[1]) +1] 
    var jumpLeftWhite = this.board.grid[((start)[0]) +1][((start)[1]) -1]
    var jumpRightBlack = this.board.grid[((start)[0]) -1][((start)[1]) +1]
    var jumpLeftBlack = this.board.grid[((start)[0]) -1][((start)[1]) -1]
    
    if(player == 'white'){
       if(start - end !== 18 && start - end !== 22){
         return false
       }else{
        if(jumpRightWhite === 'white' && whichPiece - toWhere === 18){
          this.board.grid[(start[0]) -1][(start[1]) +1] = null
          return true;
       }
       if(jumpLeftWhite === 'white' && whichPiece - toWhere === 18){
        this.board.grid[(start[0]) -1][(start[1]) -1] = null
        return true;
     }
     else{
       return false
     }
    }}


       if(player == 'black'  ){
       if(start - end !== 18 && start - end !== 22){
         return false
       }else{
        if(jumpRightBlack === 'black' && whichPiece - toWhere === 18){
          this.board.grid[(start[0]) +1][(start[1]) +1] = null
          return true;
       }
       if(jumpLeftBlack === 'black' && whichPiece - toWhere === 18){
        this.board.grid[(start[0]) +1][(start[1]) -1] = null
        return true;
     }
     else{
       return false
     }
  }
      
  }}




  
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
                let which = whichPiece.split('');
                let where = toWhere.split('');
             
                if (this.board.legalMove(which,where) === true && this.board.validMove(whichPiece,toWhere) === true){
                    this.board.grid[where[0]][where[1]] = this.board.grid[which[0]][which[1]];
                    this.board.grid[which[0]][which[1]] = null;
                  } this.board.playerTurn();
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
