'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* WHITEBOARD

Checkers - 8x8

METHODS:
  [] movePiece(begCoord, endCoor)
    - can move forward and backwards from start of game
    - pieces have to move diagonally
    - takes begining and end coordinates as pararms
  [] checkForWin()
    - check to see if all pieces are gone for a team
    - keep a counter of all pieces that have been jumped
  [] isMoveLegal(whichPiece, endPos)
    - is the end position not occupied
  [x] isValidInput(whichPiece, endPos)
    - check to make sure the move coordinates entered are inside the board
    - checks to make sure that endPos is one of the 32 possible squares that can be occupied
  [] killPiece()
    - if an opponent piece is jumped, remove it from the board
  [] resetGame()
    - reset gloabl vars: board, playerTurn
  [x] initializeBoard()
    - initially setup the board
  [] switchPlayer()
    - will toggle current active player
    - refer to tic tac toe app to see how this was implemented

 */

function Checker(board, whichPiece, endPos) {
  board.movePiece(whichPiece, endPos);
  board.checkForWin();
}

class Board {
  constructor() {
    this.grid = [];
    this.redPiece = 'R';
    this.blackPiece = 'B';
    this.checkers = [];
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }

  viewGrid() {
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
          // rowOfCheckers.push(this.grid[row][column].symbol);
          rowOfCheckers.push(this.grid[row][column]);
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


  // this sets the initial pieces of the board
  // it runs on the beggining of the game
  initializeGrid() {
    // set initial pieces for first part of grid
    // loop over first 3 rows
    for (let row1=0; row1<3; row1++) {
      // loop over cols of first 3 rows
      for (let col1=0; col1<8; col1++) {
        // populate first 3 rows of board
        if (col1 % 2 === 1 && row1 % 2 === 0) {
          this.grid[row1][col1] = this.redPiece;
          this.checkers.push(this.redPiece);
        } else if (col1 % 2 === 0 && row1 % 2 === 1) {
          this.grid[row1][col1] = this.redPiece;
          this.checkers.push(this.redPiece);
        }
      }
    }

    // set initial pieces for latter half of the grid
    // loop over rows 5-7
    for (let row2=5; row2<8; row2++) {
      // loop over cols of rows 5-7
      for (let col2=0; col2<8; col2++) {
        // populate rows 5-7 of board
        if(col2 % 2 === 0 && row2 % 2 === 1) {
          this.grid[row2][col2] = this.blackPiece;
          this.checkers.push(this.blackPiece);
        } else if (col2 % 2 === 1 && row2 % 2 === 0) {
          this.grid[row2][col2] = this.blackPiece;
          this.checkers.push(this.blackPiece);
        }
      }
    }
  }

  // check to make sure the move coordinates entered are inside the board perimeter
  // checks to make sure that endPos is one of the 32 possible squares that can be occupied
  // returns true/false
  isValidInput(whichPiece, endPos) {
    const validRows = ['0', '1', '2', '3', '4', '5', '6', '7'];
    const validColsEven = ['0', '2', '4', '6'];
    const validColsOdd = ['1', '3', '5', '7'];

    const pieceArr = whichPiece.split('');
    const endArr = endPos.split('');

    let isWhichPieceValid = false;
    let isEndPosValid = false;

    // make sure both inputs are 2 chars long
    if (pieceArr.length === 2 && endArr.length === 2) {
      const pieceRow = pieceArr[0];
      const pieceCol = pieceArr[1];

      const endRow = endArr[0];
      const endCol = endArr[1];

      // check to make sure both pieceRow and endRow are valid rows
      if ((validRows.indexOf(pieceRow) !== -1) && (validRows.indexOf(endRow) !== -1)) {
        // check to make sure pieceCol is a valid col
        // if row is even, then col is odd || if row is odd, then col is even
        if (((pieceRow % 2 === 0) && (validColsOdd.indexOf(pieceCol) !== -1)) || ((pieceRow % 2 === 1) && (validColsEven.indexOf(pieceCol) !== -1))) {
          // whichPiece has valid row and col
          isWhichPieceValid = true;
        }
        // check to make sure endCol is a valid col
        // if row is even, then col is odd || if row is odd, then col is even
        if (((endRow % 2 === 0) && (validColsOdd.indexOf(endCol) !== -1)) || ((endRow % 2 === 1) && (validColsEven.indexOf(endCol) !== -1))) {
          // endPos has valid row and col
          isEndPosValid = true;
        }
      }

    }

    return isWhichPieceValid && isEndPosValid;
  }


  // makes sure the move entered by user is a legal move
  /*
    LEGAL MOVE REQ'S:
   - endPos must be empty (unoccupied)
   - piece can move diagonally in any direction
   - piece can move diagonally 1 space if endPos is empty
   - piece can move diagonally 2 spaces if endPos is empty and space inbetween is an opponent piece

    ALGORITHM TO CHECK FOR LEGALLY MOVING PIECES DIAGONALLY
   1. check to make sure endPos is empty

   2. determine whether user is moving only 1 space diag or 2 spaces diag for a jump
     - this will be wrapped in it's own method since it will be reused elsewhere in code
     - this can be determined based on subtracting endPos - whichPiece coordinates (end - start)

      SINGLE SPACE MOVES
      * end - start = -11 = up_left_diag_1-space
      * end - start = -9  = up_right_diag_1-space
      * end - start = +11 = down_right_diag_1-space
      * end - start = +9  = down_left_diag_1-space
      DOUBLE SPACE MOVE (FOR JUMP)
      * end - start = -22 = up_left_diag_2-spaces
      * end - start = -18 = up_right_diag_2-spaces
      * end - start = +22 = down_right_diag_2-spaces
      * end - start = +18 = down_left_diag_2-spaces

    3. if double space move (for jump), then check to make sure middle space is opponent piece

    4. return true/false based on evaluation

   */
  isMoveLegal(whichPiece, endPos) {
    const startArr = whichPiece.split('');
    const endArr = endPos.split('');

    const startRow = Number(startArr[0]);
    const startCol = Number(startArr[1]);
    const endRow = Number(endArr[0]);
    const endCol = Number(endArr[1]);

    let isLegalMove = false;

    // check to make sure endPos is empty
    if ( !this.grid[endRow][endCol] ) {
      // check if move is a single space move
      if ( this.isSingleSpaceMove(whichPiece, endPos) ) {
        isLegalMove = true;
      }
      // check if move is a double space move
      else if ( this.isDoubleSpaceMove(whichPiece, endPos) ) {
        // see if whichPiece is red or black, boolean value
        const isRedPiece = (this.grid[startRow][startCol] === this.redPiece);

        // calculate jumped piece coords
        const jumpedPiece = this.calculateJumpedPiecePos(whichPiece, endPos);
        const jumpedArr = jumpedPiece.split('');
        const jumpedRow = jumpedArr[0];
        const jumpedCol = jumpedArr[1];

        // calculate color of piece being jumped
        // if jumped piece is black, and piece being moved is red, then legal move
        if ((this.grid[jumpedRow][jumpedCol] === this.blackPiece) && (isRedPiece)) {
          isLegalMove = true;
        }
        // if jumped piece is red, and piece being moved is black, then legal move
        else if ((this.grid[jumpedRow][jumpedCol] === this.redPiece) && (!isRedPiece)) {
          isLegalMove = true;
        }
      }
    }

    return isLegalMove;
  }

  // calculates the jumped piece position based on start and end coords
  // returns a 2 char string of coords
  calculateJumpedPiecePos(whichPiece, endPos) {
    // get direction of the jumped piece
    const moveDir = this.getMoveDirection(whichPiece, endPos);

    let jumpedPiece = null;
    const startPiece = Number(whichPiece);

    // calculate coords of piece being jumped
    if (moveDir === 'up-left') {
      jumpedPiece = startPiece - 11;
    } else if (moveDir === 'up-right') {
      jumpedPiece = startPiece - 9;
    } else if (moveDir === 'down-left') {
      jumpedPiece = startPiece + 9;
    } else if (moveDir === 'down-right') {
      jumpedPiece = startPiece + 11;
    }

    // return jumped piece coords as a 2 char string
    return jumpedPiece.toString();
  }

  // get move direction
  // returns string: 'up-left', 'up-right', 'down-left', 'down-right'
  getMoveDirection(whichPiece, endPos) {
    const start = Number(whichPiece);
    const end = Number(endPos);

    if ((end - start === -22) || (end - start === -11)) return 'up-left';
    else if ((end - start === -18) || (end - start === -9)) return 'up-right';
    else if ((end - start === 18) || (end - start === 9)) return 'down-left';
    else if ((end - start === 22) || (end - start === 11)) return 'down-right';
  }

  // determines if a move is a single space move
  // returns true/false
  isSingleSpaceMove(whichPiece, endPos) {
    const start = Number(whichPiece);
    const end = Number(endPos);

    return ((end - start === -11) || (end - start === 11) || (end - start === -9) || (end - start === 9));
  }

  // determines if a move is a double space move
  // returns true/false
  isDoubleSpaceMove(whichPiece, endPos) {
    const start = Number(whichPiece);
    const end = Number(endPos);

    return ((end - start === -22) || (end - start === 22) || (end - start === -18) || (end - start === 18));
  }

  // can move forward and backwards from start of game
  // pieces have to move diagonally
  // takes begining and end coordinates as pararms
  movePiece(whichPiece, endPos) {
    // check to see if legal move
    if ( this.isMoveLegal(whichPiece, endPos) ) {
      const startArr = whichPiece.split('');
      const endArr = endPos.split('');

      const startRow = Number(startArr[0]);
      const startCol = Number(startArr[1]);
      const endRow = Number(endArr[0]);
      const endCol = Number(endArr[1]);

      const movingPieceColor = this.grid[startRow][startCol];

      // check to see if a piece was jumped
      if (this.isDoubleSpaceMove(whichPiece, endPos) ) {
        // get jumped piece coords
        const jumpedPiece = this.calculateJumpedPiecePos(whichPiece, endPos);
        const jumpedArr = jumpedPiece.split('');
        const jumpedRow = jumpedArr[0];
        const jumpedCol = jumpedArr[1];

        // get jumped piece color
        const jumpedColor = this.grid[jumpedRow][jumpedCol];

        // remove jumped piece from this.grid
        this.grid[jumpedRow][jumpedCol] = null;

        // remove jumped piece from this.checkers
        // get index of jumped color piece so we can remove it from array
        const jumpedIdx = this.checkers.indexOf(jumpedColor);
        if (jumpedIdx !== -1) {
          this.checkers.splice(jumpedIdx, 1);
        }
      }

      // move piece to end coords
      this.grid[endRow][endCol] = movingPieceColor;
      // set original piece pos = null
      this.grid[startRow][startCol] = null;
    }
  }

  // iterates over this.checkers and checks to see if a player won
  // returns true/false
  checkForWin() {
    let countRed = 0;
    let countBlack = 0;

    this.checkers.forEach(checker => {
      // if find a red piece, add it to count
      if (checker === this.redPiece) {
        countRed += 1;
      } else if (checker === this.blackPiece) {
        countBlack += 1;
      }
    });

    // if either red or black count = 0, then game over
    return ((countRed === 0) || (countBlack === 0));
  }

}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    // initialize game pieces
    this.board.initializeGrid();
  }

  moveChecker(whichPiece, endPos) {
    console.log("\nis valid input? ", this.board.isValidInput(whichPiece, endPos));
    console.log(`Moving piece from ${whichPiece} to ${endPos}`);
    console.log(`Is valid move? ${this.board.isMoveLegal(whichPiece, endPos)}`);
    // this.board.movePiece(whichPiece, endPos);
    Checker(this.board, whichPiece, endPos);
  }
}

function getPrompt() {
  console.log("-----------------------\n");
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
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

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
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
