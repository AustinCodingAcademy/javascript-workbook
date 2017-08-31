'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  const MAXGUESSES = 10;
  const boardColors = ['red', 'blue', 'green', 'white', 'yellow', 'purple', 'orange', 'black'];
  let turn = 0;
  // let guess = 0;

  function guess() {
    this.pegs = [];
    this.hint = '';
  }

  let board = {
    code: [],
    guesses: [],
    createCode: function() {
      for (let i = 0; i < 4; i++) {
        const randomIndex = getRandomInt(0, boardColors.length);
        this.code.push(randomIndex);
      }
      /**** COMMENT OUT FOR GAME ***/
      this.showAnswer();
      return true;

      function getRandomInt(min, max)  {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    },  // createCode() method

    showAnswer: function() {
      let ansPegs = document.getElementById('answerRow').childNodes;
      for (let i=0; i<ansPegs.length-1; i++) {
        ansPegs[i].className = `peg ${boardColors[this.code[i]]}`;
      }
    },  // showAnswer() method

    populateChoice: function(selectedColor) {
      // console.log(selectedColor);
      if (this['guesses'].length) {  // length of guesses array.
        const currentGuess = this['guesses'][this['guesses'].length - 1];  // find the last (active) one
        if (currentGuess.pegs.length === 4) {  // if current guess alreay has 4 pegs...
          console.log('Please submit your answer or clear to re-enter');
        } else {  // push the peg into current guess.
          currentGuess.pegs.push(selectedColor);
        }
      } else {  // guesses array was 0, this is a new game, create our guess object.
        const currentGuess = new guess();
        currentGuess.pegs.push(selectedColor);  // push our peg onto current guess
        this['guesses'].push(currentGuess);  // push our new current guess object onto guesses array.
      }
      // console.log(this['guesses']);
      this.displayRow();
    },  // populateChoice()

    // displayRow handles 3 functions
    //   a) it populates a peg.
    //   b) handles clearing out a row.
    //   c) Displays the hint
    // displayRow is generic and always fills in the entire row for the current Guess
    // There is some slight inefficiencies since I am repopulating the colors
    // for previous pegs.
    displayRow: function() { //, col = null, pegColor = null) {
      // console.log(row, col, pegColor);
      const row = this['guesses'].length-1;
      console.log(row);
      const guessRows = document.getElementById('boardTbl').childNodes;
      console.log(guessRows[row]);
      const guessCols = guessRows[row].childNodes;
      console.log(guessCols);
      console.log(this['guesses'][row]);
      for (let i=0; i<5; i++) {
        if (i === 4) {
          console.log('if i=4');
          guessCols[i].textContent = this['guesses'][row].hint;
        } else if (this['guesses'][row].pegs[i]) {
          console.log('setting peg');
          guessCols[i].className = `peg ${boardColors[this['guesses'][row].pegs[i]]}`;
        } else {
          console.log('clearing peg');
          guessCols[i].className = `peg`;
        }
      }
    },  // displayRow()
    // Passing in strings to GenerateHint.  First off, I lifted this code
    // from my first version of the game and it used strings as input, then
    // converted those strings into an array.
    // Second.  This is my way of creating a new temp array.
    // Since passing arrays are by reference, when I  copied my
    // my guesses and code array and manipulated those copies
    // it was affecting the original array.
    generateHint: function(answer, guess) {
      console.log('In generate hint');
      // Initializing...
      let exactMatch = 0;
      let correctPeg = 0;
      let matchIndex = -1;
      // creating arrays out of the strings.
      let solutionArr = answer.split('');
      let myGuessArr = guess.split('');
      console.log(solutionArr);
      console.log(myGuessArr);
      // This piece of code tests for exact match
      myGuessArr.forEach((peg, index) => {
        if (peg === solutionArr[index]) {
          exactMatch++;
          // clear out value.  This sets us up to look for correct peg test later.  These won't be considered.
          solutionArr[index] = null;
          myGuessArr[index] = null;
        }
      });
      console.log('after match, before correct peg');
      console.log(solutionArr);
      console.log(myGuessArr);
