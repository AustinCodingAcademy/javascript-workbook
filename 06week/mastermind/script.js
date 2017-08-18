'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let letters = ['A', 'B', 'C', 'D']; // dictate how hard you want it to be
  let possibleAttempts = Number(prompt(`How many tries would you like?`)); // dictates how many attempts allowed
  createBoard();
  playGame();

  function playGame() {
    let solution = '';
    let tries = 0;
    generateSolution();

    // check game logic when user hits submit
    document.querySelector('#submit').addEventListener('click', mastermind);

    // reset the board
    document.querySelector('#tryAgain').addEventListener('click', resetBoard);

    function mastermind() {
      // debugger;
      let guess = document.querySelector('#user_guess').value.toUpperCase();
      console.log(`${tries} user tries`);

      function generateHint() {
        let sol = solution.split('');
        let redCount = 0;
        let whiteCount = 0;

        for (var i = 0; i < solution.length; i++) {
          var solIndex = sol.indexOf(guess[i]);
          if (sol[i] === guess[i]) {
            redCount++;
            sol[i] = null;
          } else if (solIndex !== -1) {
            whiteCount++;
          }
        }

        return `${redCount}-${whiteCount}`;
      }

      if (guess.length != solution.length) {
        alert(`Please enter ${letters.length} characters`);
        return;
      }

      let hint = generateHint();

      document.querySelector('.row' + [tries]).innerHTML = `${guess} - ${hint}`;

      tries++;

      document.querySelector('#user_guess').value = '';

      // check win
      if (hint === '4-0') {
        document.querySelector('#instruction').style.display = 'none';
        document.querySelector('#outcome').style.display = 'block';
        document.querySelector('#announce').innerHTML = `YOU WIN!`;
      }

      if (tries === possibleAttempts) {
        document.querySelector('#instruction').style.display = 'none';
        document.querySelector('#outcome').style.display = 'block';
      }
    }

    function resetBoard() {
      tries = 0;
      document.querySelector('#instruction').style.display = 'flex';
      document.querySelector('#outcome').style.display = 'none';
      document.querySelector('#user_guess').value = '';
      for (let i = 0; i < possibleAttempts; i++) {
        document.querySelector('.row' + [i]).innerHTML = '';
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

    let main = document.createElement('div');
    main.setAttribute('class', 'main');
    cont.appendChild(main);

    // create instruction
    let instruc = document.createElement('div');
    instruc.setAttribute('class', 'instruction');
    instruc.id = 'instruction';
    instruc.innerHTML = `<p>Combinations based on the following letters:</p><h2>${letters.join(' ')}</h2><p> Instructions:<br>The number on the left indicates how many letters are in the correct place while the number on the right indicates a correct letter, but incorrect placement.</p>`;

    let instrucTwo = document.createElement('div');
    instrucTwo.setAttribute('class', 'instruction');
    instrucTwo.innerHTML = `<p>Enter your guess:</p>`;

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

    let outcome = document.createElement('div');
    outcome.id = 'outcome';
    outcome.setAttribute('class', 'outcome');
    outcome.style.display = 'none';

    let announce = document.createElement('h2');
    announce.id = 'announce';
    announce.innerHTML = 'GAME OVER';
    outcome.appendChild(announce);

    let buttonTwo = document.createElement('button');
    buttonTwo.innerHTML = 'PLAY AGAIN';
    buttonTwo.id = 'tryAgain';
    outcome.appendChild(buttonTwo);

    instrucTwo.appendChild(f);
    instrucTwo.appendChild(button);
    main.appendChild(instruc);
    instruc.appendChild(instrucTwo);
    main.appendChild(outcome);

    // create board
    let board = document.createElement('div');
    board.setAttribute('class', 'board');

    for (let i = 0; i < possibleAttempts; i++) {
      let guessRow = document.createElement('div');
      guessRow.setAttribute('class', 'guess row' + [i]);
      board.appendChild(guessRow);
    }

    cont.appendChild(board);
    cont.appendChild(board);
  }
});
