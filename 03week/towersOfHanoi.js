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

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // Your code here
  let elem = stacks[startStack].pop();
  stacks[endStack].push(elem);

}

function isLegal(startStack, endStack) {
  // Your code here
//is position greater or less than what peice you're trying to put on top of other
let elem1 = [stacks[startStack].length-1];
//if element 1(startstack) is greater than zero, and element2(endstack)
//is equal to zero return true
let elem2 = stacks[endStack];
//if element 1 has value and element 2 has no value, you can place a value there
  if(elem1 > 0 && elem2.length == 0){
    return true;

  }if (elem2 > elem1){
    return true;

  } else{
    return false;
  }
}

function checkForWin(startStack, endStack) {
  // Your code here
  //if numbers are in descending order then you win
 //if stack b is full return true
 //if length of stack b is equal to number of pieces expected, you win
 if(stacks.b.length === 4){
   console.log("Winner!!")
   return true;
 }else {
   return false;
 }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here]
  movePiece(startStack, endStack);
  //isLegal(startStack, endStack);
  //checkForWin(startStack, endStack);

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
