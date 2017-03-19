'use strict';
var block = null;
$(document).ready(function() {
  // Put app logic here
  //$('[data-block="25"]').detach();

  $('[data-stack]').click(dataStackWasClicked);

});

function dataStackWasClicked(){
  //this data stack got clicked
  // var $theChildren = $(this).children();
  // var $theLastchild = thechildren.last();
  // var $theDetachedlastchild = thelastchild.detach();
  // var block = thedetachedlastchild;

  //is there something in block variable
  //that means we clicked already and picked up a block
  if(block !== null){
    //okay we had already picked a block up
    //do work necessary when you try put a block down
    var lastblockofthestack = $(this).children().last();
    var datablockattributeoflastblock = lastblockofthestack.data("block");
    var dataattributeofremovedblock = block.data("block");

  //this is the block still on stack -  this is the block removed
    if(datablockattributeoflastblock > dataattributeofremovedblock
    || lastblockofthestack.length ===0  ){
      $(this).append(block);
      block = null;
    }
  }
  else{
    block = $(this).children().last().detach();
  }

}


