'use strict';

$(document).on('ready', function() {

var playerTurn = 'X'

$('[data-cell]').click(function(){
  $(this).text(playerTurn);
  checkForWin();
  playerTurn = (playerTurn === 'X') ? 'O' : 'X';
});


var horizontalWin = function() {
//       ( "[attribute='value']" )
  if ($("[data-cell='0']").text() === playerTurn && $("[data-cell='1']").text() === playerTurn
&& $("[data-cell='2']").text() === playerTurn ){
    return true
}
if ($("[data-cell='3']").text() === playerTurn && $("[data-cell='4']").text() === playerTurn
&& $("[data-cell='5']").text() === playerTurn ){
  return true
}
if ($("[data-cell='6']").text() === playerTurn && $("[data-cell='7']").text() === playerTurn
&& $("[data-cell='8']").text() === playerTurn ){
  return true
}
}

var verticalWin = function() {
  if ($("[data-cell='0']").text() === playerTurn && $("[data-cell='3']").text() === playerTurn
&& $("[data-cell='6']").text() === playerTurn ){
    return true
}
if ($("[data-cell='1']").text() === playerTurn && $("[data-cell='4']").text() === playerTurn
&& $("[data-cell='7']").text() === playerTurn ){
  return true
}
if ($("[data-cell='2']").text() === playerTurn && $("[data-cell='5']").text() === playerTurn
&& $("[data-cell='8']").text() === playerTurn ){
  return true
}
}

var diagonalWin = function() {
  if ($("[data-cell='0']").text() === playerTurn && $("[data-cell='4']").text() === playerTurn
&& $("[data-cell='8']").text() === playerTurn ){
    return true
}
if ($("[data-cell='2']").text() === playerTurn && $("[data-cell='4']").text() === playerTurn
&& $("[data-cell='6']").text() === playerTurn ){
  return true
}
}
var checkForWin = function() {
  if(horizontalWin() === true || verticalWin() === true || diagonalWin() === true) {
    $("#announce-winner").text('Player ' + playerTurn + ' Wins!');
    return true;
// selects the #announce-winner and attaches text Player yadayadayada
  }
}
$('#clear').click(function(){
  playerTurn = 'x';
  $('[data-cell]').text('');
});

});
