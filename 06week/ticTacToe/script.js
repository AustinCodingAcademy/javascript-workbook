'use strict';

// On each data-cell , put event listener ( click )
//   Do NOT use a loop
//
//   Look up How to get data-cell attributes and methods
//     listen to and get data from
//
//   How to get data-cell attributes into an array to check for win
//
// When players 1 and 2 click in open square
//   Put X or O, depending on turn
//
// Check for win
//   Display a win message run checkForWin()
//     Fill announce-winner id with h1 text
//
//   Reset button live
//     Use attribute selector to target all data-cells and .removeChild()
//
//
// Continue as long as no win

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  console.log(
    document.querySelectorAll('div[data-cell]').innerHTML
  );
});


/*

'use strict';

let mySquares = [];
document.addEventListener('DOMContentLoaded', () => {

  const wins = [
    [0,1,2], [3,4,5], [6,7,8],  // horizontal wins
    [0,3,6], [1,4,7], [2,5,8],  // vertical wins
    [0,4,8], [2,4,6]            // diagonal wins
  ];
  let playerTurn = 'X';
  let turnCount = 0;

  let mySquares = document.querySelectorAll("[data-cell]");

  // document.querySelector("[data-cell='0']").addEventListener("click", (square) => {
  mySquares.forEach(aSquare => {
    aSquare.addEventListener("click", square => {
      // display the current click count inside the clicked div
      if (!square.target.textContent) {
        document.getElementById('announce-winner').textContent = null;
        square.target.textContent = playerTurn;
        turnCount++
        if (checkForWin()) {  //checkForWin returns TRUE if someone won.  It returns FALSE if no win yet.
          document.getElementById('announce-winner').textContent = `Congratulations ${playerTurn}.  You won!  Start a new game by pressing Clear Board below.`;
        } else if (turnCount == 9) {  // If there have been 9 turns but no winner.  It is a tie.
          document.getElementById('announce-winner').textContent = `We have a tie folks.  Start a new game by pressing 'Clear Board' below.`;
        } else {  // Ok, toggle token to the opposite player.
          playerTurn = playerTurn === 'X'? 'O' : 'X';
        }
      } else {  // Ah, the user tried to click on an occupied square.
        document.getElementById('announce-winner').textContent = 'Try again please.  That square is taken.';
      }
    });
  });

  // This code handles actions when player presses "Clear Board" button.
  // We pretty much just initialize everything.
  document.getElementById('clear').addEventListener("click", (event)=> {
    playerTurn = 'X';
    turnCount = 0
    mySquares.forEach(aSquare => {
      aSquare.textContent = null;
    })
    document.getElementById('announce-winner').textContent = null;
  })


  function checkForWin() {
    // wins array stores all the win combinations.  wincombo array is one of the wins.
    // wins.some ... at least one of these win combos needs to be true.
    // wincombo.every ... for a win, all the squares in the particular wincombo must equal the players token (X or O)
    return wins.some(winCombo => winCombo.every(index => mySquares[index].textContent === playerTurn));
  }

}, false);

*/
