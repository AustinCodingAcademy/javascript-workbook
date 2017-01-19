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

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(stackStack, endStack) {
  // Your code here
  var choice = stacks[startStack];
  var endChoice = stacks[endStack];
  var block = choice.pop();

  console.log(choice);

  endChoice.push(block);

} // end movePiece

function isLegal(startStack, endStack) {
  // Your code here

  var choice = stacks[startStack];
  var endChoice = stacks[endStack];
  var block = choice[choice.length - 1];
  var block2 = endChoice[endChoice.length - 1];

  console.log(block2);
if(endChoice.length === 0){

  return true;
}
if (block2 > block){

  return true;
}
  else { return false; }
}// end isLegal

function checkForWin() {
  // Your code here
if(stacks['b'].length === 4 || stacks['c'].length === 4){
  console.log("You won!!!");
  return true;

} else {
  return false;
}
} // end checkForWin

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if(isLegal(startStack, endStack)){
  // movePiece(startStack, endStack);
  var choice = stacks[startStack];
  var endChoice = stacks[endStack];
  var block = choice.pop();

  endChoice.push(block);

} else {
  console.log('Nope,nope, and nope...');
}

}

function getPrompt() {
  printStacks();
  rl.question('Where would you like to move from? ', (startStack) => {
    rl.question('Where would you like to end your move?: ', (endStack) => {

      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', function () {
    it('should be able to move a block', function () {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', function () {
    it('should not allow an illegal move', function () {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', function () {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', function () {
    it('should detect a win', function () {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
