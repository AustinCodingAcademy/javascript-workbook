'use strict';

document.addEventListener('DOMContentLoaded', () => {
  var stack = document.querySelectorAll('[data-stack]');
  var block = document.querySelectorAll('[data-block]');
  let moved = {};
  let currentColor = {};
  let currentGuess = [];
  let currentRow = 2;
  let solution = [];
  let solutionBlock = [];
  // generateSolution generates a random number solution matched with a color
  function generateSolution () {
    for (let i = 0; i < 4; i++) {
      solution += getRandomInt(1, 8);
    }
    console.log(solution);
  }

  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  generateSolution();

  document.querySelectorAll('[data-block]').forEach((dataBlock) => {
    dataBlock.addEventListener('click', (e) => {
      e.stopPropagation();
      moved = { target: e.target, size: e.target.attributes[0].value, parent: e.target.parentNode };
      console.log(parseInt(moved.parent.attributes[0].value));
      if (parseInt(moved.parent.attributes[0].value) === 1) {
        currentColor = moved.target.cloneNode(true);

      } else {
        moved.parent.removeChild(moved);
      }

    });
  });

  document.querySelectorAll('[data-stack]').forEach((dataStack) => {
    dataStack.addEventListener('click', (e) => {
      if (currentRow === parseInt(e.target.attributes[0].value)) { // if selected stack is current stack then place piece
        if(stack[currentRow - 1].children.length < 4) {
          e.target.appendChild(currentColor);
          currentColor = {};
        }
      }
    });
  });

  document.querySelector('button').addEventListener('click', (e) => {
    checkAnswer();
  });
  function getCurrentGuess() {
    for (let i = 0; i < 4; i++) {
      currentGuess += stack[currentRow - 1].children[i].attributes[0].value;
    }
  }
  function checkAnswer () {
    getCurrentGuess();
    console.log(currentGuess);
    if (currentGuess === solution) {
      let win = document.createTextNode('You Win!');
      stack[currentRow - 1].appendChild(win);
    } else {
      generateHint(currentGuess);
    }
    currentRow++;
    currentGuess = [];
    if (currentRow === 12) {
      console.log('solution display');
      displaySolution();
    }
  }

  // Generates hint: correct positions correct colors & correct colors wrong positions
  function generateHint (currentGuess) {
    let correctLetters = 0;
    let wrongPositions = 0;
    let duplicateCounter = 0;
    let correctPeg = [];
    let wrongPositionsPeg = [];

  ;

    for (let i = 0; i < 4; i++) {
      if (currentGuess[i] === solution[i]) {
        ++correctLetters;
      } else if (currentGuess[i] !== solution[i] && solution.includes(currentGuess[i])) {
        ++wrongPositions;
        console.log(wrongPositions);
        console.log(duplicateCounter);
      }
    }

    if (duplicateCounter >= correctLetters) {
      wrongPositions = (wrongPositions - duplicateCounter);
    } else {
      wrongPositions = wrongPositions - duplicateCounter;
    }
    if (correctLetters === 3) {
      --wrongPositions;
    }

    if (wrongPositions < 0) {
      wrongPositions = 0;
    }

    // B & W pegs for correct colors
    console.log(correctLetters + '-' + wrongPositions);
    let hint = document.createElement('DIV');
    hint.style.height = '25px';
    hint.style.width = '25px';
    hint.style.display = 'flex';
    hint.style.flexWrap = 'wrap';

    for (let j = 0; j < correctLetters; j++) {
      correctPeg[j] = document.createElement('DIV');
      correctPeg[j].style.height = '8px';
      correctPeg[j].style.width = '8px';
      correctPeg[j].style.margin = '2px';
      correctPeg[j].style.backgroundColor = '#000000';
      hintBox.appendChild(correctPeg[j]);
    }
    for (let k = 0; k < wrongPositions; k++) {
      wrongPositionsPeg[k] = document.createElement('DIV');
      wrongPositionsPeg[k].style.height = '8px';
      wrongPositionsPeg[k].style.width = '8px';
      wrongPositionsPeg[k].style.margin = '2px';
      wrongPositionsPeg[k].style.backgroundColor = '#FFFFFF';
      hintBox.appendChild(wrongPositionsPeg[k]);
    }
    stack[currentRow - 1].appendChild(hintBox);
  }
});
