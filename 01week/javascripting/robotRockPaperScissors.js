// <script>//html
'use strict';

//attempting to have terminal interface
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//robot constructor, intially had the throw() as as a separate fcn but decided it made sense to combine them
function robot(name){
  this.name = name;
  this.wins = 0;
  this.win = function(){
    this.wins +=1;
  }
  this.hand = function(){
    let choice = (Math.random()*3);
    if(choice<1) {
      choice = "rock";
    }
    else if (choice >= 1 && choice < 2){
      choice = "paper";
    }
    else if (choice > 2) {
      choice = "scissors";
    }
    return choice;
  };
};
// tried to instantiate these when getInfo() was called but it didn't seem to like it.
let rob1 = new robot();
let rob2 = new robot();

// let rob1 = new robot();
// let rob2 = new robot();

function rockPaperScissors(hand1, hand2) {

  // Write code here
  if(hand1 === hand2){
    return "It's a tie!";
  }
  else if (hand1 ==='rock') {
    return (hand2 ==='scissors') ? (rob1) : (rob2);
    // return (throw2 ==='scissors') ? (rob1.name +' wins!')) : (rob2.name +' wins!'), (rob2.win())
  }
  else if (hand1 === 'paper') {
    return(hand2 === 'rock') ? (rob1) : (rob2);
    // return (throw2 === 'rock') ? rob1.name +' wins!' : (rob2.name +' wins!'),(rob2.win());
  }
  else if (hand1 === 'scissors') {
    return(hand2 === 'paper') ? (rob1) : (rob2);
    // return (throw2 === 'paper') ? rob1.name + ' wins!': rob2.name +' wins!';
  };
}
//Game logic
function game(){
  let winner = new Object();
  winner = (rockPaperScissors(rob1.hand(), rob2.hand()));

  if(winner != "It's a tie!"){
    winner.win();
    console.log(winner.name +' won the game and has '+ winner.wins +' wins!');
  }

  else{
    console.log("IT's a tie!");
  };
};

// announceWinner(rob1, rob2);
function announceWinner(rob1, rob2){
  if(rob1.wins > rob2.wins){
    console.log(rob1.name +' is the Champion!');
  }
  else if(rob1.wins < rob2.wins){
    console.log(rob2.name + ' is the Champion!)')
  }
  else if(rob1.wins === rob2.wins) {
    console.log('Both robots are evenly matched!');
  }
}

//changing the questions to robot names and number of games
function getInfo() {
  rl.question('Robot 1 name: ', (name1) => {
    rl.question('Robot 2 name: ', (name2) => {
      rl.question('Number of games: ', (gameNum) => {

        rob1.name = (name1);
        rob2.name = (name2);
        let turns = gameNum;
        for(var i = 0; i < turns; i++){
          game(rob1, rob2);
        }
        announceWinner(rob1, rob2);
        rl.close();
      });
    });
  })};
getInfo();
