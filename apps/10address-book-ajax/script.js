
'use strict';

$(document).ready(function() {

  $('form').submit(function (event) {
    event.preventDefault();
    var todoText = $(this).find('#todo').val();
    $(this).find('#todo').val('');
    $('#todo-list').append('<li>' + todoText + '<button></button>'+'</li>');
    $('#todo-list').sortable();

  $('body').on('click', 'button', function(){
    $(this).parent().remove();
  });
});
