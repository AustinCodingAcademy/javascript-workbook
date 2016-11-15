'use strict';

$(document).ready(function() {
  // Put app logic here
  var startStackPiece;
  var endStackPiece;
  var startStack;
  var endStack;
  var stackArray;
  var bouncingPiece;
  var winningArray = ["25", "50", "75", "100"];

  $('div[data-stack]').on('click', myClickEvent); //if data-stack div is clicked then myClickEvent

  function myClickEvent(){
    //starting stack
    if (startStackPiece == null) {
      startStack = $(this).attr('data-stack');
      stackArray = $(this).children().map(function(el, i) {return $(this).attr('data-block')}).get();
      console.log("This is the stackArray " + stackArray);
      // startStack == $(this).attr("data-stack");
      startStackPiece = getTopPiece(stackArray);
      bouncingPiece = $(this).children("[data-block='" + stackArray[0] + "']");
      bouncingPiece.addClass("bounce animated infinite");
      // ($(this).children("[data-block='" + stackArray[0] + "']")).effect( "bounce", {times:5}, "slow" );
      // changeToBounce($(this));

      console.log("start top piece is " + startStackPiece);
      console.log("start stack is " + startStack);
    }

    else if (endStackPiece == null) {
      bouncingPiece.removeClass("bounce animated infinite");
      ($(this).children("[data-block='" + stackArray[0] + "']")).addClass("bounce animated infinite");
      endStack = $(this).attr('data-stack');
      stackArray = $(this).children().map(function(el, i) {return $(this).attr('data-block')}).get();
      console.log("This is the stackArray " + stackArray);
      // startStack == $(this).attr("data-stack");
      endStackPiece = getTopPiece(stackArray);
      console.log("end top piece is " + endStackPiece);
      console.log("end stack is " + endStack);
      if (checkValid(startStackPiece, endStackPiece)) {
      console.log(startStackPiece + "is valid" + endStackPiece);
        movePiece();
        if (checkForWin()) {
          $("#announce-game-won").text("YOU WON!")
          //disable clicking
        } ;
      }
      else {
        bouncingPiece.removeClass("bounce animated infinite");
        console.log(startStackPiece + "is invalid" + endStackPiece);
        clear();
      }
    }

    else {
      bouncingPiece.removeClass("bounce animated infinite");
    }
  }

  function bounce(clickedStack) {
    (clickedStack.children("[data-block='25']")).effect( "bounce", {times:5}, "slow" );

    setTimeout(function name() {
      bounce(clickedStack);
    }, 1000);
  }

  // var bounceFlag = true;
  // function bounce(clickedStack) {
  //   (clickedStack.children("[data-block='25']")).effect( "bounce", {times:5}, "slow" );
  //
  //   setTimeout(function name() {
  //     bounce(clickedStack);
  //   }, 1000);
  // }

  function checkForWin() {
    var stackArray2 = $("[data-stack='2']").children().map(function(el, i) {return $(this).attr('data-block')}).get();
    var stackArray3 = $("[data-stack='3']").children().map(function(el, i) {return $(this).attr('data-block')}).get();
    if ((stackArray2 == null) && (stackArray3 == null)) return false;
    if ((stackArray2.length != winningArray.length) && (stackArray3.length != winningArray.length)) return false;

  for (var i = 0; i < winningArray.length; ++i) {
    if (stackArray2[i] !== winningArray[i]) {
      return false};
  }
  return true;

  for (var i = 0; i < winningArray.length; ++i) {
    if (stackArray3[i] !== winningArray[i]) return false;
  }
  return true;
}

  function clear() {
    startStack = null;
    startStackPiece = null;
    endStack = null;
    endStackPiece = null;
  }

  function movePiece(){
    var piece = $("[data-stack='" + startStack + "']").children("[data-block='" + startStackPiece +"']").detach();
    $(piece).prependTo("[data-stack='" + endStack + "']");
    clear();
    console.log('endStack');
    // var piece = $("[data-stack='" + startStack + "']").children("[data-block='" + startStackPiece +"']").detach();
    // console.log(piece);
  }

  function checkValid(startStackPiece, endStackPiece) {
    if ((parseInt(startStackPiece) < parseInt(endStackPiece))||(endStackPiece == undefined)) {
      return true;
    }
    else {
      return false;
    }
  }

  function getTopPiece(stackArray){
    return stackArray[0];
  }

});
