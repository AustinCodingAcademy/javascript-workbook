'use strict';

document.addEventListener('DOMContentLoaded', () => { //makes sure that the HTML loads before the script
  let solution = 'abcd'; //this is the solution that I have set
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  document.querySelector('button').onclick = function() {
    let div = document.createElement('div') 
    let guess = document.querySelector('input').value;
    if (guess === solution) {  //checks for win condition
      div.innerText = ("You Won!");
    } else {
      div.innerText = (guess + " " + generateHint(solution, guess)); //shows you the hint if you get it wrong, telling you the red and white values
    }

    document.querySelector('#board').appendChild(div)
  }

});



function generateHint(solution, guess) {

  let splitSolution = solution.split("")  //this allows comparisons to be made
  let splitGuess = guess.split("")

  var red = 0; //makes sure that red is at 0
  var white = 0;

  for(var i = 0; i < 4; i++) {  //checks for the red values
    if (splitGuess[i] === splitSolution[i]) {
      red++
    }
  }

  for(var i = 0; i < splitSolution.length; i++) { //checks for the white value
    var ispresent = splitGuess.indexOf(splitSolution[i]);
    if (ispresent > -1) {
      white++
      splitGuess[ispresent] = null
    }
  }

// this code takes care of duplicates
  white -= red

//this is the code that shows the hint
  return(red + '-' + white);
}
