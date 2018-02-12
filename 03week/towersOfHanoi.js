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
  console.log(''); //to create space between game boards between turns
  console.log('Towerz of hANNOYED')
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);

}

const possibleStacks = ['a', 'b', 'c']
const isInputValid = (startStack, endStack) => {
  if (possibleStacks.indexOf(startStack) === -1 || possibleStacks.indexOf(endStack) === -1) {
    console.log('--HEY! enter something valid, please. (hint: a, b or c)')
    return true;
  } else {
    return isLegal(startStack, endStack)
  }
}

const movePiece = (startStack, endStack) => {
  stacks[endStack].push(stacks[startStack].pop())
  return checkForWin();
}

const isLegal = (startStack, endStack) => {
if (stacks[startStack].length === 0){
    console.log('--Nice try, loser. google the rules')
    return true
  }else if (stacks[startStack][stacks[startStack].length-1] > stacks[endStack][stacks[endStack].length-1]) {
    console.log('--Illegal move. Calling the cops')
    return true
  } else {
    return movePiece(startStack, endStack)
  }
}

const checkForWin = () => {
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    console.log('--Winna, winna, chicken dinna')
    console.log('--congrats on winning this totally "fun" game')
    console.log('--proud of u')
    startNewGame();
  }
}

const startNewGame = () => {
console.log('')
console.log("NEW GAME")
  stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
}

const towersOfHanoi = (startStack, endStack) => {
  isInputValid(startStack, endStack)
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

getPrompt();


//----------TESTS----------

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should detect if move is legal', () => {
      stacks = {a:[4, 3, 2], b:[1], c:[]}
      assert.equal(isLegal('a', 'b'), true);
      //assert.equal(isLegal('a', 'c'), movePiece());
    });
    // it('should detect if input is valid', () => {
    //   assert.equal(towersOfHanoi('a', 'poo'), true);
    //   //assert.deepEqual(towersOfHanoi('a', 'c'), isLegal());
    // });
    it('should detect a win', () => {
      stacks = {a:[1], b:[], c:[4, 3, 2]}
      assert.equal(checkForWin('a', 'c'), startNewGame());
    });
  });
} else {

  getPrompt();

}
