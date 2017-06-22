'use strict';


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

    guess = $('#ul').children().last().text();
    return guess;
  }

  function turns(){
    if ($('#ul').children().length = 20){
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


function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}

  function generateHint(solution, guess) {

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

  }

  function checkForWin(guess) {
    //turns() makes sure that you haven't done too many turns.
    turns();
    if (rightLetterRightPlace === 4) {
      return('You guessed it!');
    } else {
      generateHint(solution, guess);
    };
  };



});
