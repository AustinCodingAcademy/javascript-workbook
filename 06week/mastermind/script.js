'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  //const board = [];
  let solution = '';
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let guessNumber = 0;

  generateSolution();
  console.log(solution);


  //the value in input box
  // document.querySelector("input").value;

  // event listener to button
  document.querySelector("button").onclick = function() {
    console.log(document.querySelector("input").value);
    let guess = document.querySelector("input").value;

    //make this a proper function
    if (guess === solution){
      alert("You won!");
    }
    console.log(document.querySelector('#board'));

    let guessDiv = document.createElement("div");
    guessDiv.className += "row";
    guessDiv.innerHTML += "<span>" + guess[0] + "</span>";
    guessDiv.innerHTML += "<span>" + guess[1] + "</span>";
    guessDiv.innerHTML += "<span>" + guess[2] + "</span>";
    guessDiv.innerHTML += "<span>" + guess[3] + "</span>";
    guessDiv.innerHTML += " ";
    guessDiv.innerHTML += generateHint(solution, guess);


    document.querySelector('#board').appendChild(guessDiv);

    document.querySelector("input").value = "";

  }

  // //add an element to the board
  // let div = document.createElement("div");
  // div.innerText = "hello";
  // document.querySelector('#board').appendChild(div);


  // function printBoard() {
  //   console.log("\nGuess Number: " + guessNumber);
  //   for (let i = 0; i < board.length; i++) {
  //     console.log(board[i]);
  //   }
  // }

  function generateSolution() {
    for (let i = 0; i < 4; i++) {
      const randomIndex = getRandomInt(0, letters.length);
      solution += letters[randomIndex];
    }
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function generateHint(solution, guess) {
    // your code here 1-1 2-0
    var hint = '';
    var guessArray = guess.split('');
    var solutionArray = solution.split('');
    var redFlags=0;
    var whiteFlags = 0;
    var alreadyChecked = [];

    //console.log("guess array: " , guessArray);
    //check for red
    for (let i = 0; i < guessArray.length; i++){
      if (guessArray[i]===solutionArray[i]){
        alreadyChecked.push(guessArray[i]);
        //guessArray[i] = 'x';

        redFlags++;
      }
    }
    //console.log("guess array after reds: ", guessArray);
    //add redFlags and hyphen to hint
    hint+= redFlags;

    hint+= '-';

    //check for white
    for (let i = 0; i < guessArray.length; i++){
      //console.log(alreadyChecked);
      if (solutionArray.includes(guessArray[i]) && !alreadyChecked.includes(guessArray[i])){
        //console.log(i);
        whiteFlags++;
        alreadyChecked.push(guessArray[i]);

      }
    }

    hint+= whiteFlags;
    console.log('hint ', hint);

    return hint;
  }

  //delete this function??
  // function mastermind(guess) {
  //   guessNumber++;
  //
  //   //add to board with hints
  //   board.unshift( guess + ' ' + generateHint(solution, guess) );
  //
  //
  //   // end game if true
  //   if (guess === solution){
  //     return 'You guessed it!';
  //     //process.exit();
  //   } else {
  //     return 'Keep guessing!';
  //   }
  //
  //
  // }
});
