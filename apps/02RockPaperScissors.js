'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

    

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
    }

   /* var random = randomInt(1,3);
    function compHand() {
        if (random === 1) {return "rock";}
        if (random === 2) {return "scissors";}
        if (random > 2) {return "paper";}
    }
    */
    


function rockPaperScissors(hand1, hand2) {

    //test
    var random = randomInt(1,4);

   function compHand() {
        if (random === 1) {return "rock";}
        if (random === 2) {return "scissors";}
        if (random === 3) {return "paper";}
    }

    if (hand1 === "") {
        hand1 = compHand();
    }
    if (hand2 === "") {
        hand2 = compHand();
    }

    console.log(hand1);
    console.log(hand2);
    //hand1 = hand1.toLowerCase();

    //if (hand1 === "rock" || "paper" || "scissors") {
    //    return "invalid entry"
    //}

    if(hand1 === hand2) {
        return "It's a tie!";
    }
    else if ((hand1 === "rock" && hand2 === "scissors") || (hand1 === "scissors" && hand2 === "paper") || (hand1 === "paper" && hand2 === "rock")) {
        return "Hand one wins!";
    }
    else {
        return "Hand two wins!";
    }
}

function getPrompt() {
    prompt.get(['hand1','hand2'], function (error, result) {

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
