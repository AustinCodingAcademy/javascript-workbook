//Steps
//1. Have computer create answer
//2. Choose a guess.
//3. Get the board array to show on HTML
//4. Check for win.

let board = [];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let solution = '';
let guess = '';


$(document).ready(function(){
  generateSolution();
  console.log (solution)
  $('#button').click(function(){
    printBoard();
    console.log('test')
    checkForWin();
  });

//This prints the guess on the board.
  function printBoard (){
    guess = $('#text').val();
    var list;
    playerGuess = $('<li>' + guess + '</li>');
    $('#ul').append(playerGuess);
  }

//This creates the answer.
  function generateSolution() {
    for (let i = 0; i < 4; i++) {
      const randomIndex = getRandomInt(0, letters.length);
      solution += letters[randomIndex];
    }
    return solution;
  }

//This creates a random number for the answer.
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function generateHint(solution, guess) {
    // your code here {
    function split(string) {
      return string.split('');
    }
    let splitSolution = split(solution);
    let splitGuess = split(guess);

    let rightLetterWrongPlace = 0;
    let rightLetterRightPlace = 0;
    //
    for (let i = 0; i < splitSolution.length; i++) {
      // console.log(`solution: ${splitSolution}`)
      // console.log(`guess: ${splitGuess}`)
      if (splitSolution[i] === splitGuess[i]) {
        splitSolution[i] = null;
        // return(splitSolution);
        rightLetterRightPlace++;
      }
    }

    for (let i = 0; i< solution.length; i++ ){
      console.log(`solution: ${splitSolution}`);
      console.log(`guess: ${splitGuess}`);
      let found = splitSolution.indexOf(splitGuess[i])
      if (found > -1) {
      splitSolution[found] = null;
      // console.log(splitSolution);
          rightLetterWrongPlace++;
      }
    }

    var returnString = rightLetterRightPlace + '-' +rightLetterWrongPlace;
    return(returnString);

    // console.log(`(loop is finished)`)
    // console.log(`(Right letter, right place: ${rightLetterWrongPlace}`)
    // console.log(`(Right letter, wrong place: ${rightLetterRightPlace}`)
  }

  function checkForWin(guess) {
    (board.push(guess));

    //add a your guess to the board each time (use board.push)
    //add the hint in the format of '1-1'
    if (rightLetterRightPlace = 4) {
      return('You guessed it!');
    } else {
      generateHint(solution, guess);
      // getPrompt();
      // printBoard();
    };
  };



});
