'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
    var chosenBlock = stacks[startStack].pop();
    stacks[endStack].push(chosenBlock);
}

function isLegal(startStack, endStack) {
    // Your code here
    // if (stacks[endStack] === false) {
    //     return true;
    // } else
    var firstStack = stacks[startStack].length - 1;
    var secondStack = stacks[endStack].length - 1;
    var compareA = stacks[startStack][firstStack];
    var compareB = stacks[endStack][secondStack];

    // why can't i use (compareB === false) ?
    if (compareB === undefined) {
        return true;
    } else if (compareA < compareB) {
        return true;
    } else {
        console.log(firstStack);
        console.log(secondStack);
        console.log(compareA);
        console.log(compareB);
        return false;
    }
}

function checkForWin() {
    // Your code here
    if ((stacks.b.length || stacks.c.length) === 4) {
            return true;
    } else {
        return false;
    }
}

function towersOfHanoi(startStack, endStack) {
    // Your code here
    // if (isLegal(startStack, endStack) === true) {
    if (isLegal(startStack, endStack)) {
        movePiece(startStack, endStack);
    } else {
        console.log('Invalid move!');
    }
    var winCheck = checkForWin();
    if (winCheck) {
        console.log('You win good stuff breh!');
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
