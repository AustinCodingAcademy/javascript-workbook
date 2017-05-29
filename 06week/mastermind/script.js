'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let solution = 'abcd';
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  document.querySelector('button').onclick = function() {
    let div = document.createElement('div')
    let guess = document.querySelector('input').value;
    if (guess === solution) {
      div.innerText = ("You Won!");
    } else {
      div.innerText = (guess + " " + generateHint(solution, guess));
    }

    document.querySelector('#board').appendChild(div)
  }
  // checkForWin();
});




// function mastermind(solution, guess) {
//   if (guess === solution) {
//    document.getElementById('hint').innerText(guess + "You guessed it!");
// } else {
//   document.getElementById('hint').innerText(guess + generateHint());
//   }
// }



function generateHint(solution, guess) {

  let splitSolution = solution.split("")
  let splitGuess = guess.split("")

  var red = 0;
  var white = 0;

  for(var i = 0; i < 4; i++) {
    if (splitGuess[i] === splitSolution[i]) {
      red++
    }
  }
  
  for(var i = 0; i < splitSolution.length; i++) {
    var ispresent = splitGuess.indexOf(splitSolution[i]);
    if (ispresent > -1) {
      white++
      splitGuess[ispresent] = null
    }
  }

// accounting for duplicates
  white -= red

//returns the hint
  return(red + '-' + white);
}
