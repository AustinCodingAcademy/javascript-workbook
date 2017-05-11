// 'use strict';
//
// //const assert = require('assert');
// // const readline = require('readline');
// // const rl = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout
// // });
// let piece;
//
// let stacks = {
//   a: [4, 3],
//   b: [2, 1],
//   c: []
// };
//
// function printStacks() {
//   console.log("a: " + stacks.a);
//   console.log("b: " + stacks.b);
//   console.log("c: " + stacks.c);
// }
//
// function movePiece(piece, stack) {
//   // Your code here
//   stacks[stack].push(piece);
//   printStacks();
//
// }
//
// function isLegal(piece, startStack, endStack) {
//   // Your code here
//   console.log(stacks[endStack].length);
//   if(stacks[endStack].length !== 0){
//   console.log(stacks[endStack][endStack.length-1]);
//   if(stacks[endStack][endStack.length-1] > piece){
//         console.log('moving');
//         movePiece(piece, endStack);
//
//       }
//    else{
//         console.log('not moving');
//         movePiece(piece, startStack);
//
//
//       }
//  }
//   else{
//
//    movePiece(piece, endStack);
//    return true;
//     }
// }
//
//   // else (piece < stacks[endStack[stacks[endStack.length-1]]]) {
//   //   stacks.endStack.push(piece);
//   // }
// //   else{
// //     startStack.push(piece);
// //   return false;
// //   }
// // }
//
// function checkForWin() {
//   // Your code here
//
// }
//
// function towersOfHanoi(startStack, endStack) {
//   // Your code here
//
//   piece = stacks[startStack].pop();
//   isLegal(piece,startStack, endStack);
//
//   console.log(stacks[endStack]);
//
//
// }
//
// function getPrompt() {
//   printStacks();
//   // rl.question('start stack: ', (startStack) => {
//   //   rl.question('end stack: ', (endStack) => {
//   towersOfHanoi('a', 'b');
//       // getPrompt();
// }
// //   });
// // }
//
// // Tests
//
// // if (typeof describe === 'function') {
// //
// //   describe('#towersOfHanoi()', () => {
// //     it('should be able to move a block', () => {
// //       towersOfHanoi('a', 'b');
// //       assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
// //     });
// //   });
// //
// //   describe('#isLegal()', () => {
// //     it('should not allow an illegal move', () => {
// //       stacks = {
// //         a: [4, 3, 2],
// //         b: [1],
// //         c: []
// //       };
// //       assert.equal(isLegal('a', 'b'), false);
// //     });
// //     it('should allow a legal move', () => {
// //       stacks = {
// //         a: [4, 3, 2, 1],
// //         b: [],
// //         c: []
// //       };
// //       assert.equal(isLegal('a', 'c'), true);
// //     });
// //   });
// //   describe('#checkForWin()', () => {
// //     it('should detect a win', () => {
// //       stacks = { a: [], b: [4, 3, 2, 1], c: [] };
// //       assert.equal(checkForWin(), true);
// //       stacks = { a: [1], b: [4, 3, 2], c: [] };
// //       assert.equal(checkForWin(), false);
// //     });
// //   });
// // } else {
//
// getPrompt();
