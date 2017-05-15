'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const board = [];
const solution = 'abcd';
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guessArr, solutionIndex) {
  return /*guessArr + solutionIndex,*/ 'HINT'
  'abdc', '2-2';
  // your code here
}

function mastermind(guess) {
  let guessArr = guess.split(""); //taking guess from user and turning it into an array
  let solutionArr = solution.split(""); //taking solution string and turning it into an array
  let fullArr = solutionArr.concat(guessArr); //combining two arrays we just created from guess and solution into one array
  // let match = {}; //setting an empty string to hold any found matches..(this may be incorrect look into this line)
  for (var i = 0; i < fullArr.length; i++) {
    if (i === solutionArr[i])
      console.log('kerere');
  } //starting an iterator to cycle through the full array (guess array + solution array) this may be wrong in the sense that it amy be easier to compare the arrays seperately instead of combining them into one






  //  var matchLetter = fullArr[i]; //this is from stack overflow and works well, but i dont fully understand it yet--seems to be setting a var matchLetter to be the index in the full array where the match is taking place
  //  match[matchLetter] = match[matchLetter] ? match[matchLetter] + 1 : 1; //see line above these two lines needs to be understood better
  //regarding two above lines..matchLetter currently only returning 'c' not sure why and fullArr[i] is returning undefined...something is wrong here

  //  var targetIndex = solutionArr.indexOf(matchLetter); //setting a var to equal the index of the matched letter within the solution array
  //  var guessStr = guessArr.join(''); //taking guess array created above and turning it back into a string--this may be unecessary as guess was originally a string to beign with




  var realMatch = solutionArr.includes(guessArr); //checking if the solution array contains the matchLetter. it is currently returning true as long as the guess doesnt contain any letters that dont appear in the solution.






  //cont...if the guess contains even one letter that isnt in solution false is returned there is a problem here with exclusivity.. may need more forgiving comparing function than '.includes()'
  //  var matchKey = fullArr.indexOf(matchLetter); //should be index of matchLetter within combinefd array(guess + solution). I think this is working correctly based on console.log(matchKey)
  //var solutionStr = solutionArr.join(guessArr); //joning guessarray and solution array into one string, i think this is completely unnecessary and not even being used currently
  //var count = (guessStr.match(solutionStr) || [].length) //setting var to try and hold the current tally of hints ie. how many hints in current guess. currently only returning '0'
  //count may need to change 'solutionarr' to 'solutionstr'...also somewhere here needs to be using a 'g' flag for global matches in these strings
  //also solutionStr is returning a bunch of nonsense currently this is def a problem
  if (realMatch === true) { //here down is pretty self explanitory --just trying to log one thing or the other depending on if a true or false is returned from conditional statement.
    console.log('100', match, guessStr + ' - 0'); //things here may need to be returned instead of just console.logged. not sure if i need to capture values here for 'generateHint()'
  } else {
    console.log('gafef' + ' - 0');
  }
  if (guess === solution) { //i suspect this if statment could be in a better place inside this function. as it is the simplest and if its triggered no other code even needs to run
    return ('You guessed it!'); //this is however working where it is just may be better somewhere else.?.?.?
  }
};



function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log(mastermind(guess));
    generateHint();
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
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

} else {

  //  generateSolution();
  getPrompt();
}
