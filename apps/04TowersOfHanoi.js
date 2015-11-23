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
    // "push" on the finish stack the block that is popped off the startig stack
    stacks[endStack].push(stacks[startStack].pop());
}

function isLegal(startStack, endStack) {
    // get the last indicies of your start and end stacks
    var startStackLastBlockIdx = stacks[startStack].length - 1
    var endStackLastBlockIdx = stacks[endStack].length - 1

    // this will give us the block at the end of the start stack
    var movingBlock = stacks[startStack][startStackLastBlockIdx];

    // if the finish stack is empty, this will be undefined, otherwise it will
    // give us the block at the last index of the finish stack
    var comparingBlock = stacks[endStack][endStackLastBlockIdx];

    // compare the blocks
    if (movingBlock < comparingBlock || !comparingBlock) {
        // if the moving block is less than the block it's going to stack on
        // or if the finish stack is empty (hence the comparing block would be undefined)
        // remember '!' in front of a value will give the opposite "truthiness" value
        return true;
    }

    // otherwise return false. It is not a legal move
    console.log("Not a Legal Move");
    return false;
}

function checkForWin() {
    if (stacks['b'].length === 4 || stacks['c'].length === 4) {
        console.log('You Won!!!');
        return true;
    }
    return false;
}

function towersOfHanoi(startStack, endStack) {
    if (isLegal(startStack, endStack)) {
        movePiece(startStack, endStack);
    }
    checkForWin();
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
            assert.equal(isLegal('a', 'b'), false);
        });
        it('should allow a legal move', function () {
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
