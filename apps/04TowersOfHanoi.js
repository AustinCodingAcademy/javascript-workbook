'use strict';
// the following is for node input:
var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// board is here so it won't change every time:
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
    // Barbara! Fix this - comment it out and move to Hanoi funciton.
    // Your code here
    // remove the block;
    // var startMove =
      stacks[endStack].push(stacks[startStack].pop());
    // save the block:
    // var block = startMove;
    // put the block on the selected tower:
    // var endMove =
  ;
}

function isLegal(startStack, endStack) {
    // Your code here
    // var startMove = stacks[startStack].pop();
    // var endMove = stacks[endStack].push();
    return !(stacks[startStack][stacks[startStack].length - 1] >
        stacks[endStack][stacks[endStack].length - 1]);
}

function checkForWin() {
    // Your code here
    var win = stacks.b.length === 4 || stacks.c.length === 4;
    if (win) {
        console.log("You Won!");
        // process.exit();
    }
    return win;
}

function towersOfHanoi(startStack, endStack) {
    // Your code here
    // Is legal
    // Move piece
    // check for win

    isLegal(startStack, endStack);
    movePiece(startStack, endStack);
    checkForWin();
}

function getPrompt() {
    printStacks();
    rl.question('Please choose a starting stack to remove a block from: ', (startStack) => {
        rl.question('Please choose a stack to place block on: ', (endStack) => {
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
