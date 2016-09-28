'use strict';

$(document).ready(function() {
$('form').submit(function(event) {
  event.preventDefault();
    console.log($(this));

 var todoText = $(this).find('#todo').val()
  console.log(todoText);

$('ul#todo-list').append('<li>' + todoText);

}); // Closes .submit()

$( function() {
   $( 'ul#todo-list' ).sortable();
 }); //Closes function()

});//end of document.ready
