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

  // const stack1= document.querySelector('[data-stack="1"]');
  // const stack2= document.querySelector('[data-stack="2"]');
  // const stack3= document.querySelector('[data-stack="3"]');
  const initialLength = 4;


  function movePiece( endRow) {
    // Your code here
    //remove child from startRow
    endRow.appendChild(blockHeld);
    blockHeld = null;
    //stacks[endStack].push(stacks[startStack].pop());
  }

  function isLegal(blockHeld, stack) {
    //console.log("prospective stack last child", stack.lastElementChild.getAttribute("data-block"));
    //console.log("attribute stack " , typeof parseInt(stack.lastElementChild.getAttribute("data-block")));
    //if there is nothing there or the top most is less, move is valid
    console.log("stack children ",stack.children.length);
    if(stack.children.length === 0){
      //console.log("potential stack is open/empty");
      return true;
    }
    // console.log("stack ", stack);
    // console.log("stack.lastElementChild ", stack.lastElementChild);
    // console.log("stack.lastElementChild.getAttribute('data-block') ", stack.lastElementChild.getAttribute('data-block') );
    // console.log("stack #val: ", parseInt(stack.lastElementChild.getAttribute('data-block')));
    // console.log("block val: ", blockHeld.getAttribute('data-block'));
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
