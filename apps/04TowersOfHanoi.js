'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

var stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
};

var setWin = {
    a: [1],
    b: [],
    c: [4, 3, 2]
};

function resetStacks() {
    var stacksStartState = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
    };
    stacks = stacksStartState;
}

var numMoves = 0;

function printStacks() {
    if (numMoves === 1) {
        console.log(numMoves + " move so far");
    } else {
        console.log(numMoves + " moves so far");
    }
    console.log("a: " + stacks.a);
    console.log("b: " + stacks.b);
    console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
    var pop = stacks[startStack].pop();
    stacks[endStack].push(pop);
    numMoves++;
}

// make this work
function isLegal(startStack, endStack) {
    var startStackArray = stacks[startStack];
    var endStackArray = stacks[endStack];
    if (startStackArray === undefined || endStackArray === undefined) {
        console.log('whoops, try again, this time enter a valid input (a, b, c):');
        return false;
    }
    if (startStackArray.length === 0) {
        return false;
    }
    if (endStackArray.length === 0) {
        return true;
    }
    if (startStackArray.slice(-1) <= endStackArray.slice(-1)) {
        return true;
    } else {
        console.log("Whoops, try again. You cannot move a bigger piece onto a smaller piece.");
        return false;
    }
}

function checkForWin() {
    var bStack = stacks.b;
    var cStack = stacks.c;
    if ((bStack.length >= 4 || cStack.length >= 4)) {
        console.log('you won!');
        console.log("You got it in " + numMoves + " moves. Think you can do better?");
        resetStacks();
        playAgain();
        return true;
    } else {
        return false;
    }
}

function towersOfHanoi(startStack, endStack) {
    if (isLegal(startStack, endStack)) {
        movePiece(startStack, endStack);
        if (checkForWin()) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function playAgain() {
    prompt.get(['y / n'], function(error, result) {
        var answer = result['y / n'];
        switch (answer) {
            case 'y':
            case 'yes':
                getPrompt();
                return true;
                break;
            case 'n':
            case 'no':
                console.log('Thanks for playing!');
                process.exit();
                break;
            default:
                console.log('please enter a valid input');
                playAgain();
        }
    });
    return false;
}


function getPrompt() {
    printStacks();
    prompt.get(['start stack', 'end stack'], function(error, result) {
        var start = result['start stack'].toLowerCase();
        var end = result['end stack'].toLowerCase();
        if ((start || end) === 'setwin') {
            stacks = setWin;
        }
        if (!(towersOfHanoi(start, end))) {
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


//the graveyard
//---------------------
//
// console.log(stacks[i]);
// console.log(i);
// console.log(startStack);
// console.log(endStack);
// console.log(isDefined);
//     if (startStack.slice(-1) < endStack.slice(-1))  {
//       var isDefined;
//       for (var i = 0; i < stacks.length; i++) {
//         isDefined = stacks[i];
//       }
//           if (isDefined === undefined) {
//           return true;
//         }
//           else {
//           return false;
//           }
//     }
//     else {
//       return true;
//     }

//      var lastOfStart = startStack.slice(-1),
//          lastOfEnd = endStack.slice(-1);
//
//     for (var i = 0; i < stacks.length; i++) {
//       return stacks[i];
//     }
// console.log(stacks[i]);
// console.log(startStack.slice(-1));
// if (endStack.length === 0) {
//   return true;
// }
// else if (stacks[startStack].slice(-1) < stacks[endStack].slice(-1))  {
//   console.log("Whoops, try again. You cannot move a bigger piece onto a smaller piece.");
//   return false;
// }
// else {
//   return true;
// }

// if (stacks[startStack] === 'setwin'  ||  stacks[endStack] === 'setwin') {
//     if (stacks[startStack] === undefined  ||  stacks[endStack] === undefined) {
//       console.log('whoops, try again, this time enter a valid input (a, b, c):');
//       return false;
//     }
//     else {
//     stacks = setWin;
//     getPrompt();
//   }
// }
// if (stacks[startStack][stacks[startStack].length - 1] <= stacks[endStack][stacks[endStack].length - 1])  {
//   return true;
// }

// if (result['start stack'] === 'set win') {
//   stacks = setWin;
//   getPrompt();
// }
// else {
//   isLegal(result['start stack'], result['end stack']);
//   towersOfHanoi(result['start stack'], result['end stack']);
//   getPrompt();
// }

// switch (result['start stack'], result['end stack']) {
//   case 'a':
//   case 'b':
//   case 'c':
//     towersOfHanoi(result['start stack'], result['end stack']);
//     break;
//   default: console.log('whoops. try again, this time using a valid input');
//            getPrompt();
// }
