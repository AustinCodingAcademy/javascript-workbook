'use strict';

$(document).ready(function() {
    $('form').submit(function (event) {
      event.preventDefault();
      console.log($(this));
      var todoText = $(this).find('input[type="text"]').val()
      $('#todo-list').append('<li>' + '<input type="checkbox">' + todoText + '</li>') /*Added checkbox to each item listed*/
      $(this).find('input[type="text"]').val('');
      $('ul').sortable();
      $('ul').disableSelection();
    })
});
