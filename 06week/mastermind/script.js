'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const board = [];
  let solution = '';
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  generateSolution();

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function generateSolution() {
    for (let i = 0; i < 4; i++) {
      const randomIndex = getRandomInt(0, letters.length);
      solution += letters[randomIndex];
    }
  }

  // most code from mastermind node

  function generateHint(solution, guess) {
    // array of letters (from solution + guess) turns into a string to compare
    let solutionStr = solution.split('');
    let guessStr = guess.split('');
    // determined variables for correct letters/index on the solution starting at 0
    let correctLetters = 0;
    let correctPositions = 0;
    // used a loop to iterate through both strings solution+guess and compare
    // increments of 1 to count how many are correct letter and index
    for (var i = 0; i < 4; i++) {
      if (guessStr[i] === solutionStr[i]) {
        correctPositions++;
        solutionStr[i] = null;
      }
    }
    // used a loop to iterate through both strings comparing letters
    // increments of 1 to count how many are correct letter
    for (var j = 0; j < 4; j++) {
      let letterIndex = solutionStr.indexOf(guessStr[j]);
      if (letterIndex > -1) {
        correctLetters++;
        solutionStr[letterIndex] = null;
      }
    }
    // Hint is composed of correct letters and index + correct letters
    return (correctPositions + '-' + correctLetters);
  }

  // changed mastermind() since we are not pushing to the board on node, but the DOM

  function mastermind(guess) {
    // Will check for win if it is guessed correctly
    // Otherwise, it will create hints depending on # of correct letters/index
    // The guesses continue to be added to the board with push
    if (solution === guess) {
      return 'You guessed it!';
    } else {
      return `${guess} ${generateHint(solution, guess)}`;
    }
  }

  // when we click submit, add the event in order to take the guess and push it
  // to the dom by creating a new element ('div')
  // we reset the value of guess at the end to keep pushing guesses
  document.querySelector('#submit').onclick = function() {
    let guess = document.querySelector('#guess').value.toLowerCase();
    let newDiv = document.createElement('div');
    newDiv.innerHTML = mastermind(guess);
    document.querySelector('#guess').value = "";
    console.log(board);
    document.querySelector('#board').appendChild(newDiv);
  }
})
