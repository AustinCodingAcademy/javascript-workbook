   'use strict';

     var assert = require('assert');
     var readline = require('readline');
     var rl = readline.createInterface({
       input: process.stdin,
       output: process.stdout
     });

     function rockPaperScissors(hand1, hand2) {
          if(hand1 == 'rock' && hand2 == 'paper'){
            console.log("hand 2 wins");
          }
          if(hand1 == 'paper' && hand2 == 'rock'){
            console.log("hand 1 wins");
          }
          if(hand1 == 'rock' && hand2 == 'scissors'){
            console.log("hand 1 wins");
          }
          if(hand1 == 'scissors' && hand2 == 'rock'){
            console.log("hand 2 wins");
          }
          if(hand1 == 'scissors' && hand2 == 'paper'){
            console.log("hand 1 wins");
          }
          if(hand1 == 'paper' && hand2 == 'scissors'){
            console.log(" hand 2 wins");
          }
          if(hand1 == 'rock' && hand2 == 'rock'){
            console.log("draw")
          }
          if(hand1 == 'paper' && hand2 == 'paper'){
            console.log("draw")
          }
          if(hand1 == 'scissors' && hand2 == 'scissors'){
            console.log("draw")
          }
         }
            rockPaperScissors("rock", "paper")
            rockPaperScissors("paper", "rock")
            rockPaperScissors("rock", "scissors")
            rockPaperScissors("scissors", "rock")
            rockPaperScissors("scissors", "paper")
            rockPaperScissors("paper", "scissors")
            rockPaperScissors("rock", "rock")
            rockPaperScissors("paper", "paper")
            rockPaperScissors("scissors", "scissors")
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

       describe('#rockPaperScissors()', function () {
         it('should detect a tie', function () {
           assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
           assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
           assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
         });
         it('should detect which hand won', function () {
           assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
           assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
           assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
         });
       });
     } else {

       getPrompt();

       }
