'use strict';

$(document).ready(function() {
    // App logic goes here
    $('form').submit(function(event) {
      event.preventDefault();
      console.log(this);
      var toDoText = $(this).find('#todo').val();
      $('#todo-list').append('<li>' + toDoText + '<li>').sortable();
    });
});
