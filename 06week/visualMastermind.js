'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let solution = '';
  const board = [];
  generateSolution();


  function getRandomInt(min, max) { //function that generates random number for generateSolution to use as index reference
    return Math.floor(Math.random() * (max - min)) + min;

  }

  function generateSolution() { //function to randomely generate solution string
    for (let i = 0; i < 4; i++) { //starting an iterator to run through the length of the string we are building
      const randomIndex = getRandomInt(0, letters.length); //setting const to hold the index returned from the getRandomInt function after being passed 0 as min and letters.length as max
      solution += letters[randomIndex]; //putting the letters randomely generated into the previously empty solution string
      //gets a random number index and puts whats there inside solution variable
    }
  }


  function generateHint(solution, guess) { //function that will take the guess from the user and test it against solution to return clues to the user
    let solutionArr = solution.split(''); //takes solution string and converts to array
    let guessArr = guess.split(''); //takes guess string and converts to array
    let red = 0; //sets 'red peg' variable beginning at 0
    let white = 0; //sets 'white peg' variable beginning at 0
    for (var i = 0; i < 4; i++) { //starts iterator
      if (solutionArr[i] === guessArr[i]) { //looking for exact matches between both character and index
        red++; //if exact match is found red is increased by one for each that is found
        solutionArr[i] = null;
      }
    }
    for (var j = 0; j < 4; j++) {
      let match = solutionArr.indexOf(guessArr[j]); //sets var match for when there are matches of solution array characters inside guess array
      if (match > -1) { //if the match as defined above exists at all inside the guess array (not index specific)
        white++; //for each instance of a match(regardless of index) white is increased by one
        solutionArr[match] = null; //this strikes characters that have already been matched so they aren't counted multiple times
      }
    }
    return (red + '-' + white); //returning results of generateHint as two values combined by '-'
  }




  function mastermind(guess) { //function that takes guess from user and tests it to see if it is a winning match
    if (guess === solution) { //if they match in every way

      return ('You guessed it!'); //user wins and return out
    } else {

      return `${guess} ${generateHint(solution, guess)}`; //adding current guess(which is obvi not a winner) and the result of generateHint to the board letting user see the progression of the game and hints

    }
  }
  document.querySelector('button').onclick = function() { //function on button for when clicked
    let guess = document.querySelector('#guess').value.toLowerCase(); //converting entered text to lower case
    let newDiv = document.createElement('div'); //new divs to hold guesses
    newDiv.innerHTML = mastermind(guess); //pushing guesses into new divs
    document.querySelector('#guess').value = ""; //resetting guess to be able to check the next one
    document.querySelector('#board').appendChild(newDiv) //adding div with last guess to the board div
  }
})
