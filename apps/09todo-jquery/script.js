'use strict';

$(document).ready(function() {
    // App logic goes here
    $('form').submit(function (event) {
      event.preventDefault();
      var todoText = $(this).find('#todo').val();
      $('#todo-list').append('<li>' + todoText + '</li>' + '<button>' + '</button>');
      $('#todo-list').sortable();
      $(this).find('#todo').val('');
    });
    $('#todo-list').on('click', 'button', function () {
    $(this).parent().remove();


    });

});
