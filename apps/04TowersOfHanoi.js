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

var numMoves = 0

function printStacks() {
    if (numMoves === 1) {
      console.log(numMoves + " move so far");
    }
    else {
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
    if (stacks[startStack] === undefined  ||  stacks[endStack] === undefined) {
      if (stacks[startStack] === 'setwin'  ||  stacks[endStack] === 'setwin') {
        stacks = setWin;
        return true;
      }
      else {
        console.log('whoops, try again, this time enter a valid input (a, b, c):');
        return false;
      }
    }
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
    if (stacks[startStack].length === 0) {
      return false;
    }

    if (stacks[endStack].length === 0) {
      return true;
    }
    if (stacks[startStack].slice(-1) <= stacks[endStack].slice(-1)) {
      return true;
    }
    // if (stacks[startStack][stacks[startStack].length - 1] <= stacks[endStack][stacks[endStack].length - 1])  {
    //   return true;
    // }
    else {
      console.log("Whoops, try again. You cannot move a bigger piece onto a smaller piece.");
      return false;
    }
}

function checkForWin() {
  if (stacks.b.length >= 4 || stacks.c.length >= 4)
  {
    console.log('you won!');
    return true;
  }
  else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack))  {
    movePiece(startStack, endStack);
      if (checkForWin())  {
        return true;
      }
      else {
        return false;
      }

  }
  else {
    return false;
  }
}

function playAgain()  {
  if (checkForWin())  {
    console.log("You beat it in " + numMoves + " moves. Wanna try again?");
    prompt.get(['y / n'], function (error, result)  {
      switch(result['y / n:'])  {
        case 'y':
        case 'yes':
          getPrompt();
          return true;
        case 'n':
        case 'no':
          console.log('Thanks for playing!');
          process.exit();
          break;
        default:
          console.log('please enter a valid input');
      }
    });
}
return false;
}


function getPrompt() {
    printStacks();
    prompt.get(['start stack', 'end stack'], function (error, result) {
        // switch (result['start stack'], result['end stack']) {
        //   case 'a':
        //   case 'b':
        //   case 'c':
        //     towersOfHanoi(result['start stack'], result['end stack']);
        //     break;
        //   default: console.log('whoops. try again, this time using a valid input');
        //            getPrompt();
        // }
        if (!(towersOfHanoi(result['start stack'], result['end stack']))) {
        getPrompt();
        }
        // if (result['start stack'] === 'set win') {
        //   stacks = setWin;
        //   getPrompt();
        // }
        // else {
        //   isLegal(result['start stack'], result['end stack']);
        //   towersOfHanoi(result['start stack'], result['end stack']);
        //   getPrompt();
        // }

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
