'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Checker(color) { //fn to create actual checkers to be placed in play
  // Your code here
  this.symbol = null; //??
  if (color === 'white') { //setting appropriate checker for white moves
    this.symbol = String.fromCharCode(0x125CB); //setting checker for white
  } else if (color === 'black') { //setting checker for black
    this.symbol = String.fromCharCode(0x125CF) //setting checker for black;
  }
}

function Board() { //class to build nd maintain the board
  this.grid = []; // emty array to hold the board indices
  this.checkers = []; //empty array to keep track of checker indices
  const whiteChecker = new Checker('white'); //setting const to create checker from above Checker fn
  const blackChecker = new Checker('black'); //same as above for black instead of white
  this.createCheckers = function() { //fn within Board to generate starting positions of checkers
    var whitePositions = [ //setting positions for white at beginning of game
      [0, 1],
      [0, 3],
      [0, 5],
      [0, 7],
      [1, 0],
      [1, 2],
      [1, 4],
      [1, 6],
      [2, 1],
      [2, 3],
      [2, 5],
      [2, 7]
    ];
    var blackPositions = [ //setting positions for black at beginnning of game

      [5, 0],
      [5, 2],
      [5, 4],
      [5, 6],
      [6, 1],
      [6, 3],
      [6, 5],
      [6, 7],
      [7, 0],
      [7, 2],
      [7, 4],
      [7, 6]
    ];
    // to loop through coordinate values
    for (var i = 0; i < whitePositions.length; i++) { //starting to loop through all the white positions
      var [x, y] = whitePositions[i]; //set var up as an array type container to hold each white position iterated through
      var piece = [x, y]; //settin var to hold var [x, y]------not sure why this is necessary yet!!!!!!!!!
      this.checkers.push(piece); //adding each piece ([x,y] coordinates) to the array called checkers
      this.grid[x][y] = whiteChecker; //not sure about this yet
    }
    for (var i = 0; i < blackPositions.length; i++) { //stating loop to iterate through black positions
      var [x, y] = blackPositions[i]; //set var up as array type container to hold each white position iterate through
      var piece = [x, y]; //not sure about this see above ln 68
      this.checkers.push(piece); //adding wach piece to the array called checkers
      this.grid[x][y] = blackChecker; //see ln 70
    }


  }



  this.createGrid = function() { //method within Board class that builds the grid to hold the game

    for (let row = 0; row < 8; row++) { //start loop to create  8 rows
      this.grid[row] = []; //empty array for each row
      for (let column = 0; column < 8; column++) { //start loop to create 8 columns

        this.grid[row].push(null); // push in 8 columns of nulls
      }
    }
  }
  this.selectChecker = function(row, column) { //'helper' function. this should return the checker at a particlar location on the grid
    return this.grid[x][y];

  }
  // prints out the board
  this.viewGrid = function() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      const rowOfCheckers = [row]; // we start with our row number in our array

      for (let column = 0; column < 8; column++) { // a loop within a loop

        if (this.grid[row][column]) { // if the location is "truthy" (contains a checker piece, in this case)

          rowOfCheckers.push(this.grid[row][column].symbol); // push the symbol of the check in that location into the array

        } else {
          rowOfCheckers.push(' '); // just push in a blank space

        }
      }
      string += rowOfCheckers.join(' '); // join the rowOfCheckers array to a string, separated by a space

      string += "\n"; // add a 'new line'

    }
    console.log(string);
  };
  this.killChecker = function(position) {
    var position = [x, y];
    this.selectChecker = function(position) {
      this.checkers.indexOf(selectChecker);
      this.checker.splice();
      this.grid = null;
    }
  }
  console.log('jjjjjjjjjj');

} // Your code here



function Game() {

  this.board = new Board(); //setting up new board for play

  this.start = function() { //method to call in creation of grid array(locations) and checker creation
    this.board.createGrid();
    // Your code here
    this.board.createCheckers();
  };
  this.moveChecker = function(start, end) { //method to facilitate and track movement of checkers
    var checker = this.start;
    console.log('afaf');

    this.selectChecker = function(row, column) { //'helper' function. this should return the checker at a particlar location on the grid
      checker = this.grid[x][y];

    }
    checker = null; //setting var to null since it doesn't exist here yet I think----??????
    console.log('EEEEEE');
  }
  var checker = this.end;

}
//this.selectChecker() = checker;
//this.selectChecker(start[i]) = checker;



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
console.log('game', game);
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

  describe('Game.moveChecker()', function() {
    it('should move a checker', function() {
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
