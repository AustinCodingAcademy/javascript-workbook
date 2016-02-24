'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

//function for random number between 1-4
function randomInt(low, high){

    //uses floor to round down to whole number
    return Math.floor(Math.random() * (high - low) + low);
}


function rockPaperScissors(hand1, hand2) {

    //assigns number from function to randomChoice variable
    var randomChoice = randomInt(1,4);

    //Assigns rock, paper, scissors based on value
    function compHand() {

        if (randomChoice == 1) {
            return "rock";
        }
        if (randomChoice == 2) {
            return "scissors";
        }
        if(randomChoice == 3){

            return "paper";
        }
    }

    if(hand1 == '' && hand2 == ''){
        return "You must choose rock, paper, or scissors";
    }
    else{
        if(hand1 === ""){
            hand1 = compHand();
        }
        if(hand2 === ""){
            hand2 = compHand();
        }
    }

    //used to log the values
    console.log(randomChoice);
    console.log(hand1);
    console.log(hand2);

    // input to lowercase
    hand1.toLowerCase();
    hand2.toLowerCase();

    //condition to check who wins
    if(hand1 === hand2){
        return 'It\'s a tie!';
    }
    else if((hand1 === 'rock' && hand2 === 'scissors') || (hand1 === 'scissors' && hand2 === 'paper') || (hand1 === 'paper' && hand2 === 'rock')){
        return 'Hand one wins!';
    }
    else{
        return 'Hand two wins!';
    }
    /*else if(hand1 === 'rock'){
        if(hand2 === 'scissors'){
            return 'Hand one wins!';
        }
        else{
            return 'Hand two wins!';
        }
    }
    else if(hand1 = 'paper'){
        if(hand2 === 'rock'){
            return 'Hand one wins!';
        }
        else{
            return 'Hand two wins!';
        }
    }
    else{
        if(hand2 === 'rock'){
            return 'Hand two wins!';
        }
        else{
            return 'Hand one wins!';
        } 
    }*/

}

function getPrompt() {
    prompt.get(['hand1', 'hand2'], function (error, result) {

        console.log( rockPaperScissors(result['hand1'], result['hand2']) );

        getPrompt();
    });
}

// Tests

if (typeof describe !== 'undefined') {

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
