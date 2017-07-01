  'use strict'

  const assert = require('assert');
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// I'm working on a version that has two robotic player objects that you pick the names of and decide how many
//games between them. Then the winner is declared.  https://github.com/stefanbemelmans/javascript-workbook/blob/gh-pages/01week/javascripting/dummy.js
  function robot(name) {
    this.name = name;
    this.wins = 0;
  }
  let turn = function() {
// function turn(){
    let choice = (Math.random()*  3);

    if(choice<1) {
      choice = "rock";
    }
    else if (choice >= 1 && choice < 2) {
      choice = "paper";
    }
    else if (choice > 2) {
      choice = "scissors";
    }
    return choice;
  };

  function win(){
    this.wins +=1;
  }

  function rockPaperScissors(hand1, hand2) {

  // Write code here
    if(hand1 === hand2){
      return "It's a tie!";
    }
    else if (hand1 ==='rock') {
      return (hand2 ==='scissors') ? ('Hand one wins!') : ('Hand two wins!')
    }
    else if (hand1 === 'paper') {
      return (hand2 === 'rock') ? 'Hand one wins!' : 'Hand two wins!';
    }
    else if (hand1 === 'scissors') {
      return (hand2 === 'paper') ? 'Hand one wins!': 'Hand two wins!';
    };
  }

  function getPrompt() {
    rl.question('hand1: ', (answer1) => {
      rl.question('hand2: ', (answer2) => {
        console.log( rockPaperScissors(answer1, answer2) );
        getPrompt();
      });
    });
  }

// Tests

  if (typeof describe === 'function') {

    describe('#rockPaperScissors()', () => {
      it('should detect a tie', () => {
        assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
        assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
        assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
      });
      it('should detect which hand won', () => {
        assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      });
    });
  }
  else {

    getPrompt();
  };
