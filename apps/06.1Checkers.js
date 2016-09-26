'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function Checker(color) {
    // Your code here
    this.symbol = color === "white" ?  String.fromCharCode(0x125CB) : String.fromCharCode(0x125CF);
}

function Board() {


//In the Game class, in the moveChecker method, after you have moved the checker, 
//check to see if the distance of the start row and the end row is 2 by finding the absolute value of the difference between the rows. 
//If so, which means you must have jumped a checker, find the killPostition by finding the midpoint between the start and end positions. Then killChecker.

    this.killChecker = function(position){
        var checker = this.selectChecker(position[0],position[1]);
        this.grid[position[0]][position[1]] = null;
        var index = this.checkers.indexOf(checker);
        this.checkers.splice(index,1);
    }

    this.selectChecker = function(row,column){
        return this.grid[row][column];
    }

    this.createCheckers = function(){
        var whitePositions = [
        [0, 1], [0, 3], [0, 5], [0, 7],
        [1, 0], [1, 2], [1, 4], [1, 6],
        [2, 1], [2, 3], [2, 5], [2, 7]];

        var blackPositions = [
        [5, 0], [5, 2], [5, 4], [5, 6],
        [6, 1], [6, 3], [6, 5], [6, 7],
        [7, 0], [7, 2], [7, 4], [7, 6]];

        for(var i = 0; i < whitePositions.length; i++){
            var white =  new Checker('white');
            var black = new Checker('black');
            this.grid[whitePositions[i][0]][whitePositions[i][1]] = white;
            this.grid[blackPositions[i][0]][blackPositions[i][1]] = black;
            this.checkers.push(white);
            this.checkers.push(black);
        }
    }

    this.grid = [];
    this.checkers = [];
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
    }

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

    // Your code here
}
function Game() {

    this.board = new Board();
    this.moveChecker = function(start,end){
        var startrow = parseInt(start.split('')[0]);
        var startcolumn = parseInt(start.split('')[1]);
        var endrow = parseInt(end.split('')[0]);
        var endcolumn = parseInt(end.split('')[1]);
        var diff = Math.abs(startrow - endrow);
        if(diff ===2 ){
            //52 to 35 = kill 44, how is this calculated
            //30 to 52 = kill 41
            this.board.killChecker();
        }
        var checker = this.board.selectChecker(startrow,startcolumn);
        this.board.grid[startrow][startcolumn] = null;
        this.board.grid[endrow][endcolumn] = checker;
    }
    this.start = function() {
        this.board.createGrid();
        this.board.createCheckers();
        // Your code here
    }
}

function getPrompt() {
    game.board.viewGrid();
    prompt.get(['which piece?', 'to where?'], function (error, result) {
        game.moveChecker(result['which piece?'], result['to where?']);
        getPrompt();
    });
}

var game = new Game();
game.start();


// Tests

if (typeof describe !== 'undefined') {
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
            assert(!game.board.grid[4][1])
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
