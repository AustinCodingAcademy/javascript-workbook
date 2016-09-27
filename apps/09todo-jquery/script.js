'use strict';

$(document).ready(function() {
    // App logic goes here
    $('#todo-list').sortable();
    $('form').submit(function (event) {
      // I got rid of .on('submit', function(event) ... which I got from Kevins code
      event.preventDefault();
      var todoText = $(this).find('#todo').val();
      var newListItem = '<li>' + todoText + '</li>';
      $('#todo-list').append(newListItem);

    }
  )

});
