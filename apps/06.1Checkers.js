'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// This funciton takes color as an argument, I guess from the user then assigns it a Charcode to be displayed on the board. 

class Checker{
  constructor(color) {
    if (color === 'white'){
      // the s in String must be capitalized.
      this.symbol = String.fromCharCode(0x125CB);
    } else{ 
        this.symbol = String.fromCharCode(0x125CF);
    } 
  }
}

// The Board class will be concerned about
// attributes
// A grid layout this.grid = ....
// "In play" checkers this.checkers = ....
// methods
// Creating the grid this.createGrid = function() { ....
// Viewing the grid this.viewGrid = function() { ....
// Creating the checker instances this.createCheckers = function() { ...
// Selecting a particular checker this.selectChecker (position) { ...
// Killing a checker this.killChecker = function(position) {...

function Board() {
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
    }; // ***
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
    }
    this.checkers = [];
    // this.createCheckers is pushing to this.checkers??
    this.createCheckers = function(){
      var whitePositions =  [[0, 1], [0, 3], [0, 5], [0, 7], [1, 0], [1, 2], [1, 4], [1, 6],[2, 1], [2, 3], [2, 5], [2, 7]];
      var blackPositions =  [[5, 0], [5, 2], [5, 4], [5, 6],[6, 1], [6, 3], [6, 5], [6, 7], [7, 0], [7, 2], [7, 4], [7, 6]];

      for (var i = 0; i <= 11; i++) { 
        // for(var spot of whitePositions) {
            //spot is going to be an array position in white Positions
            //spot may look like [0,1]
        // var row = spot[0];
        // var column = spot[1];
            //row may have a zero in it
            //column may have a 1 in it
        //var whiteChecker = new Checker('white');   
        //this.grid[row][column] = whiteChecker;
        //}

        var checkerW = new Checker('white');
        var p = whitePositions[i];
        this.checkers.push(checkerW);
        this.grid[p[0]][p[1]] = checkerW;

        var checkerB = new Checker('black');
        var q = blackPositions[i];
        this.checkers.push(checkerB);
        this.grid[q[0]][q[1]] = checkerB;
      }
    }
    // All this does is return the checker at that particular spot on this.grid. This will be a handy "helper" function.
    this.selectChecker = function (row, column){ 
      // This is a helper function to use later. 
      return this.grid[row][column];
    }
    // Takes the argument from the if statement in moveChecker in game as killPosition as a number
    this.killChecker = function(killPosition){  
      // create a container to hold the value returned from selectChecker in Board using the two different indices of killPosition
      var toKillPosition = this.selectChecker(killPosition[0], killPosition[1]);
      // create another container to hold the indexOf the position so we know we can kill it.
      var location = this.checkers.indexOf(toKillPosition);
      // we go into .this instance of checkers and .splice off the location index for just 1 position.
      this.checkers.splice(location, 1);
      // Then we set that index to null to join the rest of the board spots. 
      this.grid[killPosition[0]][killPosition[1]] = null;
    }
      
      // First find the index of the checker then create a var to hold the value
      // Use that var in .splice() to remove it. But you need to first find the .indexOf it. 
      // need to use .splice on the grid
      // the values in .splice() will come from the indexes of position
      // Position will come from the spot that was jumped
      // Means that we'll need to check where the piece came from and where in went to
      // then check the value between those to spots and evalute whether a piece was there or not. 
      // if true then kill.Checker needs to run. 

} //<--last bracket in Board

function game() {
  // calls board function to creat a board for .this instance
  this.board = new Board();
  // calls two functions to print out the checker and the grid for .this instance
  this.start = function() {
    this.board.createGrid();
    this.board.createCheckers();
  //moveChecker recieves arguments from getPrompt(whichPiece, toWhere) --> (start, end)
  // the arguments are a string but can be read as an array. i.e. [5, 0] and [4, 1]
  // User input is always a string!!!
  this.moveChecker = function(start, end){
    // creating a container the holds the value of the checker the user selects 
    // takes the index 0 and 1 of start = whichPiece
    var checker = this.board.selectChecker(start[0], start[1]);
    // then we need to set that place on the board to null, so we use the same index 0 and 1 of start = null
    this.board.grid[start[0]][start[1]] = null;
    // Then we need to move the piece to a new spot. We use the other argument brought in from getPrompt ( , toWhere)
    // we used the index 0 and 1 of end to find the spot on the grid in .this instance of the board to assign it the value we held
    // in var checker
    this.board.grid[end[0]][end[1]] = checker;

    var distance = Math.abs(start[0] - end[0]);
    // Used the console.logs to figure out what the computer was calculating. Learned I needed to convert the string start and end to Number
    // console.log("distance is " + distance);
    // console.log("middle row is " + midRow);
    // console.log("middle column is " + midColumn);   
    // console.log(killPosition);   
    if (distance === 2){
      // had to create a container for each of these values to store them as numbers to be computed. 
      var startX = Number(start[0]);
      var endX = Number(end[0]);
      var startY = Number(start[1]);
      var endY = Number(end[1]);
      // used the midpoint formula to find the average of x and y
      var midRow = (startX + endX) / 2;
      var midColumn = (startY + endY) / 2;
      // created a new container to hold the value of the averages of x and y
      var killPosition = [midRow, midColumn]; 
      //  Then we send the value to the killChecker function; again as lon as the distance is 2
      // Could come back later and make legal moves...
      this.board.killChecker(killPosition); 
      }
    }; 
  } 
} // <-- this is the last } in game

function getPrompt() {
  game.board.viewGrid();
  // The user gets asked what piece to move, this is stored in whichPiece
  rl.question('which piece?: ', (whichPiece) => {
    // then they're asked where they want to move the piece, that value is stored in toWhere
    rl.question('to where?: ', (toWhere) => {
      // then we pass the two valued through moveChecker line 137 in game line 128
      game.moveChecker(whichPiece, toWhere);
      getPrompt(); 
    });
  });
}

var game = new game();
game.start();


// Tests

if (typeof describe === 'function') {
  describe('Game', function() {
    it('should have a board', function() {
      // Board vs board - need to find all the occurences of board
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
