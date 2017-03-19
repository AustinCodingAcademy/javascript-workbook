'use strict';

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    // assigns the value of the input field to toDoText to be used later
    var toDoText = $(this).find('#todo').val();
    //var newItem = document.createElement("li");
    $('#todo-list').append('<li>' + toDoText + '</li>');
  })



});

// Construct a string containing a list item <li></li> with your todoText in the middle. .append() the html string to the end of your #todo-list.
