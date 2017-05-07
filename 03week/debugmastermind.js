'use strict';

// const assert = require('assert');
// const colors = require('colors/safe');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
let guess = ['a','b', 'c', 'c'];
let board = [];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let leg = letters.length;
let solution = ['a','d','d','c'];
// solution = generateSolution();

// arrsolution = solution.split('');

// function getRandomInt(min, max) {
//   return (Math.floor(Math.random() * (max - min)) + min);
// let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// let leg = letters.length;

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}


function generateSolution(){
  let sol = [];
  for(let i = 0; i < 4; i++){
    sol.push(letters[getRandomInt(0, leg)]);
    // console.log(solution);
  }
  return sol;
}


function getRandomInt(min, max) {
  return (Math.floor(Math.random() * (max - min)) + min);
}

function dupesCount(arr){
  let dBoard = [];
  console.log(arr.length);
  for(let i = 0; i < arr.length; i ++){
    console.log(arr[i]);
    for(let j = i + 1; j < arr.length; j ++){
      console.log(arr[i], arr[j]);
      if(guess[i] === arr[j]){

        dBoard.push(arr[i]);
        console.log("yup!"+ board);
        return dBoard;
      }
    }
  }
}

function generateHint(guess, solution) {
  let dupes = dupesCount(guess);
  board = [];
 let exact = 0;
 let close = 0;
 //dupesCount();
  for(let letter in guess){
    if(guess[letter] === solution[letter]){
      console.log(exact +=1);
      board.push("~colorRED~");
      }
      else if (solution.includes(guess[letter]) && !dupes.includes(guess[letter])) {
        close +=1;
         console.log('exact '+ exact +'-'+close + ' close ');
      }

    }

}
// if(exact === 4){
//   console.log('You guessed it!');
//   return true;
// }
//console.log(guess.join('|'), close + '-' + exact + printBoard());

    // if(guess[letter] === solution[letter]){
    //   exact ++;
    //   }
      // else if (solution.includes(letter)) {
      //   close ++;
      //
      // }
//    }
// to check for repeats ==results = arr.filter(function(elem, pos) { return arr.indexOf(elem) == pos; })
  // console.log(close +'-'+ exact);
// if
  //   // for(let letter in guess){
  //   //   if(solution.includes(letter){
  //   //     close ++;
  //   //     console.log(close);
  //
  //     }
  //   }
  //   console.log(close + '-' + exact);

//take the input and split into array & generate a solution
function mastermind(guess) {
  // solution = generateSolution();
  guess = guess.split('');
  console.log(solution);// your code here
  generateHint(guess, solution);
}


function getPrompt() {

  // rl.question('guess: ', (guess) => {
  //   console.log( mastermind(guess) );
    // printBoard();
    // getPrompt();
  // });
}

// Tests

// if (typeof describe === 'function') {
//
//   describe('#mastermind()', () => {
//     it('should register a guess and generate hints', () => {
//       solution = 'abcd';
//       mastermind('aabb');
//       assert.equal(board.length, 1);
//     });
//     it('should be able to detect a win', () => {
//       assert.equal(mastermind(solution), 'You guessed it!');
//     });
//   });
//
//   describe('#generateHint()', () => {
//     it('should generate hints', () => {
//       assert.equal(generateHint('abcd', 'abdc'), '2-2');
//     });
//     it('should generate hints if solution has duplicates', () => {
//       assert.equal(generateHint('abcd', 'aabb'), '1-1');
//     });
//
//   });
//
// } else {
//
//   // generateSolution();
//   getPrompt();
// }
