'use strict';

$(document).ready(function() {
  // App logic goes here
  $('form').submit(function (event) { // target the form, and put a submit event listener on it. We can capture and pass in the event for us to use
    event.preventDefault(); // this tells the browser to "prevent" the "default" "event" from occuring (sending and refreshing)
    var todoText = $(this).find('#todo').val();
    console.log(todoText);
    $('#todo-list').append('<li><input type="checkbox" id="complete">' + todoText + '</li>');
    $('#todo-list').sortable();
  });

  function toDone() {

  }
});
