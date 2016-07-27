'use strict';

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    var todoText = $(this).find('#todo').val();
    $('#todo-list').append('<li>' + todoText +'</li>' + '<input type = "checkbox">');
    $('#todo-list').sortable();

  });
})
