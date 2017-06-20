'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  document.querySelectorAll('[data-stack]').forEach(cell => {
    cell.addEventListener("click", function(){

      //if there is a block append it to the row and blockhel= null

      if (blockHeld){
        console.log("there is a blockheld : ",blockHeld);
        //if the move is legal
        if(isLegal(blockHeld, this)){
          this.appendChild(blockHeld);
          blockHeld = null;
        }
      }
      //if no blockHeld
      else if (!blockHeld){
        blockHeld = this.lastElementChild;
        console.log("!blockheld setting block");
        //blockHeld.parentElement.removeChild(blockHeld);
      }
      checkForWin();

    });
  });

  let blockHeld = null;

  const initialLength = 4;


  function movePiece( endRow) {
    endRow.appendChild(blockHeld);
    blockHeld = null;

  }

  function isLegal(blockHeld, stack) {

    console.log("stack children ",stack.children.length);
    if(stack.children.length === 0){
      //console.log("potential stack is open/empty");
      return true;
    }
     if (parseInt(stack.lastElementChild.getAttribute('data-block')) >= blockHeld.getAttribute('data-block')){
      return true;
    } else {
      return false;
    }
  }

  function checkForWin() {
    var secondStackLength = document.querySelector('[data-stack="2"]').childElementCount;
    var thirdStackLength = document.querySelector('[data-stack="3"]').childElementCount;
    console.log("thirdStackLength= ", thirdStackLength);
    if (secondStackLength === 4 || thirdStackLength === 4){
      alert("You win!");
      return true;
    } else {
      return false;
    }
  }

  function towersOfHanoi(startStack, endStack) {

    //check if legal
    //console.log("checking islegal:  " + isLegal(startStack, endStack));
    if ( isLegal(startStack, endStack) ){
      //console.log("about to move ");
      movePiece(startStack, endStack);
    } else {
      console.log("illegal move");
    }

    //check for win
    checkForWin();

  }
});
