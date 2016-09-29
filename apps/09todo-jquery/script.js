'use strict';

$(document).ready(function() {
   $('ul').sortable();
    $('form').submit(function(event){
      event.preventDefault();
      var value = $(this).find("#todo").val();
      $('#todo-list').append('<li>' + value + '</li>');
      $(this).find('input[type="text"]').val('');
   });

   $('<input type="checkbox"/>').prependTo('li:last');
});
