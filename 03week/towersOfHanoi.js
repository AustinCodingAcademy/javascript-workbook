'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4,3,2,1],
  b: [],
  c: []
};


let a = stacks.a;
let b = stacks.b;
let c = stacks.c;

// let startStack = getPrompt();
// let endStack = getPrompt();
// let a = stacks.a;
// let b = stacks.b;
// let c = stacks.c;
//check for valid input as far as move <= 4
//Check for valid/basic move. Should be able to move to an empty stack, and only move the top block. {a:[4,3,2],b:[1],c[]}
//Should be able to move to an Non-empty stack. {a:[4,3,2],b:[1],c[]}
//Should check for an illegal move. Should not be able to stack large on small. !={a:[4,3],b:[1,2],c[]}
//Should be able to check for a win. {a:[],b:[],c[4,3,2,1]}

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
function checkValidInput() {

}

function movePiece(startStack, endStack) {
  stacks[endStack].push(stacks[startStack].pop());
}

function isLegal(startStack, endStack) {
  // Your code here not only does this need to move to an empty space but also move to a last item that is greater
    return stacks[endStack].length === 0 || stacks[startStack] < stacks[endStack];
        // redo??
    }

function checkForWin() {
    if (stacks.c.length === 4 || stacks.b.length === 4){
        return "You Have won";
    }


}
function towersOfHanoi(startStack, endStack) {
    // Your code here
    if (isLegal(startStack, endStack)) {
        movePiece(startStack, endStack)
    }
    // else if (checkForWin = true){
    //   return "You won the game!!"
    checkForWin()

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

if (typeof describe === 'function') {

    describe('#towersOfHanoi()', () => {
        it('should be able to move a block', () => {
            towersOfHanoi('a', 'b');
            assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
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
            stacks = { a: [], b: [4, 3, 2, 1], c: [] };
            assert.equal(checkForWin(), true);
            stacks = { a: [1], b: [4, 3, 2], c: [] };
            assert.equal(checkForWin(), false);
        });
    });
} else {

    getPrompt();

}
