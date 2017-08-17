'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  createBoard();
  playGame();

  function playGame() {
    let letters = ['A', 'B', 'C', 'D'];
    let solution = '';
    let tries = 0;
    generateSolution();

    // check game logic when user hits submit
    document.querySelector('#submit').addEventListener('click', checkWin);

    function checkWin() {
      let guess = document.querySelector('#user_guess').value.toUpperCase();
      console.log(`${guess} user guess`);

      function generateHint() {
        let redCount = 0;
        let whiteCount = 0;
        let checked = [];

        for (var i = 0; i < solution.length; i++) {
          var solutionIndex = solution.indexOf(guess[i]);
          if (solution[i] === guess[i]) {
            redCount++;
            checked.push(guess[i]);
          } else if (solutionIndex !== -1 && !isDupe(guess[i], checked)) {
            whiteCount++;
            checked.push(guess[i]);
          }
        }

        return `${redCount}-${whiteCount}`;
      }

      let hint = generateHint();

      document.querySelector('.row' + [tries]).innerHTML = hint === '4-0' ? `${solution} <br> You guessed it!` : `${guess} - ${hint}`;
      tries++;

      function isDupe(letter, checked) {
        return checked.includes(letter);
      }
    }

    function generateSolution() {
      for (let i = 0; i < 4; i++) {
        const randomIndex = getRandomInt(0, letters.length);
        solution += letters[randomIndex];
        // solution = 'ABCD'; // comment out if you want a random solution
      }
      console.log(`${solution} solution`);
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }

  function createBoard() {
    // create container
    let cont = document.createElement('div');
    cont.setAttribute('class', 'container');

    let b = document.querySelector('body');
    b.appendChild(cont);

    // create h1
    let h1 = document.createElement('h1');
    h1.innerHTML = 'MASTERMIND';

    cont.appendChild(h1);

    // create instruction
    let instruc = document.createElement('div');
    instruc.setAttribute('class', 'instruction');
    instruc.innerHTML = '<h2>ABCD</h2><p> Instructions:<br>The number on the left indicates how many letters are in the correct place while the number on the right indicates a correct letter, but incorrect place.</p><br>Enter your guess:';

    // create form for input
    let f = document.createElement('input');
    f.type = 'text';
    f.name = 'guess';
    f.id = 'user_guess';

    let button = document.createElement('button');
    button.type = 'submit';
    button.value = 'submit';
    button.innerHTML = 'SUBMIT';
    button.id = 'submit';

    cont.appendChild(instruc);
    instruc.appendChild(f);
    instruc.appendChild(button);

    // create board
    let board = document.createElement('div');
    board.setAttribute('class', 'board');

    for (let i = 0; i < 5; i++) {
      let guessRow = document.createElement('div');
      guessRow.setAttribute('class', 'guess row'+[i]);
      board.appendChild(guessRow);
    }

    cont.appendChild(board);
    cont.appendChild(board);
  }
});
