'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var start = 'tower1';
var end = 'tower2';

var stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
}

function printStacks() {
    console.log("a: " + stacks.a);
    console.log("b: " + stacks.b);
    console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
if (isLegal(startStack, endStack)) {
  var lastElementofStartStack = stacks[startStack].pop();
  stacks[endStack].push(lastElementofStartStack);
}
return true;
}

function isLegal(startStack, endStack) {
    if (typeof stacks[endStack] === 'undefined') {
      return true;
    }
var x = (stacks[startStack][(stacks[startStack].length-1)]);
var y = (stacks[endStack][(stacks[endStack].length-1)]);

if (x > y) {
console.log('Please try again.');
return false; }
 return true; }

function checkForWin() {
if (stacks.b.length === 4 || stacks.c.length === 4 || stacks.a.length === 4) {
  console.log('You won!');
  return true; }
  return false;
}

function towersOfHanoi(startStack, endStack) {
if (startStack === 'cheat' && endStack === 'code') {
  stacks = {
      a: [],
      b: [],
      c: [4, 3, 2, 1]
  }; console.log('You cheated and won!');//checkForWin();
  process.exit();
  return true;
}
movePiece(startStack, endStack);
checkForWin();
}

function getPrompt() {
    printStacks();
    rl.question('What tower would you like to remove a block from?', (startStack) => {
        rl.question('What tower would you like to add a block to?', (endStack) => {
            towersOfHanoi(startStack, endStack);
            getPrompt();
        });
    });
}

// Tests

if (typeof describe === 'function') {

    describe('#towersOfHanoi()', function() {
        it('should be able to move a block', function() {
            towersOfHanoi('a', 'b');
            assert.deepEqual(stacks, {
                a: [4, 3, 2],
                b: [1],
                c: []
            });
        });
    });

    describe('#isLegal()', function() {
        it('should not allow an illegal move', function() {
            stacks = {
                a: [4, 3, 2],
                b: [1],
                c: []
            };
            assert.equal(isLegal('a', 'b'), false);
        });
        it('should allow a legal move', function() {
            stacks = {
                a: [4, 3, 2, 1],
                b: [],
                c: []
            };
            assert.equal(isLegal('a', 'c'), true);
        });
    });
    describe('#checkForWin()', function() {
        it('should detect a win', function() {
            stacks = {
                a: [],
                b: [4, 3, 2, 1],
                c: []
            };
            assert.equal(checkForWin(), true);
            stacks = {
                a: [1],
                b: [4, 3, 2],
                c: []
            };
            assert.equal(checkForWin(), false);
        });
    });
} else {

    getPrompt();

}
