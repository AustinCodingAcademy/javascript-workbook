'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let playerTurn = 'X'; //assign first player's move to X

  document.querySelectorAll('[data-cell]').forEach(cell => {
    cell.addEventListener ('click', function() { //target each div when it's clicked/selected
      this.innerText = playerTurn; //assign current data cell to X

      checkForWin(); //call this function to make sure if anyone wins

      playerTurn = (playerTurn === 'X') ? 'O' : 'X'; //toggle player turn between 'X' and 'O'
    }); //addEventListener function ends
  }) //forEach function ends

  function checkForWin() { 

    const winners = [ //winning cell arrays are located in another array
      [0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
    ];

    winners.some(combo => { //check for each array
      if (document.querySelector(`[data-cell="${combo[0]}"]`).innerText === playerTurn && //check index 0
          document.querySelector(`[data-cell="${combo[1]}"]`).innerText === playerTurn && //check index 1
          document.querySelector(`[data-cell="${combo[2]}"]`).innerText === playerTurn) { //check index 2
            document.querySelector('#announce-winner').innerText = `Player ${playerTurn} wins!`; /*if it matches, return player 'X' wins!
                                                                                                or  player 'O' wins!*/
          }
    })
    return false;
  } //checkForWin function ends

}); //addEventListener function ends
