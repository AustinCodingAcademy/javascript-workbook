'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//pass a string into this class function. The Value is either white or black.
function Checker(color) {
  // Your code here
  if(color === 'white'){
    this.symbol === String.fromCharCode(0x1263B);
    console.log(this.symbol + "checker");
  }
  else{
    this.symbol === String.fromCharCode(0x1263A);
  } 
  
  //Here i need to set the property called "symbol"
  //if color is white > String.fromCharCode(0x125CB)
  //if not then > String.fromCharCode(0x125CF)


}

function Board() {
  //create a property called checkers and assign it to an empty array
  this.checkers = [];
  this.createCheckers = function(){
    var whitePositions = [ 
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]
];
    var blackPositions = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]
    ];

for( var i = 0; i < whitePositions.length; i++){
  var position = whitePositions[i];

    
    var row = position[0];
    var column = position[1];

  //Instanciating white checker
  var checker = new Checker('white');
  this.grid[row][column] = checker;
  this.checkers.push(checker);

}

for( var i = 0; i < blackPositions.length; i++){
  var position = blackPositions[i];
    var row = position[0];
    var column = position[1];

  //Instanciating black checker
  var checker = new Checker('black');
  this.grid[row][column] = checker;
}


//create a method called 'createCheckers'
}
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
}
function Game() {

  this.board = new Board();
  this.checkers = new Checker();

  this.start = function() {
    this.board.createGrid();
    // Your code here
    this.board.createCheckers();
  };

  this.moveChecker = function(start, end){
    var startrow = start.split('')[0];
    var startcolumn = start.split('')[1];
    var endrow = end.split('')[0];
    var endcolumn = end.split('')[1];

    var checker = this.board.selectChecker(startrow,startcolumn);

    this.board.grid[startrow][startcolumn] = null;
  }


};

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
