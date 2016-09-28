                  Towers of Hanoi App in jQuery Specs

/*
Oject of the game is to move each "data-block" from "data-stack=1" to "data-stack=3". The catch is the larger blocks cannot be placed on top of the smaller blocks. Also, want to try to do it in as little moves as possible. */


**Spec 1 - Moving the blocks**

*DONE*
/* On click() of a [data-stack]*/ **,**
  $("[data-stack]").on("click", function() {
    * code goes here *
  });

*DONE*
/* detach() the last() of the children() */
/* ^^Separete from the on click function */
  $(this).children().last().detach();
    // ** detach HAS to go last **

*DONE*
/* and set it equal to a variable called block. */
    var block = $(this).children().last().detach();

**??**
/* when another "[data-stack]" is click()ed, check if the block variable is assigned, */
  check to see if the other data-stacks have elements on them.
    if data-stack 2 or 3 contains any data-blocks > "25" then it is a NO GO!



*DONE*
/* if so, append() the block to the stack */
      $(this).append(block);

*DONE*
/* and set block to null. */
    block = null;
//

**Step 2 - Verify move**

**??**
Only move the block if the value of the data-block attribute is "less than" (<) the last block of the stack, or if the stack is empty.
//This is broken but maybe kind of right?
  if ("[data-block]" < $("[data-block]").last() {
  };
  if ($("[data-stack]").empty() ) {
  };


**Step 3 - Check for win**

Create a "function" .checkForWin() that checks .each() stack and determines if one of the last two stacks has four [data-block]s.
  $("[data-stack]").each(function checkForWin()) {
    ?? Something Goes Here ??
  });

Run this function after every move.
  ?? Something Goes Here ??

If you won, put the .text("You Won!") inside the ("div#announce-game-won") element.
  $("div#announce-game-won").text("You Won!");
