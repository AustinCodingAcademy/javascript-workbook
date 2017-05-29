'use strict';

var board = [['-','-','-'],['-','-','-'],['-','-','-']];

function notTaken(board,row,col) {
  return (board[row][col] == '-');
}

function hasX(board,row,col) {
  return (board[row][col] == 'X');
}

function hasO(board,row,col) {
  return (board[row][col] == 'O');
}

function checkForWin() {
//Horizontal win
  if(getElementsByClassName('row')) === [['X', 'X', 'X']]
    return alert "player X wins!";
  else{
    return alert "player O wins!";
//Vertical win
  if(getElementByTagName('column')) === [['X', 'X', 'X']]
    return alert "player X wins!";
  else{
    return alert "player O wins!";
//Diagonal win
  if(getElementByTagName('data-cell')[['1' && '5' && '9'] || [['3'] && ['5'] && ['7']] === [['X', 'X', 'X']]
    return alert "player X wins!";
  else{
    return alert "player O wins!";
  }
}
