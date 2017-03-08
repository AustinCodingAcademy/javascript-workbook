'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printNewStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startPile, endPile) {
  // Moves the Pieces to the Pile
  stacks[endPile].push(stacks[startPile].pop());
}
// Checks to see if the move is legal or not
function isLegal(startPile, endPile) {
  // Checks to see if the move is legal
  var lastItemFrom = stacks[startPile][stacks[startPile].length - 1];
  var lastItemTo = stacks[endPile][stacks[endPile].length - 1];
  if (lastItemTo === undefined || lastItemFrom < lastItemTo) {
    movePiece(startPile, endPile);
    checkForWin();
    return true
  } else if (lastItemFrom > lastItemTo) {
    console.log("Opps, try again");
    return false
  }

}

function checkForWin() {
  // Checks to see if you won or not
  if (stacks.c.length === 4 || stacks.b.length === 4) {
    printStacks();
    console.log("You Won!!");
    return true;
  } else {
    return false;
  }

}

function towersOfHanoi(startPile, endPile) {
  isLegal(startPile, endPile);

}

function getPrompt() {
  printStacks();

  rl.question('start stack: ', (startPile) => {
    rl.question('end stack: ', (endPile) => {
      towersOfHanoi(startPile, endPile);
      getPrompt();
    });
  });
}
