'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


/* WHITEBOARD

Checkers

class Board
  PROPERTIES:
    this.grid = []
      - holds the current state of the board and it's pieces

    this.checkers = []
      - array of pieces remaining on the board (unordered)

    this.redPiece = 'R'
      - value used for red checker piece

    this.blackPiece = 'B'
      - value used for black checker piece

    this.playerTurn = this.blackPiece
      - initialized with first players turn as black piece

  METHODS:
  [x] createGrid()
    - method that creates an 8x8 array, filled with null values

  [x] viewGrid()
    - console.logs the grid

  [x] initializeGrid()
    - this sets the initial pieces of the board
    - it runs on the beggining of the game

  [x] isValidInput(whichPiece, endPos)
    - check to make sure the move coordinates entered are inside the board perimeter
    - checks to make sure that endPos is one of the 32 possible squares that can be occupied
    - returns true/false

  [x] isMoveLegal(whichPiece, endPos)
    - makes sure the move entered by user is a legal move
    - see method definition for detailed algorithm used

  [x] calculateJumpedPiecePos(whichPiece, endPos)
    - calculates the jumped piece position based on start and end coords
    - returns a 2 char string of coords

  [x] getMoveDirection(whichPiece, endPos)
    - get move direction
    - returns string: 'up-left', 'up-right', 'down-left', 'down-right'

  [x] isValidSingleSpaceMove(whichPiece, endPos)
    - determines if a move is a single space move
    - returns true/false

  [x] isDoubleSpaceMove(whichPiece, endPos)
    - determines if a move is a double space move
    - returns true/false

  [x] movePiece(whichPiece, endPos)
    - can move forward and backwards from start of game
    - pieces have to move diagonally

  [x] switchPlayer()
    - this function toggles this.playerTurn

  [x] isStartPieceValid(whichPiece)
    - checks to make sure that piece being moved is valid based on this.playerTurn
    - returns true/false

  [x] checkForWin()
    - iterates over this.checkers and checks to see if a player won
    - returns true/false
 */

function Checker(board, whichPiece, endPos) {
  // console.log("\nis valid input? ", board.isValidInput(whichPiece, endPos));
  // console.log(`Moving piece from ${whichPiece} to ${endPos}`);
  // console.log(`Is valid move? ${board.isMoveLegal(whichPiece, endPos)}`);

  // check for valid input
  if ( board.isValidInput(whichPiece, endPos) ) {
    // move piece
    board.movePiece(whichPiece, endPos);
    if ( board.checkForWin() ) {
      console.log(`=======================`);
      console.log(`PLAYER:  ${board.checkers[0]}  WINS!!!`);
      console.log(`=======================`);
      // exit the game
      process.exit();
    }
  }
}

