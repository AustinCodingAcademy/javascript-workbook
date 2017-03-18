'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  setup();
});


function setup(){
  mystuff();
}

function mystuff(){

  // Spec 1
  // Set a variable playerTurn equal to 'X'.
  // Using jQuery, set a click listener on all of the [data-cell]s that SETs playerTurn as .text() on $(this) by $(this).text(playerTurn)

  var playerTurn = 'X';
  $('[data-cell]').click(function(){
    $(this).text(playerTurn);
      // var data = $(this).text();
      // console.log(data + ' here is data');  <---test what is in "this"

    //  console.log(playerTurn)
    var win =  checkForWin(playerTurn);
    resetBoard(win);

  //   Spec 2
  // Also in your click event, toggle playerTurn between 'O' and 'X' using a ternary operator. You should now be able to change turns as you click around on your board.
    playerTurn = (playerTurn==='X') ? 'O': 'X';  //set playerTurn to X or O
  }); //end of JQuery function -----------------------
}// end of mystuff function

//    Reset the board for next game or play
function resetBoard(){
  $('#clear').click(function(){
    var blank = '';
    var data2 = $('[data-cell]');

    for (var i=0; i<9; i++){
      data2[i].innerText = '';
    } //end of for loop
  }); //end of JQUERY click function -----------------
} //end of resetBoard


function checkForWin(playerTurn){
  var data2 = $('[data-cell]');  // data object with cell location & value
//console.log(playerTurn);
  if (
//horizontal win
       data2[0].innerText === playerTurn && data2[1].innerText === playerTurn && data2[2].innerText === playerTurn ||
       data2[3].innerText === playerTurn && data2[4].innerText === playerTurn && data2[5].innerText === playerTurn ||
       data2[6].innerText === playerTurn && data2[7].innerText === playerTurn && data2[8].innerText === playerTurn ||
//vertical win
      data2[0].innerText === playerTurn && data2[3].innerText === playerTurn && data2[6].innerText === playerTurn ||
      data2[1].innerText === playerTurn && data2[4].innerText === playerTurn && data2[7].innerText === playerTurn ||
      data2[2].innerText === playerTurn && data2[5].innerText === playerTurn && data2[8].innerText === playerTurn ||
//diagonal win
      data2[2].innerText === playerTurn && data2[4].innerText === playerTurn && data2[6].innerText === playerTurn ||
      data2[0].innerText === playerTurn && data2[4].innerText === playerTurn && data2[8].innerText === playerTurn ){

    console.log('success!')
    return true;
  }//end of horizontal IF
} //end of checkForWin function


//
/*
the "$" represents
  var $ = function () {

}
*/

// run tests against "test.js" not script.js

// $("[data-cell]")  ----  this grabs attributes
