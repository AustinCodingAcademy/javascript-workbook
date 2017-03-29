'use strict';

$(document).ready(function() {
  $('form').submit(function(event){ // put the event listener on the form 
    // prevent the form from auto-sending data back to the server 
    event.preventDefault();
    // find the value of the text and assign it to a variable 
    var todoText = $(this).find("#todo").val();
    // apppend a list item containing the todoText to the to do list in HTML
    $('#todo-list').append('<li>' + todoText + '</li>');
    sort();
    // add a checkbox for each item
    addCheckbox();
    // empty the input box 
    $(this).find("#todo").val("");
    // remove the item when the checkbox clicked 
    $("button").click(function(){
      // could we move this function outside of the document.ready function?
      // remove the button's parent DOM element - which is the <li> element in this case
      $(this).parent().remove();
    });
  });
});

 function sort() {
    // make the list sortable
    $('#todo-list').sortable();
 }

 function addCheckbox() {
   // loop through each list item
   $("li").each(function(){
     // check if there is a button already in there
     if ($(this).children().length !== 1) {
       // append the button to the <li> DOM element 
       $(this).append("<button>Check</button>");
     }
   });
 }
 
