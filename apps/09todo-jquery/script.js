'use strict';

$(document).ready(function() {

  // Spec 1
  // Using jQuery, put a submit event listener on the form.
  $('form').submit(function (event) {
    // Spec 2
    // Inside your callback prevent the default event from occuring when you submit.
    event.preventDefault();

    // Then within the $(this) context, .find() the value of #todo and assign it to a variable called todoText.
    var todoText = $(this).find('input[type="text"]').val();

    // Spec 3
    // Construct a string containing a list item <li></li> with your todoText in the middle. .append() the html string to the end of your #todo-list.
    $('#todo-list').append('<li>' + todoText + '<li>');

    // clears the input value in the form
    $(this).find('input[type="text"]').val('');

    // Spec 4
    // Now make your list .sortable().
    $('#todo-list').sortable();

  })


});
