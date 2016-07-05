'use strict';

$(document).ready(function() {

    $('form').submit(function (event) {
      event.preventDefault();
      var todoText = $(this).find('#todo').val();
      $('#todo-list').append('<li>' + todoText + '</li>');
    });

    $('#todo-list').click (function() {
      $(this).sortable();
    });
//end of document.ready.
});
