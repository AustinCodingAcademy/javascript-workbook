'use strict';

function rps(){
	var handOne = 'scissors';
  var handTwo = 'paper';
  var handTwoVictoryMessage = 'handTwo wins!';
  var handOneVictoryMessage = 'handOne wins!';

  if (handOne === handTwo) {
  	return 'It\'s a tie!';
  } else if (handOne === 'scissors' && handTwo === 'rock') {
		return handTwoVictoryMessage
  } else if (handOne === 'rock' && handTwo === 'paper') {
  	return handTwoVictoryMessage
  } else if (handOne === 'paper' && handTwo === 'scissors') {
  	return handTwoVictoryMessage
  } else if (handOne === 'paper' && handTwo === 'rock') {
		return handOneVictoryMessage
  } else if (handOne === 'scissors' && handTwo === 'paper') {
  	return handOneVictoryMessage
  } else if (handOne === 'rock' && handTwo === 'scissors') {
  	return handTwoVictoryMessage
  }
}

console.log(rps());
