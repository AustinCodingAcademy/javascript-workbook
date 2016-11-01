'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//this is just the board
var stacks = {
  tower1: [4, 3, 2, 1],
  tower2: [],
  tower3: []
};

function printStacks() {
  console.log("tower1: " + stacks.tower1);
  console.log("tower2: " + stacks.tower2);
  console.log("tower3: " + stacks.tower3);
}

function movePiece(startMove, endMove) {
  // Your code here
    var choice = stacks[startMove];
    var endChoice = stacks[endMove];
    var block = choice.pop();

    endChoice.push(block);
}

function isLegal(startMove, endMove) {
  // Your code here
  var choice = stacks[startMove];
  var endChoice = stacks[endMove];
  var block = choice[choice.length -1];
  var block2 = endChoice[endChoice.length -1];

  if( endChoice.length === 0){
    return true;
  }

  if(block > block2){
    return false;
  }

  return true;

}

function checkForWin(startMove, endMove) {
  // Your code here
  var choice = stacks[startMove];
  var endChoice = stacks[endMove];

  // does stack have a length of 4
  if(stacks.tower2.length === 4 || stacks.tower3.length === 4){
    return true;
  }
  return false;


}

function towersOfHanoi(startMove, endMove) {
  // Your code here
  movePiece(startMove, endMove);
  isLegal(startMove, endMove); //if true make the move
  checkForWin(startMove, endMove); //Did the player win


  if(checkForWin()) {
    console.log('Winner!');
    process.exit();
  }


}

function getPrompt() {
  printStacks();
  rl.question('Pick a tower to pull a block from: tower1, tower2, tower3: ', (startMove) => {
    rl.question('Place block on a tower: ', (endMove) => {
      towersOfHanoi(startMove, endMove);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', function () {
    it('should be able to move a block', function () {
      towersOfHanoi('tower1', 'tower2');
      assert.deepEqual(stacks, { tower1: [4, 3, 2], tower2: [1], tower3: [] });
    });
  });

  describe('#isLegal()', function () {
    it('should not allow an illegal move', function () {
      stacks = {
        tower1: [4, 3, 2],
        tower2: [1],
        tower3: []
      };
      assert.equal(isLegal('tower1', 'tower2'), false);
    });
    it('should allow a legal move', function () {
      stacks = {
        tower1: [4, 3, 2, 1],
        tower2: [],
        tower3: []
      };
      assert.equal(isLegal('tower1', 'tower2'), true);
    });
  });
  describe('#checkForWin()', function () {
    it('should detect a win', function () {
      stacks = { tower1: [], tower2: [4, 3, 2, 1], tower3: [] };
      assert.equal(checkForWin(), true);
      stacks = { tower1: [1], tower2: [4, 3, 2], tower3: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
