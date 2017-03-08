'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* 
Checkers forced us to use all of our programming concepts
Checkers made us struggle in trying to understand confusing specs
Checkers gave us experience in OOP
*/

//A Checker piece has one concern, its symbol. We can use unicode characters with the JavaScript String.fromCharCode(0x1<unicode>) method. The symbol that is assigned is based on what color ('white' or 'black') the checker will be. Let's pass in the color as an argument, function Checker(color) { ... and set the Checker instance's this.symbol. if the color is 'white, set this.symbol equal to String.fromCharCode(0x125CB), otherwise set it equal to String.fromCharCode(0x125CF)

//Spec1
//it just takes getting used to the concepts to recognize the patterns
//why are we using this.symbol, why not just var symbol = String.fromCharCode(0x125CB)
function Checker(color) {
  //focus on the spec   
  //set this.symbol equal to ... whatever
  //how would you set this.symbol to anything? 
  //this is the white symbol
  if(color === 'white'){  
    this.symbol = String.fromCharCode(0x125CB);
  }
  //this is the black symbol
  else{
    this.symbol = String.fromCharCode(0x125CF);
  }

}

function Board() {
  //In your Board class, create an attribute called this.checkers and assign it to an empty array
  //what is the point of this?
  this.checker = [];



  //in your Board class, write a method this.selectChecker that takes two arguments row, column. All this does is return the checker at that particular spot on this.grid. This will be a handy "helper" function

//what does "in the Board Class" mean?
//what is a helper function

  this.selectChecker = function(row, column){
    return this.grid[row][column];
  }


  //can you think of another name for this method that might be better
  this.createCheckers = function(){

    //why is it kind of okay that these "spots" or "coordinates" are hard coded into this array
    var whiteCheckers =  [
    [0, 3], [0, 5], [0, 7],
    [1, 0], [1, 2], [1, 4], [1, 6],
    [2, 1], [2, 3], [2, 5], [2, 7]
    ]
  /// i don't want to do this below
    //this.grid[0][0] = new Checker('white')
    //this.grid[0][1] = new Checker('white');
    //this.grid[0][3] = new Checker('white');
    //for(var i = 0; i < whiteCheckers.length ; i ++){
      //var spot = whiteCheckers[i];
    //}
    //a normal for loop makes me type too much so us for/of
    //maybe spot could be called coordinate? whatever makes sense to you
    for(var spot of whiteCheckers){
      //what is spot
      //spot is going to be an array
      //spot may look like [0,1];
      //i know what spot is because its named okay
      //but as soon as i do spot[0] i might forget why im doing this
      //if i put it in another variable with a good name, i no longer have to remember what it is
      // and this saves brain power. 
      var row = spot[0]; //why is this hard coded to get the 0 index
      var column = spot[1]; //why is this hard coded to get the 1 index
      //row may have a 0 in it
      //column may have a 1 in it
      //we made the Checker class for a reason, in this case we are literally mimicking what you do in real life
      //you get a checker and put it on the board
      var whitechecker = new Checker('white');
      //var aThing = this.grid[row][column];
      //what is the opposite of the above code

      //maybe this is confusing because you have your board, but then a board has a grid
      //why wouldn't the board just be the thing that holds the checkers
      this.grid[row][column] = whitechecker;
      //why are we storing checkers in 2 places?
      this.checkers.push(whitechecker);
    }
  }
  //in your Board class, write a method killChecker that take a single argument position which is a coordinate pair, eg. [0, 5]. In it, use this.selectChecker to grab the checker at the position given. Find the index of that checker in the this.checkers array. then remove it by .splice()ing it out. Then assign the position on this.grid to null. That checker is dead.
  
  //why is this thing taking a parameter of one thing that is a "coordinate pair" [0,5]- an array of 2 number
  this.killChecker = function(row,column){

    var checkerToKill = this.selectChecker(row,column);
    var indexOfChecker = this.checker.indexOf(checkerToKill);
    //what the heck is the point of this
    this.checkers.splice(indexOfChecker,1);

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
class Game {
  constructor(){npm
    this.board = new Board();

    this.start = function() {
      //whats wrong with the code below
      this.board.createCheckers();
      this.board.createGrid();
    };

    //Next, in your Game class, create a this.moveChecker method that takes two parameters start, end. These two arguments will each contain a row and a column, eg. 50, 41. Inside the method, use your board helper method selectChecker to select the checker at your starting rowcolumncoordinates and set it to a local variable checker. Then set that spot on the grid to null and set the spot at the end rowcolumn coordinate to the checker.

    //are the names of these parameters good ??
    //why the heck is the movechecker method in the Game class and not the board class
    this.moveChecker= function(start, end){
      var startRow= start[0]; //where have we seen this pattern before
      //again, what is the point of creating a new variable startColumn
      var startColumn = start[1];

      var endRow = end[0];
      var endColumn = end[1];

      //what is wrong with this line of code
      this.board.grid[startRow][startColumn] = null;
      //and this line of code
      //this.board.grid[endRow][endColumn] = null;



      //use helper method selectChecker, what does "use" mean

      //again, what is wrong with this line of code
      var checker = this.selectChecker(startRow,startColumn);
      this.board.grid[endRow][endColumn] = checker;


      //In the Game class, in the moveChecker method, after you have moved the checker, check to see if the distance of the start row and the end row is 2 by finding the absolute value of the difference between the rows. If so, which means you must have jumped a checker, find the killPostition by finding the midpoint between the start and end positions. Then killChecker

      //what is wrong with this line of code
      var distance = Math.abs(startRow - endRow);

      if(distance == 2){
        //the mid point calculation is about the most complicated math you will ever run into in a normal job
        var midRow = startRow + endRow / 2; //whats wrong with this line of code
        var midColum = startColumn + endColumn /2;
        //could this have been done any better
        this.killChecker(midRow,midColum);
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

//we are trying to represent real life
//in real life you create a new Game and start it
//does this seperation make sense. you could open a checker board but not set it up
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
