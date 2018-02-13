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

const printStacks = () => {
//This function will show the playing board on the console.
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (startStack, endStack) => {
  return stacks[endStack].push(stacks[startStack].pop());
  //This function will take the last array value in startStack, and will move it to the last position in the endStack.
}
const checkForWin = () => {
//This will check to see if there are 4 pieces in stack c.
   if (stacks.c.length === 4) {
      return true;
  }else{
      return false;
  }
 }

const isLegal = (startStack, endStack) => {
// This will pop it and push it to the end of the array, then call the checkforwin function.
  let startTest = stacks[startStack][stacks[startStack].length - 1];
  let endTest = stacks[endStack][stacks[endStack].length - 1];

    if ((startTest < endTest) || (stacks[endStack].length === 0)) {
      return true;
    } else {
      console.log('Nope.')
      return false;
    } else{
      console.log(' This is not working.');
    }
}
const stackTest = (startStack, endStack) => {
    if ((startStack === 'a') && (endStack === 'b' || endStack === 'c')) {
      console.log('The stackTest is True.')
      return true;
    } else if ((startStack === 'b') && (endStack === 'a' || endStack === 'c')) {
      console.log('The stackTest is True.')
      return true;
    } else if ((startStack === 'c') && (endStack === 'a' || endStack === 'b')) {
      console.log('The stackTest is True.')
      return true;
    }
  console.log('stack test = ' + stackTest);
}
const towersOfHanoi = (startStack, endStack) => {
    if (isLegal(startStack, endStack)) {
      // If isLegal is true, then cue movePiece
      movePiece(startStack, endStack)
   } else {
     return 'This move is not legal.'
   }
   if (checkForWin()) {
     console.log('You won!');
     stacks = {
       a: [4, 3, 2, 1],
       b: [],
       c: []
    };
    }

const getPrompt = () => {
  printStacks();
  //This will print out the current state of the game.
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

//Tests are here!

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should allow you to move a piece', () => {
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
      assert.equal(checkForWin(), false);
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
    });
  });
} else {


getPrompt();
