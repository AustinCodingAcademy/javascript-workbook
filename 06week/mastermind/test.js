'use strict';

document.addEventListener('DOMContentLoaded', () => {

  let solution = '';
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

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
    console.log(guess, solution);
    let redPegs = []
    let whitePegs = []

    //Determines Red Pegs
    if (guess[0] === solution[0]){
      whitePegs.push(-1);
      redPegs.push(1);
    }
    if (guess[1] === solution[1]){
      whitePegs.push(-1);
      redPegs.push(1);
    }
    if (guess[2] === solution[2]){
      whitePegs.push(-1);
      redPegs.push(1);
    }
    if (guess[3] === solution[3]){
      whitePegs.push(-1);
      redPegs.push(1);
    }


    // function to add the elements of whitePegs together
    function add(a, b) {
        return a + b;
    }

    //Determines white pegs
    if((solution.search('a') >= 0) & (guess.search('a') >= 0)){
      if(guess.match(/a/gi).length < solution.match(/a/gi).length){
        whitePegs.push(guess.match(/a/gi).length);
      }
      else{
        whitePegs.push(solution.match(/a/gi).length);
      }
    }
    if((solution.search('b') >= 0) & (guess.search('b') >= 0)){
      if(guess.match(/b/gi).length < solution.match(/b/gi).length){
        whitePegs.push(guess.match(/b/gi).length);
      }
      else{
        whitePegs.push(solution.match(/b/gi).length);
      }
    }
    if((solution.search('c') >= 0) & (guess.search('c') >= 0)){
      if(guess.match(/c/gi).length < solution.match(/c/gi).length){
        whitePegs.push(guess.match(/c/gi).length);
      }
      else{
        whitePegs.push(solution.match(/c/gi).length);
      }
    }
    if((solution.search('d') >= 0) & (guess.search('d') >= 0)){
      if(guess.match(/d/gi).length < solution.match(/d/gi).length){
        whitePegs.push(guess.match(/d/gi).length);
      }
      else{
        whitePegs.push(solution.match(/d/gi).length);
      }
    }
    if((solution.search('e') >= 0) & (guess.search('e') >= 0)){
      if(guess.match(/e/gi).length < solution.match(/e/gi).length){
        whitePegs.push(guess.match(/e/gi).length);
      }
      else{
        whitePegs.push(solution.match(/e/gi).length);
      }
    }
    if((solution.search('f') >= 0) & (guess.search('f') >= 0)){
      if(guess.match(/f/gi).length < solution.match(/f/gi).length){
        whitePegs.push(guess.match(/f/gi).length);
      }
      else{
        whitePegs.push(solution.match(/f/gi).length);
      }
    }
    if((solution.search('g') >= 0) & (guess.search('g') >= 0)){
      if(guess.match(/g/gi).length < solution.match(/g/gi).length){
        whitePegs.push(guess.match(/g/gi).length);
      }
      else{
        whitePegs.push(solution.match(/g/gi).length);
      }
    }
    if((solution.search('h') >= 0) & (guess.search('h') >= 0)){
      if(guess.match(/h/gi).length < solution.match(/h/gi).length){
        whitePegs.push(guess.match(/h/gi).length);
      }
      else{
        whitePegs.push(solution.match(/h/gi).length);
      }
    }

    let sumW = whitePegs.reduce(add, 0)
    let sumR = redPegs.length
    let empty = ' '
    let dash = '-'

    return (sumR + dash + sumW);

    }

    function mastermind(guess) {
      console.log('solution :' + solution);
      console.log('guess :' + guess);
      if (guess === solution) {
      return 'You guessed it!'
      }
      else{
      return generateHint(solution, guess);
    }

    }
    generateSolution();

    document.getElementById('button').onclick = function () {
      // grabs the value of my input
      let guess = document.querySelector('input').value;
      // creates a new div
      let guessBox = document.createElement('div');
      // sets the content of my new div to my mastermind game logic
      guessBox.innerText = guess + ' ' + mastermind(guess)
      // adds my new div with printed game logic to DOM
      document.getElementById('container').appendChild(guessBox);
      console.log(solution)

    }


})
