'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//testinnnggg
//your attention plethhh


function Checker(color) {
  // Your code here
  if (color === 'white') {
    this.symbol = String.fromCharCode(0x125CB);
  }
  else {
    this.symbol = String.fromCharCode(0x125CF);
  }
};

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
  this.checkers = [];
  this.createCheckers = function () {
    var whitePositions = [ 
    [0, 1], [0, 3], [0, 5], [0, 7],
    [1, 0], [1, 2], [1, 4], [1, 6],
    [2, 1], [2, 3], [2, 5], [2, 7] 
    ] ;

    var blackPositions = [
    [5, 0], [5, 2], [5, 4], [5, 6],
    [6, 1], [6, 3], [6, 5], [6, 7],
    [7, 0], [7, 2], [7, 4], [7, 6]
    ] ;


    //for loop shit
    // **IN CLASS**
    /*for(var i = 0; i < whiteCheckers.length ; i ++){
      var spot = whiteCheckers[i];
    }*/


    for (var spot of whitePositions){
      //what is spot
      //spot is going to be an array
      //spot may look like [0,1];
      //spot can be named whatever you want
      
      var row = spot[0];
      var column = spot[1];
      //row may have a 0 in it
      //column may have a 1 in it
      var whitechecker = new Checker('white');
      //var aThing = this.gred[row][column];
      //what is the opposite of the above code
      this.grid[row][column] = whitechecker;
      this.checkers.push(whitechecker);
    }

    for (var spot of blackPositions){
      var row = spot[0];
      var column = spot[1];
      var blackchecker = new Checker('black');
      this.grid[row][column] = blackchecker;
      this.checkers.push(blackchecker);
    }


    //console.log(this.whitePositions[1]);
    //console.log(this.whitePositions.idexOf[1]);
    
    //my code here
    //**EDIT AT HOME */
    
    /*var testPiece = new Checker('white');
    var testPiece2 = new Checker('black');
    console.log('test piece');
    console.log(testPiece);
    console.log(' ')
    console.log('test piece black');
    console.log(testPiece2);
  
    for (var i = 0; i < 12; i++) {
      //var pieceW = new Checker('white');
      //var pieceW2 = this.whitePositions[i];
      //console.log(pieceW2);
      if (i < 12) {
        //whats the difference between using pieceW, pieceW2 and using pieceB method
        var pieceW = new Checker('white');
        var pieceWhite = pieceW[whitePositions[i]];
        this.checkers.push(pieceWhite);
        console.log('create white piece check');
        console.log(pieceW);
      }
    }
    console.log('white checkers');
    console.log(this.checkers);
    for (var c = 0; c < 12; c++) {
      // whats the difference between putting pieceB and inside and outside
      if (c < 12) {
        var pieceB = new Checker('black');
        var pieceBlack = pieceB[blackPositions[c]];
        this.checkers.push(pieceBlack);
      }
    }
    console.log('all checkers');
    console.log(this.checkers);
  */
  }

  this.selectChecker = function (row, column) {
    return this.grid[row][column];
  }

  this.killChecker = function(position) {
    var checkerPosition = this.selectChecker(position[0], position[1]);
    var find = this.checkers.indexOf(checkerPosition);
    this.checkers.splice(find, 1);
    this.grid[position[0]][position[1]] = null;
  }


};
function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    // Your code here
    this.board.createCheckers();
  };
  
  this.moveChecker = function(start, end) {
     var startRow = Number(start[0]);
     var startColumn = Number(start[1]);
     var endRow = Number(end[0]);
     var endColumn = Number(end[1]);
     var checker = this.board.selectChecker(startRow, startColumn);
     this.board.grid[startRow][startColumn] = null;
     this.board.grid[endRow][endColumn] = checker;
     
     var distance = Math.abs(startRow - endRow);
     var midRow = (startRow + endRow) / 2;
     var midCol = (startColumn + endColumn) / 2;
     var killPosition = [midRow, midCol];
 
     if(distance === 2) {
       this.board.killChecker(killPosition);
     }
     
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
