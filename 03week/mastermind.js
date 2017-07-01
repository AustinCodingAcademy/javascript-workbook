'use strict';

const assert = require('assert');

// const colors = require('colors/safe');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let leg = letters.length;
let solution;
solution = generateSolution();
let exact;
let close;
function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

//random solution generator
function generateSolution(){
  let sol = [];
  for(let i = 0; i < 4; i++){
    sol.push(letters[getRandomInt(0, leg)]);
  }
  return sol;
}


function getRandomInt(min, max) {
  return (Math.floor(Math.random() * (max - min)) + min);
}
//hint method: guess/solution comparison, win check, calling the dupesCount

function generateHint(guess, solution) {
  let sDupes = dupesCount(solution);
  let gDupes = dupesCount(guess);
  board = [];
  let exact = 0;
  let close = 0;
  for(let letter in guess){
    if(guess[letter] === solution[letter]){
      exact +=1;
      board.push(guess[letter]);
    }
    else if (solution.includes(guess[letter])) {
      close +=1;
    }
  }
//going to have to make it capaable of multiple dupes.
  if(gDupes.length){
    if(gDupes[0] !== sDupes[0]){
      close --;
    }
    close --;
  }

  if(exact === 4){
    printBoard();
    return 'You guessed it!';

    printBoard();
    return 'You guessed it!';


  }
  else{
    return (exact+'-'+close);
  }}



//regex dupeCount
// function dupeCount(ar){
//    try{ return ar.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length; }
//    catch(e){ return 0; }

   //dupesCount works without regex!
function dupesCount(arr){
  let dBoard = [];
  for(let i = 0; i < arr.length; i ++){
    for(let j = i + 1; j < arr.length; j ++){
      if(arr[i] === arr[j]){
        dBoard.push(arr[i]);
        return dBoard;
      }
    }
  }
  return dBoard;
}


//take the input and split into array & generate a solution to be compared
function mastermind(guess) {
  guess = guess.split('');
  console.log(generateHint);
  return generateHint(guess, solution);

  // solution = 'abcd'; // uncomment this when developing
  // your code here
}


function getPrompt() {

  rl.question('guess: ', (guess) => {
    console.log( mastermind(guess) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });
}
else {

  getPrompt();
}
