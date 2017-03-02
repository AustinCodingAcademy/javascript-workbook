'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker { // class Checker, will create the checker itself
  constructor(color){ //pass the color of the checker through the constructor
   this.color = color; //assign the value of color to color with this.color
      if(color === 'white'){ // if color equals white, then use given CharCode to crete white checker
        this.symbol = String.fromCharCode(0x125CB); // assign the color code dot to symbol (white)
       
     }
      else {
        this.symbol = String.fromCharCode(0x125CF); //assign the color code dot to symbol (black)
        
     }
   }
 }


class Board {
  constructor(){
    this.grid = [];
  // creates an 8x8 array, filled with null values
    this.createGrid = function() {
    // loop to create the 8 rows
      for (var row = 0; row < 8; row++) {
        this.grid[row] = [];
      // push in 8 columns of nulls
      for (var column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  };

  // prints out the board
  this.viewGrid = function() {
    // add our column numbers
    var string = "  0 1 2 3 4 5 6 7\n";
    for (var row = 0; row < 8; row++) {
      // we start with our row number in our array
      var rowOfCheckers = [row];
      // a loop within a loop
      for (var column = 0; column < 8; column++) {
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
  };

  // Your code here
  this.checkers = []; //create empty array to push checkers onto later
  this.createCheckers = function(){
    var whitePosition = [
    [0, 1], [0, 3], [0, 5], [0, 7],
    [1, 0], [1, 2], [1, 4], [1, 6],
    [2, 1], [2, 3], [2, 5], [2, 7]];
		
    var blackPosition = [
		[5, 0], [5, 2], [5, 4], [5, 6],
    [6, 1], [6, 3], [6, 5], [6, 7],
    [7, 0], [7, 2], [7, 4], [7, 6]];
      
      // possible ES6 loop technique for pushing checker to the grid, using row and column variables
      // to clearly show how I assign the checker to the grid
       for(var spot of whitePosition){
         var white = new Checker("white");
         var row = spot[0];
         var column = spot[1];
         this.grid[row][column]= white;
         this.checkers.push(white);
       }
      // Same loop as above, however, I removed row and column variables and just used spot and the 
      // indexes [0] and [1], to populate the black checkers over valid blackChecker positions
       for(var spot of blackPosition){
         var black = new Checker("black");
         this.grid[spot[0]][spot[1]] = black;
         this.checkers.push(black);
       }
      
// Code below will populate the board with the checkers correctly, with one loop, using the older ES5
// Style of for loop. Assigning valid black and white checker positions to tempWhite and tempBlack   
       /*
       for (var i = 0; i <= 11; i++) {
       var tempWhite = whitePosition;
       var tempBlack = blackPosition;
       var white = new Checker('white');
       var black = new Checker("black");
         
         this.grid[tempWhite[i][0]][tempWhite[i][1]] = white;
         this.checkers.push(white);
         
         
         this.grid[tempBlack[i][0]][tempBlack[i][1]] = black;
         this.checkers.push(black);
         
 
   }*/
  }
 
this.selectChecker = function (checkerPosition) {
    //get the row and column indexes of the position passed in
     var row = checkerPosition[0];
     var column = checkerPosition[1];
     //put the checker in the variable c
     var spot = this.grid[row][column];
     //nullify the checker on board
     this.grid[row][column] = null;
     return spot;
}
 
 
 this.killChecker = function (position) {
     //get the checker using the helper function
     var checkerForKill = this.selectChecker(position);
     //get the index of the checker to be killed
     var killPosition = this.checkers.indexOf(checkerForKill);
     //remove the checker from the array
     this.checkers.splice(killPosition, 1);
     //assign the checker's position on the grid to null
     this.grid[position[0]][position[1]] = null;
   }
  }
  
}
class Game {
  constructor(){

   this.board = new Board();

   this.start = function() {
   this.board.createGrid();

    // Your code here
   this.board.createCheckers();
   }
this.moveChecker = (start, end) => {
     //select the checker and put it into the 'checker' variable
    var checker = this.board.selectChecker(start);
    
     // assign the checker to the end position
     this.board.grid[end[0]][end[1]] = checker;
     // this.board.selectChecker(end) = checker;
    
     // check if the vertical distance between the start and end positions is 2
     if (Math.abs(end[0] - start[0]) === 2) {
      //get the midpoint position by adding both coordinates up, and divide the result by 2
       var killPosition = [(parseInt(end[0]) + parseInt(start[0])) / 2, (parseInt(end[1]) + parseInt(start[1])) / 2];
       //kill the checker on board and from the array
       this.board.killChecker(killPosition);
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

var game = new Game();
game.start();


// Tests

if (typeof describe === 'function') {
  describe('Game', function() {
    it('should have a board', function() {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', function() {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', function () {
    it('should move a checker', function () {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', function() {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
