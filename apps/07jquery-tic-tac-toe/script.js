'use strict';
// lets the application know that the page is loaded and ready to execute the code
$(document).on('ready', function() {
    // Put app logic in here
    // how you get all of the divs with "data" in the element tag
    //.click() - when you click these things (anything)
    var $datacell = $('[data-cell]');
    var playerTurn = "X";
    var $button = $('#clear');


    //html board layout:
    //0 1 2
    //3 4 5
    //6 7 8

    //how to loop thorugh winning combos this would need to go in the check for win function
  //   var winningcombo = [[0,1,2], [2,3,4]]
  //
  //   for (var i =0; i < winningcombo.length, i++) {
  //     if(
  //
  //   $('[data-cell="'+ winningcombo[i][0]'"]') === playerTurn &&
  //   $('[data-cell="'+ winningcombo[i][1]'"]') === playerTurn &&
  //   $('[data-cell="'+ winningcombo[i][2]'"]') === playerTurn){
  //     return true;
  //   }
  // }

    var datacells0 = $('[data-cell="0"]').text();
    var datacells1 = $('[data-cell="1"]').text();
    var datacells2 = $('[data-cell="2"]').text();
    var datacells3 = $('[data-cell="3"]').text();
    var datacells4 = $('[data-cell="4"]').text();
    var datacells5 = $('[data-cell="5"]').text();
    var datacells6 = $('[data-cell="6"]').text();
    var datacells7 = $('[data-cell="7"]').text();
    var datacells8 = $('[data-cell="8"]').text();

    //Using jQuery, set a click listener on all of the [data-cell]s that SETs playerTurn as .text() on $(this) by $(this).text(playerTurn)

    $datacell.click(function() {

        $(this).text(playerTurn)

        checkForWin();

        playerTurn = (playerTurn === "X") ? "O" : "X";
    });

//Add a button with an id="clear" that will not only clear the board, but reset the player to player 'X'
    $button.click(function() {
      $datacell.empty();
      $("#announce-winner").empty();
      playerTurn = "X";
    });


//

function horizontalWin() {

    if (datacells0 === playerTurn && datacells1 === playerTurn && datacells2 === playerTurn ||
        datacells3 === playerTurn && datacells4 === playerTurn && datacells5 === playerTurn ||
        datacells6 === playerTurn && datacells7 === playerTurn && datacells8 === playerTurn) {

        return true;

    }
}

function verticalWin() {
    if (datacells0 === playerTurn && datacells3 === playerTurn && datacells6 === playerTurn ||
        datacells1 === playerTurn && datacells4 === playerTurn && datacells7 === playerTurn ||
        datacells2 === playerTurn && datacells5 === playerTurn && datacells8 === playerTurn) {

        return true;
    }
}

function diagonalWin() {
  console.log('test2: ' + datacells8);
    if (datacells0 === playerTurn && datacells4 === playerTurn && datacells8 === playerTurn ||
        datacells2 === playerTurn && datacells4 === playerTurn && datacells6 === playerTurn) {

        return true;
    }

}

function checkForWin() {

  datacells0 = $('[data-cell="0"]').text();
  datacells1 = $('[data-cell="1"]').text();
  datacells2 = $('[data-cell="2"]').text();
  datacells3 = $('[data-cell="3"]').text();
  datacells4 = $('[data-cell="4"]').text();
  datacells5 = $('[data-cell="5"]').text();
  datacells6 = $('[data-cell="6"]').text();
  datacells7 = $('[data-cell="7"]').text();
  datacells8 = $('[data-cell="8"]').text();

    if (horizontalWin() || verticalWin() || diagonalWin()) {

        //need to select '#announce-winner' and SET its .text() to say 'Player ' + playerTurn + 'Wins!'

        $('#announce-winner').text('Player ' + playerTurn + ' Wins!');

        return true;
        // process.exit();
    }

}


});
