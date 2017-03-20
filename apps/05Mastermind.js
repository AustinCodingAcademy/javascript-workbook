'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var solution = "blue,red,yellow,black";



function printBoard() {
  for (var i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}
//ask the user to type in the colors they want in order seperated by commas.
//"blue,red,yellow,blue"

function getPrompt() {
  rl.question('Please type in the colors you want to choose in order seperated by commas: ', (guess) => {
  
          var guessAsArray = guess.split(',');
          var solutionAsArray = solution.split(",");
          var spot1 = guessAsArray[0];

          if(solution === guess){
            console.log('win');
            return;
          }


          //being at this line of code means we didnt win
          //what are our hints
          // correct colors in the right spot
          // correct colors in the wrong spot

          var correctspots = 0;
          var wrongspots = 0;
          //[blue,red,yellow,black]
          for(var i = 0; i < solutionAsArray.length; i ++){
            if(guessAsArray[i] === solutionAsArray[i]){
              correctspots ++;
              solutionAsArray[i] = null;
            }

          }
          //[null,red,yellow,black]

          for(var i = 0; i < solutionAsArray.length; i ++){
            var targetindex = solutionAsArray.indexOf(guessAsArray[i]);
            if(targetindex > -1){
              wrongspots++;    
            }
          }
       

          console.log('there are this many colors in the correct spot: ' + correctspots);
          consoel.log("there are this many colors in the wrong spot: " + wrongspots);






          //else{  
            //console.log('lose');
          //}



          getPrompt();
        });
}
console.log("colors to choose from are: blue, red, yellow... etc")
getPrompt();

// Tests
