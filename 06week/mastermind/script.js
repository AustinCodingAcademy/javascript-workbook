'use strict';

document.addEventListener('DOMContentLoaded', () => { //make sure HTML is loaded before js runs

  document.querySelector('button').onclick = function () { //when button is clicked
    let guess = document.querySelector('input').value; //assign the value that's entered to variable guess
    document.querySelector('input').value = ''; //reset the value
    let solution = 'aabb' //declare a solution for test purpose

    let div = document.createElement('div'); //create a div element in html

    div.innerText = guess + ' ' + generateHint(solution,guess) +  ' ' + mastermind(guess); //save guess and message as a string

    document.querySelector('#board').appendChild(div); //print that string to the screen

    function generateHint(solution,guess) {

      let rightSpot = 0; //declare a variable to store the sum of right spots
      let rightLetter = 0;  //declare a variable to store the sum of right letters,wrong spots
      let hint = []; // declare an array to place number of guesses

      for (let i=0; i<solution.length; i++) { //check each array item
        if (guess.includes(solution[i])) { //if my guess includes any of the letters of solution
          if(guess[i] === solution[i]) { //check if they are at the same spot
            rightSpot++; //if same spot, add 1
          } else { //if I guess the right letter at wrong spot
            rightLetter++; //add 1 for wrong spot
          }
        }
      }

      hint.push(rightSpot,rightLetter); //add total num of right spots and right letter/wrong spots into an array
      return hint.join('-'); //combine it with my guess and assign to the array hint: e.g. 0-2

    } //generateHint function ends

    function mastermind(guess) {

      if (solution === guess) { //if I guess it right
        return 'You guessed it!'; //return the string
      } else { //if I don't guess it right
        // board.push(guess + ' ' + generateHint(solution, guess)) //add my gues to board along with the hint
        return "Try again!"; //return the string
      }
    } //mastermind function ends

  }; //document.querySelector('button').onclick = function () ends
});//main addEventListener ends
