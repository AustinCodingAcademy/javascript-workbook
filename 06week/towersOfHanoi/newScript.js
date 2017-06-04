var block = null;

// let yellow = $('[data-stack]').children[0]
// let red = $('[data-stack]').children[1]
// let green = $('[data-stack]').children[2]
// let blue = $('[data-stack]').children[3]

$(document).ready(function() {
//This moves the last piece on a stack.
  $('[data-stack]').click(function() {
    var lastBar = $(this).children().last();
    // let block = $(this).children().last().detach();
    console.log(lastBar);
    console.log('test');

    if (block === null){
      block = lastBar.detach();
      console.log(block);
    }
    else if (isLegal(stack) || isEmptyStack(stack)){
      $(this).append(block);
      block = null;
    }

    // function isLegal(stack){
    //   return (children()[$('[data-stack]').length-1].clientHeight > (stack).children().last().clientHeight)
    // }
    //
    // function isEmptyStack(stack){
    //   return $(stack).children().length === 0)
    // }



//Rules:
//blocks must be smaller than sibling




  })









})

//use detach instead of remove
//
