'use strict';

$(document).ready(function() {
  $('form').submit(function(event){
      event.preventDefault();
      console.log($(this));
      var todoText = $(this).find('input[type="text"]').val();
      $('#todo-list').append('<li>' + todoText + '</li>');
      $(this).find('input[type="text"]').val('');
      $('#todo-list').sortable();
          });
});
