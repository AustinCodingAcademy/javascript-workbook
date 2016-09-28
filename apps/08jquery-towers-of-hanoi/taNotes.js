*SPEC 1*

This spec throws a lot at you - children(), last() and detach(). Lets break it down.

.children() grabs all the DIRECT child nodes nested inside of an element.
In the example below:

   <div id="div1">
      <p>I am a paragraph.</p>
      <p>I am also a paragraph.</p>
      <span>random span</span>
      <p>"I'm a paragraph. Look at me!"</p>
    </div>

...calling .children() on $('#div1') would return all the paragraphs ('p') but not the <span> element. The <span> is considered the grandparent of $('#div1') and a direct child of only one of the paragraphs here.

.last() returns the last element of the selected element. In this case if you called $('p').last(), it would return "<p>I'm a paragraph. Look at me!</p>".

.detach() is the most important concept to understand in regards to Spec 1.

Calling .detach() on a selected element plucks the element away from its location in the DOM. The method ALSO stores all the information of the plucked element. It's kind of like when you put something in a box and store it in the garage. It's still in your house (DOM) but its tucked away, out of sight, and essential nonexistent unless you go grab it later on.

To complete Spec 1. you need to detach and store the last child of the [data-stack] clicked in a variable called 'block'. To laser in on the element clicked, you can use $(this) to make sure you are not manipulating any other data-stacks besides the one that has been clicked on.

  $('[data-stack]').on('click', function(){
    block = $(this).jQueryStuff().jQueryStuff().jQueryStuff();
    * code goes here *
  });

Consider block to be your handy 'box' to store the stuff you want to move. If your 'box' is filled, you are ready to .append() AND .empty() its contents to the next [data-stack] of your choice. If not, your next click should assign something to this block variable.

The block variable and whether it is filled or not (null) should determine what your click listener does. An if/else statement may help in this situation.


*SPEC 2*

Spec 2 asks us to dig deep into the stack we want to move the block to and compare numerical attributes. Calling .attr() on the last child of the desired stack and comparing its 'data-block' attribute to the 'data-block' .attr() of block will help you check to see if the user click creates a valid move.

Hint - because the value of the data-block attribute is wrapped in double quotes, you may need to scrub the data using Number() to properly compare the values contained in block and the last data-block in any stack.

  ex:
    var blockValue = Number(block.attr('example'));


*SPEC 3*

Spec 3 invites the use of .each(), which is a clever and easy way to run a for loop in jQuery. Each() looks syntactically like many event listeners.

  $('element').each(function() {
    $(this).jQueryStuff();
    * code goes here *
  });

.each() grabs ALL the elements that match the element it is being called on and runs code on each of them individually. $(this) stands for each single element that matches the $("element")


You can ALSO do this for Spec 3:

Check the length() of the child elements in [data-stack="2"] and [data-stack="3"] to see if one of them match the total of the data-blocks present in the game. If one does, you have a winner chicken dinner!
