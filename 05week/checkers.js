'use strict';

// Checker
//   Create the 24 Pieces
//     12 'R'
//     12 'B'
//
//
//
// Board
//
//   Array 8 * 8
//     Filled with nulls
//     Nulls are pushed into arrays
//
//   Need
//     Populate the Board with Checkers
//       Rows 0 - 3 push
//       Rows 5 - 7
//       Alternating R's and B's
//         Use Modulo
//
//
//
// Game
//   What is legal move
//
//     is there a piece to be moved at the start location?
//     one up, one to right or left?
//
//     is there anything in front of the moving piece?
//
//     .slice to remove from any spot on the board array
//
//     .splice to add to any spot on the board array [mutates array]
//     or reassign value
//
//   What is a legal kill move
//
//
//
// Win
//   No more one team on the board
//   .some()
//   .find()
//

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  // Your code here
  if (color === 'white') {
    this.symbol = 'X';
  } else {
    this.symbol = 'O';
  }

}

function Board() {
  this.grid = [];
  this.checkers = [];
  // creates an 8x8 array, filled with null values
  this.createGrid = function() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  };

  // prints out the board
  this.viewGrid = function() {
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
  };


  this.createCheckers = function() {
    // [row, col]
    const whitePos = [
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7],
    ]
    for (let i = 0; i < 12; i++) {
      let whiteRow = whitePos[i][0];
      let whiteCol = whitePos[i][1];
      let whiteChecker = new Checker('white');
      this.checkers.push(whiteChecker);
      this.grid[whiteRow][whiteCol] = whiteChecker;
    }

    const blackPos = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6],
    ]
    for (let i = 0; i < 12; i++) {
      let blackRow = blackPos[i][0];
      let blackCol = blackPos[i][1];
      let blackChecker = new Checker('black');
      this.checkers.push(blackChecker);
      this.grid[blackRow][blackCol] = blackChecker;
    }
  }

  // Your code here - Another function that does...
}

function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    this.board.createCheckers();
    this.board.viewGrid();  // test - remove when done
    // moveChecker()
    // take the given 2 numbers from the user input
    // set the source to the destination
    this.board.grid
    // null the source value
  };
}

