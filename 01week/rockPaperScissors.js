'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

//Type Code Here...

const h1 = hand1.toLowerCase().trim();
const h2 = hand2.toLowerCase().trim();


//console.log('Hand 1 is: ' + h1 + ' '  + 'and Hand 2 is: ' + h2);

  
function hasInput() {
  if (h1===""||h2===""){
    return 'invalid';
  }else{ return 'valid',
  handOneValid()}
}
hasInput()

//console.log notice to have player enter a value for the appropriate hand as needed.
if (h1==="") {console.log('Please enter a correct value for Hand 1.')}

if (h2==="") {console.log('Please enter a correct value for Hand 2.')}


//Create a function to validate input for hand 1
function handOneValid () {
  if (h1==='rock'||h1==='paper'||h1==='scissors'){
    return 'valid', handTwoValid()
  }else{
    return 'invalid', console.log("Please type one of the following for Hand 1: Rock, Paper, Scissors.")
  }
}

//create a function to validate input for hand 2
function handTwoValid () {
  if (h2==='rock'||h2==='paper'||h2==='scissors'){
    return 'valid', victoryConditions()
  }else{
    return 'invalid', console.log("Please type one of the following for Hand 2: Rock, Paper, Scissors.")
  }
}

//create a function to check for victory condtions:
  function victoryConditions(){
  //if h1 is the same as hand 2 state that it is a tie.
  if (h1===h2 && h1 !=='' && h2 !==''){
    return "It's a tie!"
  }
  
  //h1 victory conditions
  else if(h1==="scissors" && h2==="paper"|| h1==="paper" && h2==="rock"|| h1==="rock" && h2==="scissors"){
    return "Hand one wins!"
  }
  
  //h2 victory conditions
  else if (h1==="paper" && h2==="scissors"||h1==="rock" && h2==="paper" || h1==="scissors" && h2==="rock"){
    return "Hand two wins!"
  }

  }
  
  let result =  victoryConditions()
  return result, console.log(result)
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
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
