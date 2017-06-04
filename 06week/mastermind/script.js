'use strict';
//the dom holds things for you, less code than node
document.addEventListener('DOMContentLoaded', () => { //this ensures that HTML -- essentially DOM content is completely loaded before javascript runs
  let solution = 'abcd'; //assigns a solution
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  document.querySelector('button').onclick = function() { //an event listener that does the following code below upon being clicked
    let div = document.createElement('div') //creates a div, sets it equal to "div" for semantic purposes
    let guess = document.querySelector('input').value; //let guess be whatever you type into the input box
    if (guess === solution) {  //checking for the win
      div.innerText = ("You Won!"); //if you win, it will tell you
    } else {
      div.innerText = (guess + " " + generateHint(solution, guess)); //if you don't win, it'll tell show the guess and the red-white hint beside it.  Will be appended to the div upon each click
    }

    document.querySelector('#board').appendChild(div)
  }

});




// function mastermind(solution, guess) {
//   if (guess === solution) {
//    document.getElementById('hint').innerText(guess + "You guessed it!");
// } else {
//   document.getElementById('hint').innerText(guess + generateHint());
//   }
// }



function generateHint(solution, guess) {

  let splitSolution = solution.split("")  //strings need to be split into arrays for comparison
  let splitGuess = guess.split("")

  var red = 0; //counters set at 0
  var white = 0;

  for(var i = 0; i < 4; i++) {  //checks for the "reds"
    if (splitGuess[i] === splitSolution[i]) {
      red++
    }
  }

  for(var i = 0; i < splitSolution.length; i++) { //checks for the whites
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
