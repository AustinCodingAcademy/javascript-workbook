'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// creates an multi-dimensional array that creates stacks
let stacks = {
a: [4, 3, 2, 1],
b: [],
c: []
};
// prints stacks in terminal
function printStacks() {
console.log("a: " + stacks.a);
console.log("b: " + stacks.b);
console.log("c: " + stacks.c);
}
// function begins to movie piece within the stacks
function movePiece(begin, end) { 
stacks[end].push(stacks[begin].pop())

}
// this function decides if the moving of the piece is allowed
function isLegal(start, end) {

let index = stacks[start].length - 1
let indexTwo = stacks[end].length - 1
if(stacks[start][index] < stacks[end][indexTwo] || stacks[end][indexTwo] === undefined){
return true
} else {
return false
}
}
// this function checks for a win within the stacks to verify if the pieces have moved from one side to the other
function checkForWin() {
// Your code here
if(stacks["b"].length === 4 || stacks['c'].length === 4){
console.log('you win')
return true
} else {
return false
}
}

function towersOfHanoi(startStack, endStack) {
console.log(`my startStack is ${startStack}`)
console.log(`endStack is ${endStack}`)
console.log("testing")
if(isLegal(startStack, endStack)){
movePiece(startStack, endStack)
}
}

function getPrompt() {
printStacks();
rl.question('start stack: ', (startStack) => {
rl.question('end stack: ', (endStack) => {
console.log("get prompt")
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
