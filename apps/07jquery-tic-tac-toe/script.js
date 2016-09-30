'use strict';

$(document).on('ready', function() {

  var playerTurn = "O";
  var $dataElem = $("#data-cell");

  function checkForWin() {
    // var x, y;
    // var winH, winV, winD;
    //
    // // Check Horizontal
    // for (x=0; x<=2; x++) {
    //   winH = true;
    //   for(y= (x*3); y<=(x*3+2) && winH; y++){
    //     if ($("div[data-cell=" + y + "]").text() !== playerTurn) {
    //       winH = false;
    //     }
    //   }
    //   if (winH) { return true; }
    // }
    // // Check Vertical
    // for (x=0;x<=2; x++) {
    //   winV = true;
    //   for(y= x; y<=(x+6) && winV; y += 3){
    //     if ($("div[data-cell=" + y + "]").text() !== playerTurn) {
    //       winV = false;
    //     }
    //   }
    //   if (winV) { return true; }
    // }
    // // Check Diagonal 1 downward
    // winD = true;
    // for (x=0;x<=8 && winD; x += 4) {
    //   if ($("div[data-cell=" + x + "]").text() !== playerTurn) {
    //     winD = false;
    //   }
    // }
    // if (winD) { return true; }
    //
    // // Check Diagonal 2 upward
    // winD = true;
    // for (x=6;x>=2 && winD; x -= 2) {
    //   if ($("div[data-cell=" + x + "]").text() !== playerTurn) {
    //     winD = false;
    //   }
    // }
    // return winD;

    var resultHor  = ( $("div[data-cell=0]").text() === playerTurn &&
                       $("div[data-cell=1]").text() === playerTurn &&
                       $("div[data-cell=2]").text() === playerTurn) ||
                     ( $("div[data-cell=3]").text() === playerTurn &&
                       $("div[data-cell=4]").text() === playerTurn &&
                       $("div[data-cell=5]").text() === playerTurn) ||
                     ( $("div[data-cell=6]").text() === playerTurn &&
                       $("div[data-cell=7]").text() === playerTurn &&
                       $("div[data-cell=8]").text() === playerTurn);

     var resultVer  = ( $("div[data-cell=0]").text() === playerTurn &&
                        $("div[data-cell=3]").text() === playerTurn &&
                        $("div[data-cell=6]").text() === playerTurn) ||
                      ( $("div[data-cell=1]").text() === playerTurn &&
                        $("div[data-cell=4]").text() === playerTurn &&
                        $("div[data-cell=7]").text() === playerTurn) ||
                      ( $("div[data-cell=2]").text() === playerTurn &&
                        $("div[data-cell=5]").text() === playerTurn &&
                        $("div[data-cell=8]").text() === playerTurn);

      var resultDia  = ( $("div[data-cell=0]").text() === playerTurn &&
                         $("div[data-cell=4]").text() === playerTurn &&
                         $("div[data-cell=8]").text() === playerTurn) ||
                       ( $("div[data-cell=6]").text() === playerTurn &&
                         $("div[data-cell=4]").text() === playerTurn &&
                         $("div[data-cell=2]").text() === playerTurn) ;

     var win =  ( resultHor || resultVer || resultDia );
     return win;
  }

  $("[data-cell]").click( function(){
    // Protect against changing a previously marked cell
    if ($(this).text() !== "" ) {
      alert("You should be use a empty room");
    } else {
        // change turns
        (playerTurn === "X") ?  playerTurn = "O" : playerTurn = "X";
        $(this).text(playerTurn);
        if (checkForWin()) {
          $("#announce-winner").text("Player " + playerTurn + " Wins!");
        }
    }
  } );

  $("#clear").click( function(){
    for (var i = 0; i <= 8; i += 1) {
        $("div[data-cell=" + i + "]").text("");
    }
    $("#announce-winner").text("");
    playerTurn = "O";
  });

});
