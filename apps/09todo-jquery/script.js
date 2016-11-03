'use strict';

$(document).ready(function() {
  // App logic goes here
  $('form').submit(function(event) {
    event.preventDefault();

    if ($('#default-li')) {
      $('#default-li').remove();
    }

    var todoText = $(this).find('#todo').val();
    $('#todo-list').append('<li><a class="done" href="#">Done</a><span class="todo-text">' + todoText + '</span></li>');
    $('#todo-list').sortable();
    $('#todo').val('');
  });

  $('#todo-list').on('click', '.done', function (e) {
    $(e.target).parent().remove();
    if ($('#todo-list').children().length === 0) {
      $('#todo-list').append('<li id="default-li"><span class="todo-text">You finished your list! Feel free to start over!</span></li>');
    }
  });
});
