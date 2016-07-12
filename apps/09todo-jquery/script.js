'use strict';

$(document).ready(function() {
  // App logic goes here

  $('form').submit(function (event) { // target the form, and put a submit event listener on it. We can capture and pass in the event for us to use
    var todoText = $(this).find('input[type="text"]').val();
    event.preventDefault(); // this tells the browser to "prevent" the "default" "event" from occuring (sending and refreshing)
    $('#todo-list').append('<li>' + todoText + '</li>');

  });

  $('#todo-list').sortable();

});
