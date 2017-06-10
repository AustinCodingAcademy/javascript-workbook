'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
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
  let block = stacks.a.pop();
  stacks.b.push(block);
}
movePiece();
console.log(stacks.a.length-1)


function isLegal(startStack, endStack) {
//   // let last = stacks.length-1
//   let block = stacks.a.pop();
//   let lasta = stacks.a.length-1
//   let lastb = stacks.b.length-1
//   let lastc = stacks.c.length-1
//
//   if ((block > stacks.b.length-1) || (block > stacks.c.length-1)) {
//     return false;
//   }
//   if ((block < stacks[lastb]) || (block < stacks[lastc]) || (stacks[lastb] === 0) || (stacks[lastc] === 0)) {
//     return true;
//   }
// }

  if (stacks[endStack].length === 0 || stacks[startStack].length - 1 < stacks[endStack].length - 1) {
    return true;
  } else {
    return false;
  }
};
  // Your code here

function checkForWin() {
  if ((stacks.b.length || stacks.c.length) === 4) {
    return true
  } else {
    return false;
  }// Your code here

}

function towersOfHanoi(startStack, endStack) {

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
