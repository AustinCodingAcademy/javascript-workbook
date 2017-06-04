//Questions for Zack:
//1. Should I mostly reuse the old code, or is it better to start from scratch?
//2. How to I get the board array to show up in HTML?


//Steps
//1. Click 4 colors.
//2. Get the board array to show on HTML
//
let board = [1,2,3];


$(document).ready(function(){

  $('.guess').click(function(){

    console.log($('.board').children())
    board.pop()

    console.log("test")
    board.push(this)
    console.log(board);
    var htmlString = $( this ).html();
    $( '#guessPeg1' ).text( htmlString );
    console.log(htmlString)


  });
//   $('.guess').click(function(){
//     console.log("test")
//     board.push(this)
//     console.log(board);
//     var htmlString = $( this ).html();
//     $( '#guessPeg2' ).text( htmlString );
//     console.log(htmlString)
// });

console.log(board);

  function othername() {
      var input = document.getElementById("userInput").value;
      alert(input);
  }

  // let solution = 'adaa';

  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  //end of stuff

  function printBoard() {
    for (let i = 0; i < board.length; i++) {
      console.log(board[i]);
    }
  }

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

  function mastermind(guess) {
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


  function getPrompt() {
      return('guess: ', (guess) => {
      console.log( mastermind(guess) );
      printBoard();
      getPrompt();
    });
  };





});
