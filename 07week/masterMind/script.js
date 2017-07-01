// 1. Make a function generate a solution
// 2. Make a guess
// 3. Make an array show guesses
// 4. Make a function check for win
// 5. Make a hint
// 6. Clear the user input
// 7. If win; announce win
// 8. Make it limit to 10 guesses

let board = [];
let solution = '';
let hint = '';
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var guesses = [];

$(document).ready(function(){
  generateSolution();
  $('#button').click(function(){
    addGuess();//if correct make green, if not red?
    addHint();
    clearBox();
    checkForWin();

  });
}


//****Generate the solution****


function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
} //Math.floor makes it an integar
//this will give a random number between 0 and letter.lenth defined in generateSolution()
function generateSolution(){
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letter.length);
    solution += letters[randomIndex];
  }
  return solution;
}
//this uses the getRandomInt() to generate 4 letters randomly for the solution
//Allowing to make a guess

//****Make a hint****

function generateHint(solution, guess){

    function split(string){
      return string.split('');
    }

    let xSolution = split(solution);
    let xGuess = split(guess);
    let letterRight = 0;
    let letterClose = 0;

    for(let i = 0; i < 4; i++){
      if (xGuess[i]===xSolution[i]){
  /*identifies letter and index that are correct*/
        xSolution[i] = null;
         return letterRight++;
      }
    }

    for (let i = 0; i < 4; i++){
      let gotya = xSolution.indexOf(xGuess[i]);
      //indexOf() goes through xSolution to search for each xGuess
        if (gotya > -1){//anything > -1 is there, but not in right spot
          xSolution[gotya] = null;
          letterClose++;
        }
    }
      var guessPrint = letterRight + '-' + letterClose;
      return guessPrint;
    }

//**** Show the hint ****//


function userGuess(){
  //takes user's guess and returns "guess"
  guess = $('#ul').children().last().text();
  return guess;
}

  //**** Adds ${guess} in the array of guesses box****//

function addGuess(){
    guess = ${'#text'}.val();//val() inputs data and inputs it
    $('#ul').append($(`<li>${guess}</li>`));
}

//**** Give user a hint****

function addHint(){
  $('#ul').append($(`<li>${guessPrint}</li>`));
}

//**** Limit amount of guesses****

function maxTurns(){
  //limits amount of turns to x10
  if(guesses.lenght = 10)
  return ('Too many tries! You Suck!')
}

//**** Clears the user input****//

function clearBox(){
  ${'#text'}.val('')//the '' removes input vs val() w/o '' adds it another place
}

//**** Check for win!****//

function checkForWin(guess){
    if (guess === solution);
    return ('You Won!!!');
}

/**HTML
header: mastermind
form box: to put guess in
guess box
hint box
turns counter??
**/

// All of this is original MasterMind code didn't know how to use it

/*      else if (xSolution.includes(xGuess[i]) && xSolution.includes(xGuess[i]) === false)){
        xSolution[i] = null;
          numberClose++;
      }
    }
    hint = `${numberRight}-${numberClose}`;

    return hint;
  }

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}



function mastermind(guess) {
  generateHint(guess);

  if (guess === solution){
    return 'You guessed it!';
  }
  else {
    board.push(guess+ ': ' + hint);
    printBoard();
  }
  // solution = 'abcd'; // uncomment this when developing
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log( mastermind(guess) );
    printBoard();
    getPrompt();
  });
}
*/