class Board {
  constructor() {
    this.grid = [];
    this.checkers = []; // array of pieces remaining on the board
    this.redPiece = 'R';
    this.blackPiece = 'B';
    this.playerTurn = this.blackPiece; // first players turn is black piece
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

  // console.logs the grid
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
        // if col is odd && row is even, then populate space
        if (col1 % 2 === 1 && row1 % 2 === 0) {
          this.grid[row1][col1] = this.redPiece;
          // push piece to active checkers array
          this.checkers.push(this.redPiece);
        }
        // if col is even && row is odd, then populate space
        else if (col1 % 2 === 0 && row1 % 2 === 1) {
          this.grid[row1][col1] = this.redPiece;
          // push piece to active checkers array
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
        // if col is even && row is odd, then populate space
        if(col2 % 2 === 0 && row2 % 2 === 1) {
          this.grid[row2][col2] = this.blackPiece;
          // push piece to active checkers array
          this.checkers.push(this.blackPiece);
        }
        // if col is odd && row is even, then populate space
        else if (col2 % 2 === 1 && row2 % 2 === 0) {
          this.grid[row2][col2] = this.blackPiece;
          // push piece to active checkers array
          this.checkers.push(this.blackPiece);
        }
      }
    }
  }

  // check to make sure the move coordinates entered are inside the board perimeter
  // checks to make sure that endPos is one of the 32 possible squares that can be occupied
  // returns true/false
  isValidInput(whichPiece, endPos) {
    // valid row and col values
    const validRows = ['0', '1', '2', '3', '4', '5', '6', '7'];
    const validColsEven = ['0', '2', '4', '6'];
    const validColsOdd = ['1', '3', '5', '7'];

    // split piece positions into arrays
    const pieceArr = whichPiece.split('');
    const endArr = endPos.split('');

    // return values
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
   - piece can move diagonally in any direction (from the start)
   - piece can move diagonally 1 space if endPos is empty
   - piece can move diagonally 2 spaces if endPos is empty AND space inbetween is an opponent piece

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
    // split pos coords into arrays
    const startArr = whichPiece.split('');
    const endArr = endPos.split('');

    // get row/col numbers from arrays
    const startRow = Number(startArr[0]);
    const startCol = Number(startArr[1]);
    const endRow = Number(endArr[0]);
    const endCol = Number(endArr[1]);

    // return value
    let isLegalMove = false;

    // check to make sure endPos is empty
    if ( !this.grid[endRow][endCol] ) {
      // check if move is a valid diag single space move
      if ( this.isValidSingleSpaceMove(whichPiece, endPos) ) {
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
    // will be a string of: 'up-left', 'up-right', 'down-left', 'down-right'
    const moveDir = this.getMoveDirection(whichPiece, endPos);

    // holds numerical 2 digit coord of jumped piece
    let jumpedPiece = null;
    // numerical 2 digit coords of piece being moved
    const startPiece = Number(whichPiece);

    // calculate coords of piece being jumped
    // refer to algorithm outlined in isLegalMove() method
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
    // get numerical values of start and end coords
    const start = Number(whichPiece);
    const end = Number(endPos);

    // refer to algorithm outlined in isLegalMove() method
    if ((end - start === -22) || (end - start === -11)) return 'up-left';
    else if ((end - start === -18) || (end - start === -9)) return 'up-right';
    else if ((end - start === 18) || (end - start === 9)) return 'down-left';
    else if ((end - start === 22) || (end - start === 11)) return 'down-right';
  }

  // determines if a move is a single space move
  // returns true/false
  isValidSingleSpaceMove(whichPiece, endPos) {
    // get numerical values of start and end coords
    const start = Number(whichPiece);
    const end = Number(endPos);

    // returns true if piece is moved diagonally 1 space in any direction
    // refer to algorithm outlined in isLegalMove() method
    return ((end - start === -11) || (end - start === 11) || (end - start === -9) || (end - start === 9));
  }

  // determines if a move is a double space move
  // returns true/false
  isDoubleSpaceMove(whichPiece, endPos) {
    // get numerical values of start and end coords
    const start = Number(whichPiece);
    const end = Number(endPos);

    // returns true if piece is moved diagonally 2 spaces in any direction
    // refer to algorithm outlined in isLegalMove() method
    return ((end - start === -22) || (end - start === 22) || (end - start === -18) || (end - start === 18));
  }

  // can move forward and backwards from start of game
  // pieces have to move diagonally
  // takes begining and end coordinates as pararms
  movePiece(whichPiece, endPos) {
    // check to see if legal move
    if ( this.isMoveLegal(whichPiece, endPos) ) {
      // check to see if start piece is valid based on playerTurn
      if ( this.isStartPieceValid(whichPiece) ) {
        // split string coords into array
        const startArr = whichPiece.split('');
        const endArr = endPos.split('');

        // get numerical row/col values of coords
        const startRow = Number(startArr[0]);
        const startCol = Number(startArr[1]);
        const endRow = Number(endArr[0]);
        const endCol = Number(endArr[1]);

        // get color of piece being moved
        const movingPieceColor = this.grid[startRow][startCol];

        // check to see if a piece was jumped
        if ( this.isDoubleSpaceMove(whichPiece, endPos) ) {
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
        // switch player
        this.switchPlayer();
      }
    }
  }

  // this function toggles this.playerTurn
  switchPlayer() {
    return (this.playerTurn === this.blackPiece) ? this.playerTurn = this.redPiece : this.playerTurn = this.blackPiece;
  }

  // checks to make sure that piece being moved is valid based on this.playerTurn
  // returns true/false
  isStartPieceValid(whichPiece) {
    // get numerical coords of start piece
    const startArr = whichPiece.split('');
    const startRow = Number(startArr[0]);
    const startCol = Number(startArr[1]);

    // get start piece color
    const startPieceColor = this.grid[startRow][startCol];

    // if redpiece turn and startpiece = red, then TRUE || blackpiece turn and startpiece = black, then TRUE
    return ((startPieceColor === this.redPiece) && (this.playerTurn === this.redPiece)) || ((startPieceColor === this.blackPiece) && (this.playerTurn === this.blackPiece));
  }

  // iterates over this.checkers and checks to see if a player won
  // returns true/false
  checkForWin() {
    // holds a count of each red and black piece in play
    let countRed = 0;
    let countBlack = 0;

    this.checkers.forEach(checker => {
      // if find a red piece, add it to count
      if (checker === this.redPiece) {
        countRed += 1;
      }
      // if find a black piece, add it to count
      else if (checker === this.blackPiece) {
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
    // call Checker function at the top of code
    Checker(this.board, whichPiece, endPos);
  }
}

function getPrompt() {
  // display separator and current player turn
  console.log("-----------------------");
  console.log(`Player Turn: ${game.board.playerTurn}\n`);
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
// TODO write more tests
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
