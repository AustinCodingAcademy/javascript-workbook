'use strict'

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

function threeChoices() {
	// if (Math.random() < 0.33)	{
  // return 'one';
  // }
  // else if (Math.random() < 0.66)	{
  // return 'two';
  // }
  // else {
  // return 'three';
  // }
 return Math.random() < 0.33 ? 'Rock' : Math.random() < 0.66 ? 'Paper' : 'Scissors';
}

console.log(threeChoices());
//
// function getPrompt() {
//     prompt.get(['hand1', 'hand2'], function (error, result) {
//
//         console.log( rockPaperScissors(result['hand1'], result['hand2']) );
//
//         getPrompt();
//     });
// }
