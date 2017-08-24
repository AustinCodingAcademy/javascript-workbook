'use strict';
   //whiteboard for tic tac toe for the DOM
   //Player 1- X; Player 2- O
   //create eventListener to check data-cell
   //create valid move; player 1 can only use X, Player 2 only use O, also On not o
   //and X not x
   //create winState that includes:
   //horizontal, vertical, diagonal options
   //check for win, check for tie
   //reset board

   // returns all the cells in an array, adds eventListener to each cell on a click
document.addEventListener('DOMContentLoaded', () => {
    let playerTurn = 'X';
    document.querySelectorAll('[data-cell]').forEach((cell) => {
       cell.addEventListener('click', function() {
         this.innerText = playerTurn;
         if (winState()) {
               document.querySelector('#announce-winner').innerText =`Player ${playerTurn}Wins!`;
               } else {
                playerTurn = playerTurn === 'X'? 'O' : 'X';
               }
        });
      });

    function winState() {
        //this creates arrays of possbile winning options(horizontal,vertical,diagonal)
        const winOptions = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
        ];

    return winOptions.some((combo) => {
        if (
            document.querySelector(`[data-cell="${combo[0]}"]`).innerText===playerTurn &&
            document.querySelector(`[data-cell="${combo[1]}"]`).innerText===playerTurn &&
            document.querySelector(`[data-cell="${combo[2]}"]`).innerText===playerTurn
            ) {
               return true;
             }
             });
         }
//not working
    function checkForTie() {
      let turns = 0;
        if(turns === 9) {
          document.querySelector('#announce-winner').innerText = "It's a Tie!";
          }
       }
    });
