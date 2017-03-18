'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Checker {
  constructor(symbol) {
    this.symbol = (color === 'white') ? String.fromCharCode(0x125CB) : String.fromCharCode(0x125CF);
//white is a circle.   anything else is a solid circle
  }
}


function Board() {
  this.checkers = [];
  this.createCheckers = function(){
    var whiteCheckers = [  //hard coded the ONLY eligible positons for the WHITE checkers
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]
    ];

    var blackCheckers = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]
    ];

    for (var spot of whiteCheckers){
      //what is spot?   aeach array is in 'spot' ex [0,1]
      //spot is going to be an array
      //spot may look like [0,1]
      var row = spot[0];  //nth array ZERO element
      var column = spot[1]; //same nth array but 1-th element
    //row may have a 0 in it
    //column may have a 1 in it
      var whiteChecker = new Checker('white');
      this.grid[row][column] = whiteChecker;  // puts the value of circle or solid in the position
    }

    for (var spot of blackCheckers){
      //what is spot?   aeach array is in 'spot' ex [0,1]
      //spot is going to be an array
      //spot may look like [0,1]
      var row = spot[0];  //nth array ZERO element
      var column = spot[1]; //same nth array but 1-th element
    //row may have a 0 in it
    //column may have a 1 in it
      var blackChecker = new Checker('black');
      this.grid[row][column].push(blackChecker);   // puts the value of circle or solid in the position
      //this.checkers.push(this.grid[row][column](whiteChecker));
    }
// from our class discussion 3/1/2017
this.killChecker = function (position){  // in class we discussed that you could pass "row" & "column"
  var row = position [0];  //get rid of these if you pass row & column
  var column = position[1]; //get rid of these if you pass row & column
  var checktoKill = this.selectChecker(row,column);
  var indexofChecker = this.checker.indexOf(checktoKill);
  this.checker.splice(indexofChecker,1)
}





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

  this.start = function() {
    this.board.createCheckers(); //this was backwards in the spec  added in class 3/1/2017
    this.board.createGrid();
    // Your code here

    // this.moveChecker = function(start, end) {
    //   var checker = this.board.selectChecker(start[0], start[1]);
    //   this.board.grid[start[0]][start[1]] = null;
    //   this.board.grid[end[0]][end[1]] = checker;
    //   if (Math.abs(start[0] - end[0]) === 2) {
    //     var killPosition = [(parseInt(start[0],10) + parseInt(end[0],10)) / 2 , (parseInt(start[1],10) + parseInt(end[1],10)) / 2];
    //     this.board.killChecker(killPosition);
    //   }// end of function for moveChecker


// notes from Class
    this.moveChecker = function (start, end){

      var startColumn = start[1];

      var endRow = end[0];
      var endColumn = end[1];

      this.board.grid[startRow][startColumn] = null;

      this.board.grid[endRow][endColumn] = null;

      var check = this.selectChecker(startRow, startColumn);  //helper method to get a value instead of making it complex

      var distance = Math.abs(startRow - endRow);

      if(distance ==2){
        var midRow = startRow + endRow /2;
        var midColum = startColumn + endColumn /2;
        this.killChecker([midRow,midColum]);  // no need to use an array see references on line 58
        //this.killChecker(row, column)
      }


    }
  };
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
