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
};

function movePiece(startStack, endStack) {
    // pop is removing the last element
    var piece = stacks[startStack].pop();
    // push is adding to the end of the array
    stacks[endStack].push(piece);
};

function isLegal(startStack, endStack) {
    // Your code here
    var columnStart = stacks[startStack].length;
    var columnEnd = stacks[endStack].length;
    var start = stacks[startStack][columnStart - 1];
    var end = stacks[endStack][columnEnd - 1];

// when moving a piece, the starting piece cannot be greater than the end piece you are putting it on top of
    if (start < end || end === undefined) {
        return true;
    } else {
        return false;
    }
};


function checkForWin(endStack) {
    // if either column b or column c have a length of 4 then player wins
    if ((stacks.b.length === 4) || stacks.c.length === 4) {
        return true;
    } else {
        return false;
    }
};


function towersOfHanoi(startStack, endStack) {
    // if the move is legal, then move the piece, then check if you win, if not keep playing
    if (isLegal(startStack, endStack)) {
        movePiece(startStack, endStack);
        checkForWin(endStack);
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
            assert.deepEqual(stacks, {
                a: [4, 3, 2],
                b: [1],
                c: []
            });
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
