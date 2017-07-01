'use strict';
document.addEventListener('DOMContentLoaded', () => {

//vars and things
  let guessBoard = [];
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let leg = letters.length;
  let solution;
  solution = generateSolution();
  console.log(solution);
  let exact;
  let close;
  let guess;
  //thought I would need these elements to append to the corresponding divs
  let closeInd = document.createElement('div');
  let exactInd = document.createElement('div');

      //random solution generator
  function generateSolution() {
    let sol = [];
    for (let i = 0; i < 4; i++) {
      sol.push(letters[getRandomInt(0, leg)]);
    }
    return sol;
  }

      //random number gen for sol
  function getRandomInt(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
  }

      //hint method: guess/solution comparison, win check, calling the dupesCount
  let generateHint = function (guess, solution) {
    let sDupes = dupesCount(solution);
    let gDupes = dupesCount(guess);
    let board = [];
    let exact = 0;
    let close = 0;
    let oldGuess = document.createElement('div');
    for (let letter in guess) {
      if (guess[letter] === solution[letter]) {
        exact += 1;
        console.log(exact);
            // document.getElementById('exact').appendChild(exactInd);

      } else if (solution.includes(guess[letter])) {
        close += 1;
        console.log(close);

      }
    }

          //going to have to make it capaable of multiple dupes.
    if (gDupes.length) {//this will not work with two dupes in the solution that are alphabetically after two dupes in the guess...I think
      if (gDupes[0] !== sDupes[0]) {
        close--;
      }

    }
          //win check
    if (exact === 4) {
      document.getElementById('announce-game-won').innerText = 'You guessed it!';
    } else {
      document.getElementById('board').innerText += guess + '\r\n';
      document.getElementById('closedisplay').innerText = close;
      document.getElementById('exactdisplay').innerText = exact;
      document.getElementsByClassName('inguess').value = '';
    }

  }

  function dupesCount(arr) {
    let dBoard = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          dBoard.push(arr[i]);

        }
      }
    }
    return dBoard;
  }
      //reset button, I want it to be: let reset = document.getElementById('reset');
      // reset.onclick = "gameReset()"; function reference vs function call?
  document.getElementById('reset').onclick = function(e){
    document.getElementById('board').innerText = '';
    document.getElementById('closedisplay').innerText = '';
    document.getElementById('exactdisplay').innerText = '';
    document.getElementsByClassName('inguess').value = '';
  }


          //creates a listener for when you press a key
  window.onkeyup = keyup;
          //listen for the enter key and get the guess into an array
  function keyup(e) {
    let inputTextValue = e.target.value;
    console.log(inputTextValue);
            //putting guess in array to pass to #board to display previous guesses in generateHint().
    if (e.keyCode == 13) {
      guess = inputTextValue.split('');
      console.log(guess);
      generateHint(guess, solution);
      e.target.value = '';
    }
  };
})
