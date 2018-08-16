'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

//const startStack1 = stacks.a;
// // objects destructing
// let {a, b, c} = stacks;
// console.log(a.length, b.length, c.length);



function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // Your code here
  let delStack = stacks[startStack].pop();
  stacks[endStack].push(delStack);

}
 
function isLegal(startStack, endStack) {
  return (stacks[endStack].length === 0 || stacks[startStack][stacks[startStack].length - 1] < stacks[endStack][stacks[endStack].length -1]);

}

function checkForWin() {
  // Your code here
  return (stacks.b.length == 4 || stacks.c.length == 4);
}

function checkForValidInput(startStack, endStack){
  return (typeof startStack === "string"|| typeof endStack === "string");

}

function checkForOneCharInput(startStack, endStack){
  const tester = /^[a-z]+$/;
  if (!tester.test(startStack) || !tester.test(endStack)){
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  
  if (checkForValidInput(startStack,endStack)){
    //checkForOneCharInput(startStack, endStack);
    isLegal(startStack,endStack);
    //console.log("afterislegal",startStack,endStack);
    movePiece(startStack,endStack);
    //console.log("aftermovepiece");
    checkForWin(startStack);
    return checkForWin(startStack);
  }

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      //console.log("I am here in going to towersofHanoi");
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

  describe('#checkForValidInput()', () => {
    it('should not allow numerical inputs', () => {
      assert.equal(checkForValidInput(1,2), false);
      assert.equal(checkForValidInput('a', 'b'), true);
    });
  });

  describe('(#checkForOneCharInput()', () => {
    it('it is one char inputs and not falsy values', () => {
      assert.equal(checkForValidInput(' ','..'), false);
      assert.equal(checkForValidInput('aaa', 'bbb'), false);
    });
  });

} else {

  getPrompt();

}


