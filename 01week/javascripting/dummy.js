// <script>//html
'use strict';

// let robot = new Object();
//   robot.name = "ivan";
//   robot.wins = 0;
//   robot.win = function(){
//     this.wins +=1;
//   };

//robot constructor, intially had the throw() as as a separate fcn but decided it made sense to combine them
function robot(name){
  this.name = name;
  this.wins = 0;
  // this.choice;
  this.win = function(){
    this.wins +=1;
  }
  this.throw = function(){
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

let rob1 = new robot("ivan");
let rob2 = new robot ("bobo")

// rob1.choice=turn();
// rob2.choice=turn();

function rockPaperScissors(throw1, throw2) {

  // Write code here
  if(throw1 === throw2){
    return "It's a tie!";
  }
  else if (throw1 ==='rock') {
    return (throw2 ==='scissors') ? (rob1) : (rob2);
    // return (throw2 ==='scissors') ? (rob1.name +' wins!')) : (rob2.name +' wins!'), (rob2.win())
  }
  else if (throw1 === 'paper') {
    return(throw2 === 'rock') ? (rob1) : (rob2);
    // return (throw2 === 'rock') ? rob1.name +' wins!' : (rob2.name +' wins!'),(rob2.win());
  }
  else if (throw1 === 'scissors') {
    return(throw2 === 'paper') ? (rob1) : (rob2);
    // return (throw2 === 'paper') ? rob1.name + ' wins!': rob2.name +' wins!';
  };
}
//just need to button this up in a for loop and write a declare winner function
function game(){
  let winner = new Object();
  winner = (rockPaperScissors(rob1.throw(), rob2.throw()));

  if(winner != "It's a tie!"){
      winner.win();
      console.log(winner.name, winner.wins);
    }

  else{
      console.log("IT's a tie!");
    };
};
let turns = 10;
for(var i = 0; i < turns; i++){
       console.log(game());
     }
announceWinner(rob1, rob2);
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

  //
  //     console.log(rob1.wins, rob2.wins);
  //   };
// let turns = 10;
//   for(var i = 0; i < turns; i++){
//     let winner = rockPaperScissors(rob1.throw(), rob2.throw())
//     winner.win();
//     console.log(winner.name + 'won! ' + winner.wins + ' times!')
//   }
// </script>
