'use strict';

$(document).ready(function() {
  // App logic goes here

  $('form').submit(function(event) {
  event.preventDefault();
  
  var value = $(this).find('input[type="text"]').val();

  $('#todo-list').append('<li>' + value + '<li>');

  $('#todo-list').sortable();

  });

});
