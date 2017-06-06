//Steps
//1. Have computer create answer
//2. Choose a guess.
//3. Get the board array to show on HTML
//4. Check for win.
//5. Limit to 10 turns

let board = [];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let solution = '';
let guess = '';
let hint = '';
var guesses = [];


$(document).ready(function(){
  generateSolution();
  console.log (solution)
  $('#button').click(function(){
    addGuess();
    hint = generateHint(solution, readGuess());
    addHint();
    clearInput();
    checkForWin();
  });

// This prints the guess on the board.

  function addGuess() {
    guess = $('#text').val();
    $('#ul').append($(`<li>${guess}</li>`));
  }
  function addHint() {
    $('#ul').append($(`<li>${hint}</li>`));
  }
  function clearInput() {
    $('#text').val('');
  }

  function readGuess(){
    //This only grabs the most recent guess.
    guess = $('#ul').children().last().text();
    return guess;
  }

  function turns(){
    if ($('#ul').children().length >= 20){
      console.log('You lose')
      return ('You lose!!!!')
    }
  }

//This creates the answer.
  function generateSolution() {
    for (let i = 0; i < 4; i++) {
      const randomIndex = getRandomInt(0, letters.length);
      solution += letters[randomIndex];
    }
    return solution;
  }

//This creates a random number for the answer.
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function generateHint(solution, guess) {
    // your code here {
    function split(string) {
      return string.split('');
    }
    let splitSolution = split(solution);
    let splitGuess = split(guess);

    let rightLetterWrongPlace = 0;
    let rightLetterRightPlace = 0;
    //
    for (let i = 0; i < splitSolution.length; i++) {
      // console.log(`solution: ${splitSolution}`)
      // console.log(`guess: ${splitGuess}`)
      if (splitSolution[i] === splitGuess[i]) {
        splitSolution[i] = null;
        // return(splitSolution);
        rightLetterRightPlace++;
      }
    }

    for (let i = 0; i< solution.length; i++ ){
      console.log(`solution: ${splitSolution}`);
      console.log(`guess: ${splitGuess}`);
      let found = splitSolution.indexOf(splitGuess[i])
      if (found > -1) {
        splitSolution[found] = null;
        rightLetterWrongPlace++;
      }
    }
    var guessString = rightLetterRightPlace + '-' +rightLetterWrongPlace;
    console.log(guessString);
    return guessString;
    // console.log(`(loop is finished)`)
    // console.log(`(Right letter, right place: ${rightLetterWrongPlace}`)
    // console.log(`(Right letter, wrong place: ${rightLetterRightPlace}`)
  }

  function checkForWin(guess) {
    turns();
    //add the hint in the format of '1-1'
    if (rightLetterRightPlace = 4) {
      return('You guessed it!');
    } else {
      generateHint(solution, guess);
    };
  };



});
