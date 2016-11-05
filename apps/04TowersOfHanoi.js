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
    stacks[endStack].push(stacks[startStack].pop());
}

function isLegal(startStack, endStack) {
    // Your code here

    // set up access to variables that need to be compared
    var firstStack = stacks[startStack].length - 1;
    var secondStack = stacks[endStack].length - 1;
    var compareA = stacks[startStack][firstStack];
    var compareB = stacks[endStack][secondStack];

    // compare selected variables
    if (compareB === undefined) {
        if (compareA !== undefined) {
            return true;
        }
    } else if (compareA < compareB) {
        return true;
    } else {
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
    if (isLegal(startStack, endStack)) {
        movePiece(startStack, endStack);
    } else {
        console.log('Invalid move!');
    }
    var winCheck = checkForWin();
    if (winCheck) {
        console.log('You win good stuff breh!');

        // ask user if they'd like to play again
        rl.question('Would you like to play again? Enter y/n: ', (playAgain) => {
            playAgain = playAgain.trim();
            playAgain = playAgain.toLowerCase();

            // if yes, reset the winCheck and board to default and start game over
            if (playAgain === 'y') {
                winCheck = false;
                stacks = {
                    a: [4, 3, 2, 1],
                    b: [],
                    c: []
                };
                getPrompt();

            // otherwise cease execution of game
            } else {
                return;
            }
        })
    }
}

function getPrompt() {
    printStacks();
    rl.question('start stack: ', (startStack) => {
        rl.question('end stack: ', (endStack) => {

            // scrub input
            startStack = startStack.trim();
            endStack = endStack.trim();
            startStack = startStack.toLowerCase();
            endStack = endStack.toLowerCase();

            // check if input is a, b, or c and if not ask again
            if ((startStack !== 'a' && startStack !== 'b' && startStack !== 'c') || (endStack !== 'a' && endStack !== 'b' && endStack !== 'c')) {
                console.log('Invalid entry!');
                getPrompt();

            // if input is ok execute game
            } else {
                towersOfHanoi(startStack, endStack);
                getPrompt();
            }
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
