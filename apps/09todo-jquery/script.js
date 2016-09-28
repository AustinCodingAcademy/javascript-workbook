'use strict';

$(document).ready(function() {
  $('form').submit(function (event) {
    event.preventDefault();
    var todoText = $(this).find('#todo').val();
    $('#todo-list').append('<li><input type="checkbox">' + todoText + ' <button type="button">Delete</button></li>');
    $('button').click(function() {
      $(this).parent().remove();
    });
    $('#todo').val('');
    $('#todo').attr("placeholder","Enter some text...").placeholder();
  });
  $('#todo-list').sortable();
});
