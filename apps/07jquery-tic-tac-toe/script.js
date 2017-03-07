'use strict';

var getElement = $;
var playerTurn = 'X';

$(document).on('ready', function() {
  // Put app logic in here
  setUp(); //------>function to register a few click handlers
  clearBoardClick();
});

function setUp(){
  getElement('[data-cell]').click(handleClick);
};

function clearBoardClick(){
  getElement('#clear').click(clearBoard);
};

function handleClick(){
  getElement(this).text(playerTurn);
  if (checkForWin()){
    getElement('#announce-winner').text('Player ' + playerTurn + ' Wins!');
  }
  playerTurn = (playerTurn === 'X') ? 'O' : 'X';
};

function clearBoard(){
  getElement('[data-cell]').empty();
};

function checkForWin(){
  if (getElement('[data-cell="0"]').text() === playerTurn && 
	    getElement('[data-cell="1"]').text() === playerTurn &&
      getElement('[data-cell="2"]').text() === playerTurn) {
        return true;
      }

};