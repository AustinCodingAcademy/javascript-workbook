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
  // })

  // //Use onClick for eventlistener...
  // // document.querySelector('[data-cell="0"]').onClick = function() {
  // //   console.log(this);
  // });

  // Let's put a listener on the first item. Target it first.
  document.querySelector('[data-cell="0"]').addEventListener('click', function() {
    this.innerText = playerTurn;
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    // we want X to toggle. Set playerturn above, then set this to playerturn.
    // after it's set, we want it to toggle. Ternary takes care of that. Start at
    // X, then to O, otherwise it must already be O so set it back equal to X.
  });
});
