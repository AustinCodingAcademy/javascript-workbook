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

let remove = stacks[startStack].pop()

stacks[endStack].push(remove)


}

function isLegal(startStack, endStack) {

if(stacks[startStack][stacks[startStack].length -1] < stacks[endStack][stacks[endStack].length -1]){

return true }  

else if (stacks[endStack].length === 0){
  return true
}

else return false
}

function checkForWin(endStack) {
  let winStack = [4, 3, 2, 1]

  // console.log(endStack)

  if (endStack === 'b' || 'c'){

    for(let i = 0; i < winStack.length; i++){

      // console.log(winStack[i], stacks[endStack][i])
      if(stacks[endStack][i] !== winStack[i]){
        return false
      }
    }

      return true
  }

}

function towersOfHanoi(startStack, endStack) {
if (isLegal(startStack, endStack)){
movePiece (startStack, endStack) 
if(checkForWin(endStack)){
  console.log("We've Got A Winner!")
}
}
else {
  console.log('Not A Valid Move')
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
