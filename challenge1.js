var sum  =0;
var position = 0;

//do you think that when you sign up for an online account, your password is stored in a database
//what if you log into something and you type out your whole password which gets saved in a computers memory and then it gets hacked right then
//security to not store the entire thing that someone typed in, only process one thing at a time

for(var i =0; i < input.length; i++){
    var letter = input[i];
    var number = Number(letter);
    sum += number;
}


'use strict';
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sum(number) {
    if(position % 2 === 0){
        
    }
    position++;
}

function getNumber() {
  var handleTheAnswer = function(a){
    if(a === "x"){
        console.log(sum);
        return;
    }
    sum(a);
    getNumber();
  };

  rl.question('please type in one number', handleTheAnswer );
}
getNumber();

