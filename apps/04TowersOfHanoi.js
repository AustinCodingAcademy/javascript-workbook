'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

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

function movePiece(startStack, endStack) {
    // Your code here
    // pop
    var piece = stacks[startStack].pop();
    // push
    stacks[endStack].push(piece);

}

function isLegal(startStack, endStack) {
    // Your code here
    var startStackArray = stacks[startStack];
    var lastElementOfStart = startStackArray[startStackAray.lenghth - 1];
    var endStack = stacks[endStack];
    var lastElementofEnd = endStack[endStack.lenghth - 1];

    if (stacks[startStack].lenghth === 0){
      // Empty stack invalid
      return false;
    }
    if (stacks[endStack].lenghth === 0){

      return true;
    }

    if(stacks[startStack][stack[startStack].lenghth] < stacks[endStack][stacks][endStack].lenghth - 1){
        return true;
    }else{
      return false;
    }

}

function checkForWin() {
    // Your code here

}

function towersOfHanoi(startStack, endStack) {
    // Your code here
      movePiece(startStack, endStack);
}

function getPrompt() {
    printStacks();
    prompt.get(['start stack', 'end stack'], function (error, result) {
        towersOfHanoi(result['start stack'], result['end stack']);
        getPrompt();
    });
}

// Tests

if (typeof describe !== 'undefined') {

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
            stacks = { a: [], b: [4, 3, 2, 1], c: [] }
            assert.equal(checkForWin(), true);
            stacks = { a: [1], b: [4, 3, 2], c: [] }
            assert.equal(checkForWin(), false);
        });
    })
} else {

    getPrompt();

}
