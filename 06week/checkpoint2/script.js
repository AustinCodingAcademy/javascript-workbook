'use strict';
document.addEventListener('DOMContentLoaded', () => {


let board = [];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let leg = letters.length;
let solution;
solution = generateSolution();
console.log(solution);
let exact;
let close;
let guess;


//random solution generator
function generateSolution(){
  let sol = [];
  for(let i = 0; i < 4; i++){
    sol.push(letters[getRandomInt(0, leg)]);
  }
  return sol;
}

//random number gen for sol
function getRandomInt(min, max) {
  return (Math.floor(Math.random() * (max - min)) + min);
}

//hint method: guess/solution comparison, win check, calling the dupesCount
let generateHint = function(guess, solution) {
  let sDupes = dupesCount(solution);
  let gDupes = dupesCount(guess);
  board = [];
  let exact = 0;
  let close = 0;
  for(let letter in guess){
    if(guess[letter] === solution[letter]){
      exact +=1;
<<<<<<< HEAD
      document.getElementById('exact')appendChild('div'));
=======
      document.getElementById('exact').appendChild(document.getElementById('exact').createElement('div'));
>>>>>>> 0600251038303a76d3617b0f6a0961dc0fae5de8
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
  return 'You guessed it!';
  }
  else{
    return (exact+'-'+close);
  }
}

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

//creates a listener for when you press a key
window.onkeyup = keyup;
//listen for the enter key and get the guess into an array
function keyup(e) {
  let inputTextValue = e.target.value;
  console.log(inputTextValue);
  //listens for you to press the ENTER key, at which point your web address will change to the one you have input in the search box
  if (e.keyCode == 13) {
    guess = inputTextValue.split('');
    console.log(guess);
    generateHint(guess, solution);
  }

//take the input and split into array & generate a solution to be compared
function mastermind(guess) {

  console.log(generateHint);
  return generateHint(guess, solution);

  // solution = 'abcd'; // uncomment this when developing
  // your code here
};

}
})
