'use strict';

$(document).on('ready', function() {
console.log('start');

var playerTurn = 'X';

jQuery('div[data-cell]').on('click', function() {
$(this).text(playerTurn);
checkForWin();
playerTurn = (playerTurn === 'X' ? 'O' : 'X');

});

function checkForWin() {

if (
$('div[data-cell=0]').text() === playerTurn &&
$('div[data-cell=1]').text() === playerTurn &&
$('div[data-cell=2]').text() === playerTurn
) {
console.log('win in the first row');
}
}

  $(':button').click(function(){
$('[data-cell]').text(' ')

});
});


//$('[data-cell]').text(' ')
