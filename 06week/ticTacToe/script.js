'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let playerTurn = 'X';
  // // My code
  // //Look at basic tic tac toe grid in HTML. walked through how to view a box
  // //and use querySelectorAll to point to all boxes. call below brings up an array.
  //   // document.querySelectorAll('[data-cell]')
  // //How would we target multiples or all of them? For loops are possible ,but
  // //forEach is easier.

  // document.querySelectorAll('[data-cell]').forEach((cell) =>  {
  //   // console.log(cell);
  //       cell.innerText = "x";


  // //Use onClick for eventlistener...
  // // document.querySelector('[data-cell="0"]').onClick = function() {
  // //   console.log(this);
  // });

  // Let's put a listener on the first item. Target it first.
  // document.querySelector('[data-cell="0"]').addEventListener('click', function() {
  //   this.innerText = playerTurn;
  //   playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    // we want X to toggle. Set playerturn variable to X above, then set this to playerturn.
    // after it's set, we want it to toggle. Ternary takes care of that. Start at
    // X, then to O, otherwise it must already be O so set it back equal to X.

    document.querySelectorAll('[data-cell]').forEach((cell) =>  {
          cell.addEventListener('click', function() {
      this.innerText = playerTurn;
      if (checkforWin()) {
        document.querySelector('#announce-winner').innerText = (`Player ${playerTurn}`)
      }
      //This toggles from X to O, then back to X.
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
      });
    })

    // Determine winner
    // function checkforWin () {
    //   if (
    //     document.querySelector('[data-cell="0"]') === playerTurn &&
    //     document.querySelector('[data-cell="1"]') === playerTurn &&
    //     document.querySelector('[data-cell="2"]') === playerTurn
    //   ) {
    //     return true;
    //   }
    //   return false;

      // let's try writing this in a loop so that we can concisely cover all option
      // for winning
    // }
    function checkforWin () {
      const winningCombos = [
        ['a', 'b', 'c'],
        ['e', 'f', 'g'],
        ['h', 'i', 'j'],
        ['a', 'd', 'g'],
        ['b', 'e', 'h'],
        ['c', 'f', 'i'],
        ['a', 'e', 'i'],
        ['c', 'e', 'g']
        // Changed it from numbers to letters, was confusing when referencing indices
        // within an array.
        // [0, 1, 2],
        // [3, 4, 5],
        // [6, 7, 8],
        // [0, 3, 6],
        // [1, 4, 7],
        // [2, 5, 8],
        // [0, 4, 8],
        // [2, 4, 6]
      ];
      // Iterate over each of them. Does data cell equal a === playerTurn? If true,
      // it returns true and goes to the next index in the combo. When false, it will
      // not move on. Some function requires that at least one is true.
      return winningCombos.some((combo) => {
        return (combo.every((letter) => {
          return document.querySelector(`[data-cell="${letter}"]`).innerText === playerTurn;
        });
      //     // using a template below to track wins by cell.
      //     document.querySelector(`[data-cell="${combo[0]}"]`).innerText === playerTurn &&
      //     document.querySelector(`[data-cell="${combo[1]}"]`).innerText === playerTurn &&
      //     document.querySelector(`[data-cell="${combo[2]}"]`).innerText === playerTurn
      //   ) {
      //     return true;
    });
  });
 }
});
