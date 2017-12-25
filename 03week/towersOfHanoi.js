'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4,3,2,1],
  b: [],
  c: []
};

//Check for valid/basic move. Should be able to move to an empty stack, and only move the top block. {a:[4,3,2],b:[1],c[]}
//Should be able to move to an Non-empty stack. {a:[4,3,2],b:[1],c[]}
//Should check for an illegal move. Should not be able to stack large on small. !={a:[4,3],b:[1,2],c[]}
//Should be able to check for a win. {a:[],b:[],c[4,3,2,1]}

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece =(startStack, endStack)=> {
  //movePiece function should allow the removal of last item in startStack array and place into last position of endStack array.
  // there are other methods such as (stacks[startStack.splice(-1));, however I had trouble getting this to pas test, so I stayed with pop() method
  return stacks[endStack].push(stacks[startStack].pop());

}
const isLegal = (startStack, endStack) => {
  // isLegal allows player to move to an array that has only a larger last item, and to an array that is empty
  return stacks[endStack].push() === 0 || stacks[startStack].slice(-1)[0] < stacks[endStack].slice(-1)[0];
}

const checkForWin = (startStack, endStack)=> {
  // checkForWin will see when stacks.c and stacks.b are full. Note: This function is only valid if isLegal function is working.
  return stacks.c.length === 4 || stacks.b.length === 4

}

function towersOfHanoi(startStack, endStack) {
  //This function only runs movePiece if isLegal function is true. Also, uses checkForWin to reset the board.
  if (isLegal(startStack, endStack)){
    movePiece(startStack, endStack)
  } else {
    console.log("this is not a valid move");
  }
  if (checkForWin()) {
    console.log("You won the game!!");
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
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
