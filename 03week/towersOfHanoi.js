/*'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // Your code here
  // let piece = stacks[startStack].pop();
  //  stacks[endStack].push(piece);
  var lengthStartStack = stacks[startStack].length;
    var lengthEndStack = stacks[endStack].length;

    //adjust the array to move the last number from the start stack and add to the front of the end stack
    var lastValueStartStack = stacks[startStack][lengthStartStack - 1];
    var lastValueEndStack = stacks[endStack][lengthEndStack - 1];

    stacks[startStack].pop();
    stacks[endStack].push(lastValueStartStack);

};

function isLegal(startStack, endStack) {
  // Your code here
  let lengthStart = stacks[startStack].length;
  let lengthEnd = stacks[endStack].length;
  let start = stacks[startStack][lengthStart-1];
  let end = stacks[endStack][lengthEnd-1];

  if (start < end || end === undefined) {
   return true;
 }
 else {
   return false;
 }

};

function checkForWin() {
  // Your code here
  if (stacks.b.length >= 4 || stacks.c.length >= 4){
            console.log("You got it!");
          return true;
      } else {
          return false;
      }
  //the game is won when either stack b or stack c has all 4 in the correct order

};

function towersOfHanoi(startStack, endStack) {
  // Your code here
  if (isLegal(startStack, endStack) === true){
      movePiece(startStack, endStack);
      checkForWin();
        return true;
    } else{
        return false;
    }
  };

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}*/

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
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

function moveBlock(startStack, endStack) {
  // Your code here
   var block = stacks[startStack].pop();
   stacks[endStack].push(block);
   return stacks;
  }



function isLegal(startStack, endStack) {
  // Your code here
var lengthStart = stacks[startStack].length;
var lengthEnd = stacks[endStack].length;
var start = stacks[startStack][lengthStart - 1]
var end = stacks[endStack][lengthEnd - 1]

if (start < end || end === undefined){
  return true;
}
else{
  return false;
}
}

function checkForWin(startStack, endStack) {
  if (stacks.b.length === 4 || stacks.c.length === 4){
    return true;
  }
  else {
    return false;
  }
}


function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)){
    moveBlock(startStack, endStack);
    checkForWin(startStack, endStack);
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
