'use strict';

var getElement = $;
var playerTurn = 'X';

$(document).on('ready', function() {
  // Put app logic in here
  setUp();
  clearBoardClick();
});

function setUp(){
  getElement('[data-cell]').click(handleClick);
};

function clearBoardClick(){
  getElement('#clear').click(clearBoard);
};

function handleClick(){
  //IF STATEMENT TO PROTECT AGAINST A PREVIOUSLY MARKED CELL
  if (getElement(this).text() === '') {
    getElement(this).text(playerTurn);
  } else {
    return false;
  }
  if (checkForWin()){
    getElement('#announce-winner').text('Player ' + playerTurn + ' Wins!');
  }
  playerTurn = (playerTurn === 'X') ? 'O' : 'X';
};

function clearBoard(){
  getElement('[data-cell]').empty();
};

function checkForWin(){
  //ALL HORIZONTAL ROWS
  if (getElement('[data-cell="0"]').text() === playerTurn && 
	    getElement('[data-cell="1"]').text() === playerTurn &&
      getElement('[data-cell="2"]').text() === playerTurn) {
        return true;
  }
  if (getElement('[data-cell="3"]').text() === playerTurn && 
	    getElement('[data-cell="4"]').text() === playerTurn &&
      getElement('[data-cell="5"]').text() === playerTurn) {
        return true;
  }
  if (getElement('[data-cell="6"]').text() === playerTurn && 
	    getElement('[data-cell="7"]').text() === playerTurn &&
      getElement('[data-cell="8"]').text() === playerTurn) {
        return true;
  }
  //ALL VERTICAL ROWS
  if (getElement('[data-cell="0"]').text() === playerTurn && 
	    getElement('[data-cell="3"]').text() === playerTurn &&
      getElement('[data-cell="6"]').text() === playerTurn) {
        return true;
  }
  if (getElement('[data-cell="1"]').text() === playerTurn && 
	    getElement('[data-cell="4"]').text() === playerTurn &&
      getElement('[data-cell="7"]').text() === playerTurn) {
        return true;
  }
  if (getElement('[data-cell="2"]').text() === playerTurn && 
	    getElement('[data-cell="5"]').text() === playerTurn &&
      getElement('[data-cell="8"]').text() === playerTurn) {
        return true;
  }
  //DIAGONAL WINS
  if (getElement('[data-cell="0"]').text() === playerTurn && 
	    getElement('[data-cell="4"]').text() === playerTurn &&
      getElement('[data-cell="8"]').text() === playerTurn) {
        return true;
  }
  if (getElement('[data-cell="2"]').text() === playerTurn && 
	    getElement('[data-cell="4"]').text() === playerTurn &&
      getElement('[data-cell="6"]').text() === playerTurn) {
        return true;
  }
};