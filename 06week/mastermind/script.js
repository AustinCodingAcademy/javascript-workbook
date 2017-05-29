'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let guess = []
  let solution = 'abcd'
  let cells = document.querySelectorAll('[data-cell]')
  function takeGuess() {
    document.getElementById('button').onclick = function(){
      guess = document.querySelector('input').value;
      document.querySelector('input').value = null;
      console.log(guess)

      // cells[i].innerText = guess.toString()






    }
  }
  takeGuess();


})
