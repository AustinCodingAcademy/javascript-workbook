'use strict';

$(document).ready(function() {
    // App logic goes here
    $('form').submit(function (event) {
      event.preventDefault();
      var todoText = $(this).find('#todo').val();
      $('#todo-list').append('<li>' + '<input type="checkbox" class="todo-listItem">'+'<button type = "button" class="buttonID">' + '</button>' + todoText + '</li>');
      $('#todo-list').sortable();
      $(this).find('#todo').val('');

    });

    $('.buttonID').on('click', function () {
      $(this).parent().remove();
    });

});
