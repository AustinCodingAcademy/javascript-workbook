'use strict';

document.addEventListener('DOMContentLoaded', () => {

  function movePiece(startStack, endStack) {
    // Your code here
    let block = stacks[startStack].pop();
    stacks[endStack].push(block);
  }

  function isLegal(startStack, endStack) {
    if ((stacks[endStack].length === 0) || ((stacks[endStack][stacks[endStack].length - 1]) > (stacks[startStack][stacks[startStack].length -1]))) {
      return true;
    } else {
      // return false;
      console.log("Sorry, you can't do that!");
    }
  }

  function checkForWin(startStack, endStack) {
    if ((stacks.b.length === 4) || (stacks.c.length === 4)) {
      return true;
      console.log("You win!")
    } else {
      return false;
    }
  }

  function towersOfHanoi(startStack, endStack) {
    if(isLegal(startStack, endStack)) {
      movePiece(startStack, endStack);
    }
    checkForWin();
  }
 })
);

// document.querySelectorAll('[data-stack]').forEach(data-block => {
//   cell.addEventListener('click', function() {
//    this.innerText = playerTurn;
//    if (checkForWin()) {
//    document.querySelector('#announce-winner').innerText = `Player ${playerTurn} Wins!`;
//    }
