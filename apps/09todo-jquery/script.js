'use strict';

$(document).ready(function() {
    // App logic goes here
    $('form').submit(function (event) {
      event.preventDefault();
      var todoText = $(this).find('#todo').val();
      $('#todo-list').append('<li>' + todoText + '</li>');
      $('#todo-list').sortable();
      $(this).find('#todo').val('')

    });

});
