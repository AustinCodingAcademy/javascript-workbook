'use strict';
document.addEventListener('DOMContentLoaded', () => {

  const board = [];
  let solutionString = '';
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  function generateSolution() {
    for (let i = 0; i < 4; i++) {
      const randomIndex = getRandomInt(0, letters.length);
      solutionString += letters[randomIndex];
    }
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // Takes a string and returns an object for easier indexing
  let objectify = function(string) {
    let tempObj = {};
    let tempAry = string.split('');
    for (let pos in tempAry) {
      if (!tempObj[tempAry[pos]]) {
        tempObj[tempAry[pos]] = [];
      }
      tempObj[tempAry[pos]].push(pos);
    }
    return tempObj;
  }

  // Generates hints based on input strings
  // Uses objectify() to compare objects for easy indexing of array values
  function generateHint(solutionString, guessString) {
    const solution = objectify(solutionString);
    const guess = objectify(guessString);
    let exact = 0;
    let almost = 0;
    for (let letter in guess) {
      if (`${letter}` in solution) {
        let shorter = (guess[letter].length<solution[letter].length?guess[letter]:solution[letter]);
        let longer = (guess[letter].length<solution[letter].length?solution[letter]:guess[letter]);
        for (let pos in shorter) {
          if (longer.includes(shorter[pos])) {
            exact++;
          } else {
            almost++;
          }
        }
      }
    }
    return `${exact}-${almost}`;
  }

  // Main function
  // Takes string, returns string
  function mastermind(guessString) {
    if (guessString === solutionString) {
      return 'You guessed it!';
    } else {
      return `${guessString} ${generateHint(solutionString, guessString)}`;
    }
  }

  // randomize solution
  generateSolution();
  // onclick fucntion for the submit button
  // creates and appends new div containing the guess and the hints
  document.getElementById('submit').onclick = function() {
    let guess = document.getElementById('guess').value.toLowerCase();
    let tempDiv = document.createElement('div');
    tempDiv.innerHTML = mastermind(guess);
    document.getElementById('board').appendChild(tempDiv);
    document.getElementById('guess').value = "";
  }
});
