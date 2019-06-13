'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



   

 

function rockPaperScissors(hand1, hand2) {

  if ( hand1===hand2) 
  return "it's a tie"
   else if (hand1==="rock"&& hand2==="rock")
   return "it's a tie"
    else if (hand1==="paper"&& hand2==="paper")
   return "it's a tie"
    else if (hand1==="scissors"&& hand2==="scissors")
   return "it's a tie"
   else if (hand1==="rock" && hand2==="scissor")
   return "Hand one wins!"
   else if (hand1==="rock" && hand2==="paper")
   return "Hand two Wins!"
   else if (hand1==="paper" && hand2==="rock")
   return "Hand one Wins!"
   else if (hand1==="scissors" && hand2==="rock")
   return "Hand two Wins! "
   else if (hand1==="paper" && hand2==="scissors")
   return "Hand two Wins!"
   else if (hand1==="rock" && hand2==="scissors")
   return "Hand one Wins" 
 else if ( hand1==="paper"&& hand2==="rock")
  return " Hand one Wins"
 else if (hand1==="scissors"&& hand2==="paper")
 return "Hand one Wins"
 
   else
   return "type : rock, paper or Scissors"

}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

Tests
function showTime(){
    var date = new Date();
    var h = date.getHours();// 0 - 23
    var h = date.getMinutes();// 0 - 59
    var h = date.getSeconds();// 0 - 59

    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    h = (m < 10) ? "0" + m : m;
    h = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + 5;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").innerContent = time;

    startTimeOut("showTime, 1000");

    showTime();
}


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
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
