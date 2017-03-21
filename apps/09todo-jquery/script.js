'use strict';

$(document).ready(function() {
  $('form').submit(function (event) { // target the form, and put a submit event listener on it. We can capture and pass in the event for us to use
    event.preventDefault(); // this tells the browser to "prevent" the "default" "event" from occuring (sending and refreshing)
    var value = $(this).find('input[type="text"]').val();
    $('#todo-list').append('<li><input type="checkbox"/>' + value + '</li>');
    $('#todo-list').sortable();  
  });
});