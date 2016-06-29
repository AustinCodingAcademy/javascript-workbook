'use strict';

var playerTurn = 'X';

//array of win Combo'ss

arr winCombos = [
  ["0","1","2"],
  ["3","4","5"],
  ["6", "7", "8"],
  ["0","3", "6"],
  ["1", "4", "7"],
  ["2","5", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"]
];

//For Loop
function checkForWin(){
for(var i=0, i<winCombos.length, i++){
  if($('[data-cell='+winCombos[i][0]+']').text()===playerTurn
  && $('[data-cell='+winCombos[i][1]+']').text()===playerTurn
  && $('[data-cell='+winCombos[i][2]+']').text()===playerTurn ){
    return true;
  }
}
}

//for each

function checkForWinForEach(){
 winCombos.forEach(function(){})


}


function diagonalWin(){
  return ($('[data-cell = "0"]').text() === playerTurn && $('[data-cell = "4" ]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn)
  || ($('[data-cell = "2"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "6"]').text() === playerTurn);
}

function horizontalWin(){
  return ($('[data-cell="0"]').text() === playerTurn && $('[data-cell = "1"]').text() === playerTurn && $('[data-cell = "2"]').text() === playerTurn)
  || ($('[data-cell = "3"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell ="5"]').text() === playerTurn)
  || ($('[data-cell = "6"]').text() === playerTurn && $('[data-cell = "7"]').text() === playerTurn && $('[data-cell ="8"]').text() === playerTurn);
}

function verticalWin(){
  return ($('[data-cell = "0"]').text() === playerTurn && $('[data-cell = "3"]').text() === playerTurn && $('[data-cell = "6"]').text() === playerTurn)
  || ($('[data-cell = "1"]').text() === playerTurn && $('[data-cell = "4"]').text() === playerTurn && $('[data-cell = "7"]').text() === playerTurn)
  || ($('[data-cell = "2"]').text() === playerTurn && $('[data-cell = "5"]').text() === playerTurn && $('[data-cell = "8"]').text() === playerTurn);
  }

function checkForWin(){
  if(verticalWin() === true || horizontalWin() === true || diagonalWin() === true) {
      $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    return true;
  }
}

function togglePlayerTurn() {
  playerTurn = (playerTurn = (playerTurn ==='X') ? 'O' : 'X');
}

$(document).on('ready', function(){
  $('[data-cell]').click(function(){
    //validation check
    if($(this)===""){
    $(this).text(playerTurn);
    checkForWin()
  }
    togglePlayerTurn();
  }
});
});
