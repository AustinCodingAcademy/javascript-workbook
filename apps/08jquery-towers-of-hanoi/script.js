'use strict';
var block=null;

$(document).ready(function() {
  // Put app logic here
  $('[data-stack]').click(dataStackWasClicked);
  
});

function dataStackWasClicked() {
  if (block===null) {
    //Get the last child element of the data stack element.
    var lastChild = $(this).children().last();
    if (lastChild.length!=0)
      {
      //If it's not empty. Detach it and store it in the block variable.
      block = lastChild.detach();
      }
    }
  else
    {
    //There is an element (a data-block pulled from the data-stack div) contained in the block variable.
    var lastBlockOfStack=$(this).children().last();
    var lastBlockAttribute=lastBlockOfStack.data('block');
    var thisBlockAttribute=block.data('block');

    if ((thisBlockAttribute < lastBlockAttribute) || (lastBlockOfStack.length === 0))
      {
      $(this).append(block);
      block = null;
      }
    }

  checkForWin()
  }

function checkForWin() {
  //Alternatively refer to each data stuck using $("data-stack='2'")

  var someStacks = $('[data-stack]');
  for (var i=1; i<someStacks.length; i++) {
    if ($(someStacks[i]).children().length===4) {
      console.log('win')
      return true
      }
    }
  console.log('no win')
  return false;
  }