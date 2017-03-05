'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

//create a class Checker
function Checker(color) {
if (color === "white") {
this.symbol = String.fromCharCode(0x125CB);
} else {
this.symbol = String.fromCharCode(0x125CF);
        }
    }
//create the Board class
function Board() {
this.grid = [];
    // creates an 8x8 array, filled with null values
this.createGrid = function () {
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
this.viewGrid = function () {
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

    //create the array thats going to hold the coordinates of checkers
this.checkers = [];
this.createCheckers = function () {
            //create two arrays for initial positions of black and white checkers
var whitePositions = [];
var blackPositions = [];
            //fill the two initial positions arrays with the coordinates of the checkers 
var j = 0;
while (j < 3) {
for (var i = 1; i <= 7; i = i + 2) {
whitePositions[j] = [0, i];
whitePositions[j + 8] = [2, i];
blackPositions[j + 4] = [6, i];
j++;
}
j = 0;
for (var i = 0; i < 7; i = i + 2) {
whitePositions[j + 4] = [1, i];
blackPositions[j] = [5, i];
blackPositions[j + 8] = [7, i];
j++;
                }
            }
            //create checkers and put the instances into the grid and into an array checkers
for (i = 0; i < 12; i++) {
this.checker = new Checker("white");
var x = whitePositions[i][0];
var y = whitePositions[i][1];
this.grid[x][y] = new Checker("white");
this.checkers.push(this.grid[x][y]);
            }
for (i = 0; i < 12; i++) {
this.checker = new Checker("black");
var x = blackPositions[i][0];
var y = blackPositions[i][1];
this.grid[x][y] = new Checker("black");
this.checkers.push(this.grid[x][y]);
}
}
        //helper function to return the instance in the grid at the correct row, column
this.selectChecker = function (row, column) {
            return this.grid[row][column];
        }
        //this checks for a winner
this.checkForWinner = function () {
        //using some, see if a value exists in the array
if (!this.checkers.some(function (val) {
return val.symbol === String.fromCharCode(0x125CB);
            })) {
            //if it does show the winner
console.log("black wins!");
        }
        //do the same as above, but for white
if (!this.checkers.some(function (val) {
return val.symbol === String.fromCharCode(0x125CF);
            })) {
console.log("white wins!");
        }
        //quit the game when there is a winner
process.exit();
    }

    //kill a checker method
this.killChecker = function (position) {
        //select the instance you want to kill
var checkerToKill = this.selectChecker(position[0], position[1]);
        //find where this instance is in the array of checkers and splice it from the array
var indexToKill = this.checkers.indexOf(checkerToKill);
if (indexToKill > -1) {
this.checkers.splice(indexToKill, 1);
        }
        //set the grid position to null
this.grid[position[0]][position[1]] = null;
    }

}


function Game() {
    //create a new board instance
    this.board = new Board();
    //create the grid and the initial set of checkers
    this.start = function () {
        this.board.createGrid();
        this.board.createCheckers();
    };
    //move a checker
    this.moveChecker = function (start, end) {
        //cheat code included "white wins" or "black wins"
        if (end === "wins") {
            var winningChecker;
            //clear the array of checkers
            this.board.checkers = [];
            //create a new instance of checker depending on the code
            if (start === "white") {
                winningChecker = new Checker("white");
            } else {
                winningChecker = new Checker("black");
            }
            //put that new instance in the array
            this.board.checkers.push(winningChecker);
            //run the method to check for a winner
            this.board.checkForWinner();
        }


        //grab the checker you want to move from its grid assignment
        var checker = this.board.selectChecker(start.charAt(0), start.charAt(1));
        //set the grid where the checker starts to null
        this.board.grid[start.charAt(0)][start.charAt(1)] = "null";
        //and move the checker to its new spot
        this.board.grid[end.charAt(0)][end.charAt(1)] = checker;
        //if the end spot is 2 rows away from the first spot, that means an opposing checker was jumped
        if (Math.abs(start.charAt(0) - end.charAt(0)) === 2) {
            var killPosition = [];
            //find the position in between the start and end spot to kill
            killPosition[0] = (parseInt(start.charAt(0)) + parseInt(end.charAt(0))) / 2;
            killPosition[1] = (parseInt(start.charAt(1)) + parseInt(end.charAt(1))) / 2;
            //kill it
            this.board.killChecker(killPosition);
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
