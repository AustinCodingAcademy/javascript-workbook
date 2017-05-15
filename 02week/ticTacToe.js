'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}


function horizontalWin() {
  +  //console.log("horizontalWin");
  // Your code here
  +  for (let i = 0; i < 3; i++){
    +
    +    if ( (board[i][0] !== " ") &&(board[i][0] === board[i][1]) && (board[i][1] === board[i][2]) ){
      +      console.log("Result row " +board[i][0]+" | "+board[i][1]+ " | " + board[i][2]);
      +      return true;
      +    }
      +  }
      +  //console.log("Horizon win false");
      +  return false;
    }

    function verticalWin() {
      +  //console.log("Checking verticalWin");
      // Your code here
      +  for (let i = 0; i < 3; i++){
        +
        +    if (board[0][i] !== " " && board[0][i] === board[1][i] && board[1][i] === board[2][i]){
          +      console.log(" " +board[0][i]+" | "+board[1][i]+ " | " + board[2][i]);
          +      return true;
          +    }
          +  }
          +  //console.log("vertWin false");
          +  return false;
        }

        function diagonalWin() {
          +  //console.log("checking diagonalWin");
          // Your code here
          +  if (board[0][0] !== " " && board[0][0] === board[1][1] && board[1][1] === board[2][2]){
            +    //console.log("Diag win " +board[0][0]+" | "+board[1][1]+ " | " + board[2][2]);
            +    return true;
            +  } else if (board[0][2] !== " " && board[0][2] === board[1][1] && board[1][1] === board[2][0]){
              +    return true;
              +  }
              +
              +  //console.log("daigwin false");
              +  return false;
            }

            function checkForWin() {
              +  //console.log("running checkForWin: Vert: " + verticalWin() + " diag: "+diagonalWin() + " hori: "+horizontalWin());
              // Your code here
              +
              +  if ( verticalWin() || diagonalWin() || horizontalWin() ){
                +    //GAME OVER
                +    console.log("!!!!!!!!!!!!!Game over, player " + playerTurn + " Wins\n\n\n\n");
                +    process.exit();
                +  }
                +  //console.log(" checkForWin is false")
                +  return false;
              }

              function ticTacToe(row, column) {
                // Your code here
                +  let spaceEmpty = (board[row][column] === " ");
                +
                +  if (!spaceEmpty) {
                  +    //return to prompt
                  +    console.log("That space is not empty! Try again");
                  +    return;
                  +  }
                  +
                  +  //set X or O on board
                  +  board[row][column] = playerTurn;
                  +  //check for wins
                  +  checkForWin();
                  +
                  +  if (playerTurn === "X") {
                    +    playerTurn = "O";
                    +  } else {
                      +    playerTurn = "X";
                      +  }
                    }
                    // function horizontalWin() {
                    //
                    //   for (var i=0; i < 3; i++) {
                    //     if ((board[i][0] !== '') && (board[i][0] === board[i][1] === board[i][2])) {
                    //       return true;
                    //
                    //     }
                    //   }
                    //
                    //   return false;
                    // }
                    //
                    // function verticalWin() {
                    //
                    //   for (var i=0; i < 3; i++) {
                    //     if ((board[0][i] !== '') && (board[0][i] === board[1][i] === board[2][i])) {
                    //       return true;
                    //
                    //     }
                    //   }
                    //   return false;
                    // }
                    //
                    // function diagonalWin() {
                    //   for (var i=0; i < 3; i++) {
                    //     if ((board[0][0] === board[1][1] === board[2][2]) || (board[0][2] === board[1][1] === board[2][0])) {
                    //       return true;
                    //
                    //     }
                    //   }
                    //   return false;
                    // }
                    //
                    // function checkForWin() {
                    //
                    //   if (horizontalWin() || verticalWin() || diagonalWin()) {
                    //     return true;
                    //     console.log('You win!');
                    //   }
                    //   return false;
                    //
                    //   function ticTacToe(row, column) {
                    //     // Your code here
                    //
                    //     board[row][column] = playerTurn;
                    //     checkForWin();
                    //
                    //     if (playerTurn === 'X') {
                    //       playerTurn = 'O';
                    //     } else {
                    //       playerTurn = 'X';
                    //     }
                    //
                    //
                    //   }

                    function getPrompt() {
                      printBoard();
                      console.log("It's Player " + playerTurn + "'s turn.");
                      rl.question('row: ', (row) => {
                        rl.question('column: ', (column) => {
                          ticTacToe(row, column);
                          getPrompt();
                        });
                      });

                    }



                    // Tests

                    if (typeof describe === 'function') {

                      describe('#ticTacToe()', () => {
                        it('should place mark on the board', () => {
                          ticTacToe(1, 1);
                          assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
                        });
                        it('should alternate between players', () => {
                          ticTacToe(0, 0);
                          assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
                        });
                        it('should check for vertical wins', () => {
                          board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
                          assert.equal(verticalWin(), true);
                        });
                        it('should check for horizontal wins', () => {
                          board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
                          assert.equal(horizontalWin(), true);
                        });
                        it('should check for diagonal wins', () => {
                          board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
                          assert.equal(diagonalWin(), true);
                        });
                        it('should detect a win', () => {
                          assert.equal(checkForWin(), true);
                        });
                      });
                    } else {

                      getPrompt();
                    }
