'use strict';

$(document).ready(function() {
  // target the form, and uses a submit event listener
  $('form').submit(function (event) { 
    //stops the page from refreshing when text is inputted.
    event.preventDefault();
    //finding the value of the user's input.
    var $todoText = $(this).find("input[type='text']").val();
    //adds the user's input to the end of the list item
    $('#todo-list').append('<li><input type="checkbox"/>' + $todoText + '<button>remove</button></li>');
    // makes the list sortable
    $('#todo-list').sortable();
  });
  //removes the list item by selecting the parent (li) of button when the 'remove' button is clicked.
  $('body').on('click', 'button', function() {
    $(this).parent().remove();
  })
});
