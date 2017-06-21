'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const board = [];
  let solution = 'abcd';
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// function below randomly generates solution string
  function generateSolution() {
    for (let i = 0; i < 4; i++) {
      const randomIndex = getRandomInt(0, letters.length);
      solution += letters[randomIndex];
    }
  }
// function below generates random numbers for generate solutions
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function generateHint(guess) {
    // Splitting a string on an array, when there is nothing there. Split by nothing. ("")

    // var solution = "abcd"
    // var guess = "bace"
    let redHint = 0 //I will need to define the red and white pegs at some point
    let whiteHint = 0

    let splitSol = solution.split('')
    let splitGuess = guess.split('')

    for (let i = 0; i < 4; i++) {
      if (splitSol[i] === splitGuess[i])
        redHint++;


      // Do I need to call solution.split here and guess.split, after splitting them?

      // if (splitSol.includes(splitGuess[i]))
      //   whiteHint++;

      let found = splitSol.indexOf(splitGuess[i]);
      // How do I make i null, how do I continue to cycle through?
      if (found > -1) {
        splitSol[found] = null;
        whiteHint++;
      }
    }

    whiteHint = whiteHint - redHint;

    console.log('redHint', redHint)
    console.log('whiteHint', whiteHint)
    return (`${redHint}-${whiteHint}`)
  }


  function mastermind(guess) {
    solution = 'abcd'; // uncomment this when developing
    // If it is a total win, say that.
    if (solution === guess) {
      // console.log("You guessed it!");
      return ("You guessed it!");
    } else {

      return `${guess}${generateHint(solution, guess)}`;
    }
  }

  //   board.push(guess+ " " + generateHint(guess))
  // }

document.querySelector('button').onClick = function() {
  let guess = document.querySelector('#guess').value.toLowerCase();
  let newDiv = document.createElement('div');
  newDiv.innerHTML = mastermind(guess);
  document.querySelector('#guess').value = "";
  console.log(board);
  document.querySelector('#board').appendChild(newDiv);
  }
})
