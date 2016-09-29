'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

var stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
};

var numberOfTurns = 0;

function printStacks() {
    console.log("a: " + stacks.a);
    console.log("b: " + stacks.b);
    console.log("c: " + stacks.c);
}

function printNumberOfTurns(numberOfTurns) {
    console.log("# of Turns: " + numberOfTurns);
}

function movePiece(startStack, endStack) {

    var lengthStartStack = stacks[startStack].length;
    var lengthEndStack = stacks[endStack].length;

    //adjust the array to move the last number from the start stack and add to the front of the end stack
    var lastValueStartStack = stacks[startStack][lengthStartStack - 1];
    var lastValueEndStack = stacks[endStack][lengthEndStack - 1];

    stacks[startStack].pop();
    stacks[endStack].push(lastValueStartStack);

}

function isLegal(startStack, endStack) {

    var lengthStartStack = stacks[startStack].length;
    var lengthEndStack = stacks[endStack].length;

    var lastValueStartStack = stacks[startStack][lengthStartStack - 1];
    var lastValueEndStack = stacks[endStack][lengthEndStack - 1];

    if (lengthStartStack === 0) {
        lastValueStartStack = 0;
    }
    if (lengthEndStack === 0) {
        lastValueEndStack = 0;
    }

    // move is legal if the value you are moving to the endStack is LESS than the last value of the startStack

    if (lastValueEndStack === 0) {
        return true;
    } else if (lastValueStartStack > lastValueEndStack) {
        return false;
    } else if (lastValueStartStack < lastValueEndStack) {
        return true;
    }

}

function checkForWin() {

    //the game is won when either stack b or stack c has all 4 in the correct order

    var stackAsStringB = stacks['b'].toString();
    var stackAsStringC = stacks['c'].toString();

    if (stackAsStringB === '4,3,2,1' || stackAsStringC === '4,3,2,1') {
        return true;
    } else {
        return false;
    }

}

function towersOfHanoi(startStack, endStack) {
    // FIRST check isLegal
    // If isLegal is true, then do movePiece.  If not true, ask for prompt again.
    // THIRD checkForWin - if win, end game.  if no win, continue function.
    // FOURTH if no winner, increase numberOfTurns & continue game

    var isLegalFunction = isLegal(startStack, endStack);

    if (isLegalFunction) {

        movePiece(startStack, endStack);

        checkForWin();

        if (checkForWin()) {
            console.log('You won in ' + numberOfTurns + ' turns!');
            process.exit();
        } else {

            numberOfTurns++;
        }

    } else {

        console.log('That is not a legal move - try again!');

    }



}

function getPrompt() {
    printStacks();
    printNumberOfTurns(numberOfTurns);
    prompt.get(['start stack', 'end stack'], function(error, result) {

        var startStack = result['start stack'];
        var endStack = result['end stack'];
        var lengthStartStack = stacks[startStack].length;

        if ((startStack != 'a' && startStack != 'b' && startStack != 'c') || (endStack != 'a' && endStack != 'b' && endStack != 'c')) {
            console.log('You must enter only a, b, c; try again');
            getPrompt();
        } else if (startStack === endStack) {
            console.log('Your stacks must be different! Try again.');
            getPrompt();
        } else if (lengthStartStack === 0) {
            console.log('Pick a start stack that has a value. Try again.');
            getPrompt();
        } else {
            towersOfHanoi(startStack, endStack);
            getPrompt();
        }

    });
}

// Tests

if (typeof describe !== 'undefined') {

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
            }
            assert.equal(checkForWin(), true);
            stacks = {
                a: [1],
                b: [4, 3, 2],
                c: []
            }
            assert.equal(checkForWin(), false);
        });
    })
} else {

    getPrompt();

}
