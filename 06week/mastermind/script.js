'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').onclick = function () {
    let guess = document.querySelector('input').value;
    document.querySelector('input').value = '';
    let solution = 'abcd'
    let div = document.createElement('div');
    div.innerText = guess + ' ' + generateHint(solution,guess) +  ' ' + mastermind(guess);
    document.querySelector('#board').appendChild(div);
    function generateHint(solution,guess) {
      let rightSpot = 0;
      let rightLetter = 0;
      let hint = [];

      for (let i=0; i<solution.length; i++) {
        if (guess.includes(solution[i])) {
          if(guess[i] === solution[i]) {
            rightSpot++;
          } else {
            rightLetter++;
          }
        }
      }

      hint.push(rightSpot,rightLetter);
      return hint.join('-');
    }

    function mastermind(guess) {

      if (solution === guess) {
        return 'You guessed it!';
      } else {
        return "Try again!";
      }
    }
  };
});
