'use strict';
document.addEventListener('DOMContentLoaded', () => {


  let guessBoard = [];
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let leg = letters.length;
  let solution;
  solution = generateSolution();
  console.log(solution);
  let exact;
  let close;
  let guess;
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
        // document.getElementById('close').appendChild(closeInd);
      }
    }

    //going to have to make it capaable of multiple dupes.
    if (gDupes.length) {
      if (gDupes[0] !== sDupes[0]) {
        close--;
      }
      close--;
    }

    if (exact === 4) {
      document.getElementById('announce-game-won').innerText = 'You guessed it!';
    } else {
      document.getElementById('board').innerText += guess + '\r\n';
      document.getElementById('closeDisplay').innerText = close;
      document.getElementById('exactDisplay').innerText = exact;
      document.getElementsByClassName('inguess').value = '';
    }

  }

  function dupesCount(arr) {
    let dBoard = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
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
    //trying to get guess in array to pass to board's divs to display previous guesses.
    if (e.keyCode == 13) {
      guess = inputTextValue.split('');
      console.log(guess);
      generateHint(guess, solution);
      e.target.value = '';
      // let boardArr = document.querySelectAll('.gBoard');
      // guess.forEach(let letter => )
    }
    let reset = function () {
      document.getElementsByClassName('board').innerText = '';
      document.getElementById('closeDisplay').innerText = 'Right Letter Wrong Place';
      document.getElementById('exactDisplay').innerText = 'Right Letter Right Place';
      document.getElementsByClassName('inguess').value = '';
    }

    // function mastermind(guess) {
    //
    //   console.log(generateHint);
    //   return generateHint(guess, solution);

    // solution = 'abcd'; // uncomment this when developing
    // your code here
  };

})