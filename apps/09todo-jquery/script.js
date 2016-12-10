'use strict';

$(document).ready(function() {
  $('form').submit(function(event){
    event.preventDefault();
    var $todoText = $(this).find('#todo').val();
    $('#todo-list').append('<li><label class="checkbox-inline"><input type="checkbox" />' +$todoText + '</label></li>').sortable();
  })
});
