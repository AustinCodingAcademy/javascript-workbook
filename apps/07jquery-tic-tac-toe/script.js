'use strict';
//what would this do, why might i do this
var getElements = $;
console.log(getElements);
var playerTurn = 'X';

//what is the point of this line of code
$(document).on('ready',function(){
  //how many times will this line of code run
  setupTheWebpage();
});
//Add a button with an id="clear" that will not only clear the board, but reset the player to player 'X'

function setupTheWebpage(){
  //what is the point of this line of code, what is the purpose of the part in quotes
  //how do you know what to put in the quote parts
  getElements('[data-cell]').click(handleDataCellDivClick);
  getElements('#clear').click(handleClearButtonClick);

}
function handleClearButtonClick(){
  getElements('[data-cell]').empty();
}
function handleDataCellDivClick(){
  $(this).text(playerTurn);
}
function checkForWin(){
  if(getElements("[data-cell='0']").text() === playerTurn &&
    getElements("[data-cell='1']").text() ===playerTurn &&
    getElements("[data-cell='2']").text() === playerTurn){
      return true;
  }
  if(getElements("[data-cell='" + somevariable + "']").text() === playerTurn &&
    getElements("[data-cell='4']").text() ===playerTurn &&
    getElements("[data-cell='5']").text() === playerTurn){
      
  }
  if(getElements("[data-cell='6']").text() === playerTurn &&
    getElements("[data-cell='7']").text() ===playerTurn &&
    getElements("[data-cell='8']").text() === playerTurn){
      
  }
}
