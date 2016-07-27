'use strict';

var playerTurn = "X";
//$result = $('#announce-winner').text("Player " + playerTurn + " Wins");

var winCombo = [
  ['0', '1', '2'],
  ['3', '4', '5'],
  ['6', '7', '8'],
  ['0', '3', '6'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['0', '4', '8'],
  ['2', '4', '6'],

];

function checkForWin(){

for(var i=0; i<winCombo.length; i++) {
  if($('[data-cell='+winCombo[i][0]+']').text() === playerTurn &&
     $('[data-cell='+winCombo[i][1]+']').text() === playerTurn &&
     $('[data-cell='+winCombo[i][2]+']').text() === playerTurn) {
       $('#announce-winner').text("Player " + playerTurn + " Wins");
       $('[data-cell]').each(function(){
          $(this).empty();
       });
  }

}
};

function checkForWinWithForEach(){
  winCombo.forEach(fucntion(currentCombo){
    if($('[data-cell='+currentCombo[0]+']').text() === playerTurn &&
       $('[data-cell='+currentCombo[1]+']').text() === playerTurn &&
       $('[data-cell='+currentCombo[2]+']').text() === playerTurn) {
         $('#announce-winner').text("Player " + playerTurn + " Wins");
         $('[data-cell]').each(function(){
            $(this).empty();
         });
  })
}


$(document).on('ready', function() {
    // Put app logic in here

    $('[data-cell]').click(function(){
      if ($(this).text() === ""){
        $(this).text(playerTurn);
        $('#announce-winner').empty();
        checkForWin();
        playerTurn = (playerTurn === "X" ? "O" : "X");
        }
      else {
        $('#announce-winner').text("NOOOOOOOOOOOO GO AWAY");
      }
    });

});
