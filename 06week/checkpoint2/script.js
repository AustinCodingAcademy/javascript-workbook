'use strict';


document.addEventListener('DOMContentLoaded', () => {
  const blue = '<img src="blue.png"/>';
  const green = '<img src="green.png"/>';
  const pink = '<img src="pink.png"/>';
  const red = '<img src="red.png"/>';
  const pieces = [blue, green, pink, red];
  const old = document.querySelector('.old');
  let btn = document.querySelector('button');
  let spot = 0;
  let solution = [];
  let guess = [];
  let hint = ''

  //random creation of solution
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function generateSolution() {
    for (let i = 0; i < 4; i++) {
      const randomIndex = getRandomInt(0, pieces.length);
      solution.push(pieces[randomIndex]);
    }
  }

  generateSolution();

  //enter pieces into guess
  document.querySelectorAll('img').forEach((thisOne) => {
    thisOne.addEventListener('click', function() {
      document.querySelector(`[data-cell = "${spot}"]`).innerHTML = `<img src="${thisOne.getAttribute("src")}"/>`;
      spot = spot + 1;
      guess.push(`<img src="${thisOne.getAttribute("src")}"/>`)
    })
  })

  //generate hint of yes or almost
  function generateHint() {
    let dub = [];
    let yes = 0;
    let almost = 0;
    for (let i = 0; i < solution.length; i++) {
      //identifies correct letter and index
      if (solution[i] === guess[i]) {
        dub.push(guess[i]);
        yes++;
      }
      //identifies only correct letter
      else if (solution.includes(guess[i]) && (dub.includes(guess[i]) === false)) {
        dub.push(guess[i]);
        almost++;

      }
    }
    if (yes === 4) {
      document.getElementById('win').innerText = 'YOU WON!';
    }
    hint = `${yes} - ${almost}`;
    document.querySelector('#yes').innerText = `Correct: ${yes}`;
    document.querySelector('#almost').innerText = `Almost: ${almost}`;
  }

  //check guess
  btn.addEventListener('click', function() {
    generateHint();
    guess = [];
    spot = 0;
    pushGuess();
  })

  //move guess and hint to bottom
  function pushGuess() {
    let newSpot = 4;
    document.querySelectorAll('.guess').forEach((g) => {
      let itm = g.innerHTML;
      document.querySelector(`[data-cell = "${newSpot}"]`).innerHTML = itm;
      newSpot = newSpot + 1;
      g.innerHTML = null;
    })
    let div = document.getElementById('jabba'),
      clone = div.cloneNode(true);
    clone.id = "old";
    old.appendChild(clone)
  }
})
