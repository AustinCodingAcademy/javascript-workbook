'use strict'
var hand1 = answer1;
var hand2 = answer2;

function rockPaperScissors(hand1,hand2) {
  // Rock>scissors
  // Scissors>paper
  // Paper>rock

  //Rock v Paper
  if(hand1 == 'rock' && hand2 == 'paper'){
    console.log('hand2 wins');
  }
  if(hand2 == 'rock' && hand1 == 'paper'){
    console.log('hand2 wins');
  }
  //Paper V Scissors
  if(hand1 == 'paper' && hand2 == 'scissors'){
    console.log('hand2 wins');
  }
  if(hand2 == 'scissors' && hand1 == 'paper'){
    console.log('hand2 wins');
  }
  //Scissors V Rock
  if(hand1 == 'scissors' && hand2 == 'rock'){
    console.log('hand2 wins');
  }
  if(hand2 == 'rock' && hand1 == 'scissors'){
    console.log('hand2 wins');
  }
  //tie scenario
  else{
    console.log('It is a tie!');
  }

}

rockPaperScissors();
