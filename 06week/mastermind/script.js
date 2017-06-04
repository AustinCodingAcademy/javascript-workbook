'use strict'



  let board = [];
  let solution = '';
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let hint = '';


  function printBoard() {
    for (let i = 0; i < board.length; i++) {
      console.log(board[i]);
    }
  }

  function generateSolution() {
    for (let i = 0; i < 4; i++) {
      const randomIndex = getRandomInt(0,   letters.length);
      solution += letters[randomIndex];
    }
    return solution;
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function generateHint(guess) {
    let g = guess.split('');
    let s = solution.split('');
    let arr = [];
    let numCorrect = 0 ;
    let numExist = 0 ;
    for(let i=0; i<s.length; i++){
      if(s[i]===g[i]){
        arr.push(g[i]);
        numCorrect++;
      }
      else if(s.includes(g[i]) && (arr.includes(g[i]) === false)){
        arr.push(g[i]);
        numExist++;
      }
    }
    hint = `${numCorrect}-${numExist}`;
    return hint;
  }

  function mastermind(guess) {
    generateHint(guess);
    //check for win
    if(guess===solution){
      return 'You guessed it!';
    }
    else {
      board.push(guess+': '+hint);
      printBoard();
    }
  }


  function getPrompt() {
    rl.question('guess: ', (guess) => {
      console.log( mastermind(guess) );
      printBoard();
      getPrompt();
    });
  }

  solution = generateSolution();


$(document).ready(function(){
  console.log(solution)
  $('#button').click(function () {
    buttonclick();
    cleartext();
  })
  function cleartext(){
    $('#text').val('');
  }
  function buttonclick(){
    var text = $('#text').val();
    var li;
    li = $('<li>' + text + '</li>');
    $("#ul").append(li);
console.log(solution)


  }
});
