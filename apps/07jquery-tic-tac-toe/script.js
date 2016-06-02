'use strict';
var playerTurn = 'X';

/*var winCombinations = [
  ["0","1","2"],
  ["3","4","5"],
  ["6","7","8"],
  ["0","3","6"],
  ["1","4","7"],
  ["2","5","8"],
  ["0","4","8"],
  ["2","4","6"]
];

function checkForWin(){
  for (var i=0; i<winCombinations.length; i++) {
    if($('[data-cell='+winCombinations[i][0]+']').text()===playerTurn &&
       $('[data-cell='+winCombinations[i][1]+']').text()===playerTurn &&
       $('[data-cell='+winCombinations[i][2]+']').text()===playerTurn &&){
         return true;
    }
  }
}
*/




function checkForWin() {
  if($('[data-cell="0"]').text()===playerTurn&& $('[data-cell="1"]').text()===playerTurn&& $('[data-cell="2"]').text()===playerTurn) {
       $('#announce-winner').text("Player " + playerTurn + " Wins!")
     } //copy this ^^^ for these vvv
  else if
       ($('[data-cell = "3"]').text()===playerTurn&& $('[data-cell = "4"]').text()===playerTurn&& $('[data-cell = "5"]').text()===playerTurn) {
         $('#announce-winner').text("Player " + playerTurn + " Wins!")
     }
  else if
       ($('[data-cell = "6"]').text()===playerTurn&& $('[data-cell = "7"]').text()===playerTurn&& $('[data-cell = "8"]').text()===playerTurn) {
         $('#announce-winner').text("Player " + playerTurn + " Wins!")
        }
  else if
       ($('[data-cell = "0"]').text()===playerTurn&& $('[data-cell = "3"]').text()===playerTurn&& $('[data-cell = "6"]').text()===playerTurn) {
         $('#announce-winner').text("Player " + playerTurn + " Wins!")
       }
  else if
        ($('[data-cell = "1"]').text()===playerTurn&& $('[data-cell = "4"]').text()===playerTurn&& $('[data-cell = "7"]').text()===playerTurn) {
         $('#announce-winner').text("Player " + playerTurn + " Wins!")
            }
  else if
        ($('[data-cell = "2"]').text()===playerTurn&& $('[data-cell = "5"]').text()===playerTurn&& $('[data-cell = "8"]').text()===playerTurn) {
              $('#announce-winner').text("Player " + playerTurn + " Wins!")
        }
  else if
        ($('[data-cell = "0"]').text()===playerTurn&& $('[data-cell = "4"]').text()===playerTurn&& $('[data-cell = "8"]').text()===playerTurn) {
            $('#announce-winner').text("Player " + playerTurn + " Wins!")
        }
  else if
        ($('[data-cell = "2"]').text()===playerTurn&& $('[data-cell = "4"]').text()===playerTurn&& $('[data-cell = "6"]').text()===playerTurn) {
            $('#announce-winner').text("Player " + playerTurn + " Wins!" )
        }
   }






$(document).on('ready', function() {
    // Put app logic in here

    $('[data-cell]').click(function() {
      if($(this).text()===""){
        $(this).text(playerTurn);
      } //place mark
      checkForWin();
      playerTurn=(playerTurn=== 'X') ? 'O' : 'X';
    });

});