function getPrompt() {
  game.board.viewGrid();
  // Ask user for source piece
  rl.question('which piece?: ', (whichPiece) => {
    // Feed desination piece to another prompt for destination piece
    rl.question('to where?: ', (toWhere) => {
      // Move the checker
      game.moveChecker(whichPiece, toWhere);
      // Render the board again, with moved piece
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





// Craig
/**********************WHITE BOARD NOTES *************************
// Givens:
// new Game (defines board) -> game.Start (creates grid) -> getPrompt (viewGrid, prompts user)
//
// classes:
//   Checker, Board, Game
//
//
// createGrid
//   add r, b checker pieces
//
// Checker(color)
//   this.color = color
//   this.symbol = 'r' or 'b'  (use ternary operator)
//   consider king state
//   consider active state
//
// moveChecker
// if valid entry then
//   if validCheckerMove is true then
//     moveChecker()
//   else
//     "Invalid move, try again"
// else
//   "Invalid entries.  Pick a valid row, column"
// end if

// validCheckerMove
// a) the piece you're moving is yours
// b) destination space must be empty
// c) can only move forward.
// c) ensure
// b) can only move diagonally 1 space if not jumping

// b) If jumping, move diagonally 2 spaces horizontally, vertically.
//   1. Now kill the checker you jumped over.
//
// testForWin()
  if no pieces left for opposing player, then WIN!
  if opposing player cannot move, then WIN!

*****************************************************************/

// 'use strict';
//
// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
//
// function Checker(color) {
//   // Your code here
//   // define colors?  (r)ed, (b)lack.  Use r, b as checkers and turn.
//   // use Active player
//   this.color = color;
//   this.color === 'red'? this.symbol = String.fromCharCode( 0x25cf ): (color === 'black'? this.symbol = String.fromCharCode( 0x25cb ) : this.symbol = 'u');
//   let king = false;
//   let active = false;
//
//   this.isKing = () => {
//     return king;
//   }
//   this.isActive = () => {
//     return active;
//   }
//
//   this.toggleKing = () => {
//     king = !king;  // consider changing symbol to upper/lowercase
//     return king;
//   }
//   this.toggleActive = () => {
//     // active? (active = false, active) : (active = true, active);
//     active = !active;
//     return active;
//   }
// }  // ending brace for Checker class
//
// function Board() {
//   this.grid = [];
//   // creates an 8x8 array, filled with null values
//   this.createGrid = function() {
//     // loop to create the 8 rows
//     for (let row = 0; row < 8; row++) {
//       this.grid[row] = [];
//       // push in 8 columns of nulls
//       for (let column = 0; column < 8; column++) {
//         switch (row) {
//           // rows 0-2, red checkers
//           case 0:
//           case 2:
//             column%2 === 1? this.grid[row].push(new Checker('red')) : this.grid[row].push(null);
//             break;
//           case 1:
//             column%2 === 0? this.grid[row].push(new Checker('red')) : this.grid[row].push(null);
//             break;
//           // rows 5-7, black checkers
//           case 5:
//           case 7:
//             column%2 === 0? this.grid[row].push(new Checker('black')) : this.grid[row].push(null);
//             break;
//           case 6:
//             column%2 === 1? this.grid[row].push(new Checker('black')) : this.grid[row].push(null);
//             break;
//           // rows 3-4, empty
//           default:
//             this.grid[row].push(null);
//         }
//         // this.grid[row].push(null);
//       }
//     }
//   };
//
//   // prints out the board
//   this.viewGrid = function() {
//     // add our column numbers
//     let string = "  0 1 2 3 4 5 6 7\n";
//     for (let row = 0; row < 8; row++) {
//       // we start with our row number in our array
//       const rowOfCheckers = [row];
//       // a loop within a loop
//       for (let column = 0; column < 8; column++) {
//         // if the location is "truthy" (contains a checker piece, in this case)
//         if (this.grid[row][column]) {
//           // push the symbol of the check in that location into the array
//           rowOfCheckers.push(this.grid[row][column].symbol);
//         } else {
//           // just push in a blank space
//           // rowOfCheckers.push(' ');
//           rowOfCheckers.push(String.fromCharCode( 0x25a0 ));
//
//         }
//       }
//       // join the rowOfCheckers array to a string, separated by a space
//       string += rowOfCheckers.join(' ');
//       // add a 'new line'
//       string += "\n";
//     }
//     console.log(string);
//   };
//
//   // Your code here
// }
// function Game() {
//
//   this.board = new Board();
//
//   this.playerTurn;  // Used to alternate the players turn. black, red, black, red
//   this.messageToPlayer = '';  // variable used to store error message to player
//
//   this.validEntry = function(source, dest) {
//     // console.log('in validEntry()');  /** DEBUG **/
//     // is entry less than 2
//     if (source.length !==2 || dest.length !== 2) {
//       this.messageToPlayer = 'you entered an invalid square.  Too many indices.';
//       return false;
//       // is source entry between 0 - 7
//     } else if ( parseInt(source.charAt(0)) < 0 || 7 < parseInt(source.charAt(0)) || parseInt(source.charAt(1)) < 0 || 7 < parseInt(source.charAt(1)) ) {
//       this.messageToPlayer = 'you entered an invalid row-column index for source.  0-7 only.';
//       return false;
//         // is destination entry between 0 - 7
//     } else if ( parseInt(dest.charAt(0)) < 0 || 7 < parseInt(dest.charAt(0)) || parseInt(dest.charAt(1)) < 0 || 7 < parseInt(dest.charAt(1)) ) {
//       this.messageToPlayer = 'you entered an invalid row-column index for dest.  0-7 only.';
//       return false;
//     }
//     return true;
//   }
//
//   this.validCheckerMove = function(source, dest) {
//     return true;
//   }
//
//   this.moveChecker = function(source, dest) {
//     // console.log('in moveChecker()');  /** DEBUG **/
//     if (this.validEntry(source, dest)) {
//       // console.log('in IF validEntry()');  /** DEBUG **/
//       if (this.validCheckerMove(source, dest)) {
//         this.board.grid[dest.charAt(0)][dest.charAt(1)] = this.board.grid[source.charAt(0)][source.charAt(1)];
//         this.board.grid[source.charAt(0)][source.charAt(1)] = null;
//       } else {  // invalid move.  Try again.
//         return false;
//       }
//     } else {  // invalid entry.  Try again.
//       // console.log('in ELSE validEntry()');  /** DEBUG **/
//       return false;  // returning false takes program to a "message handler"
//     }
//     return true;
//   };
//
//   this.start = function() {
//     this.board.createGrid();  // add the pieces to the grid
//     this.playerTurn = 'black';  // Black goes first.  Will use this to toggle player turns.
//   };
//
//   this.win = function() {
//     return false;
//   }
// }
//
// function getPrompt() {
//   game.board.viewGrid();
//   rl.question(`${game.playerTurn}, which piece?: `, (whichPiece) => {
//     rl.question('to where?: ', (toWhere) => {
//       if (game.moveChecker(whichPiece, toWhere)) {  // if the move was successful, keep going.  If not, fall to message handler.
//         if (!game.win()) {  // no one has won yet... keep playing.
//           game.playerTurn === 'red'? game.playerTurn = 'black' : game.playerTurn = 'red';
//           getPrompt();
//         } else {  // somebody won!
//           console.log(`${game.playerTurn}... Congratulations!`);
//         }
//       } else {  // My simple message handler.
//         console.log(`${game.playerTurn}... ${game.messageToPlayer}`);
//         getPrompt();
//       } // if statement for game.moveChecker
//
//     });
//   });
// }
//
// const game = new Game();
// game.start();
//
//
// // Tests
//
// if (typeof describe === 'function') {
//   describe('Game', () => {
//     it('should have a board', () => {
//       assert.equal(game.board.constructor.name, 'Board');
//     });
//     it('board should have 24 checkers', () => {
//       assert.equal(game.board.checkers.length, 24);
//     });
//   });
//
//   describe('Game.moveChecker()', function () {
//     it('should move a checker', function () {
//       assert(!game.board.grid[4][1]);
//       game.moveChecker('50', '41');
//       assert(game.board.grid[4][1]);
//       game.moveChecker('21', '30');
//       assert(game.board.grid[3][0]);
//       game.moveChecker('52', '43');
//       assert(game.board.grid[4][3]);
//     });
//     it('should be able to jump over and kill another checker', () => {
//       game.moveChecker('30', '52');
//       assert(game.board.grid[5][2]);
//       assert(!game.board.grid[4][1]);
//       assert.equal(game.board.checkers.length, 23);
//     });
//   });
// } else {
//   getPrompt();
// }
