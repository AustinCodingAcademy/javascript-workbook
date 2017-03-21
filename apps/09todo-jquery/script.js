'use strict';

$(document).ready(function() {
  // App logic goes here

  $('form').submit(function (event) {
    event.preventDefault();
    var todoText = $(this).find('input[type="text"]').val();
    $('#todo-list').append('<li><input type = "checkbox"/>' + todoText + '<button></button></li>');
    $('#todo-list').sortable();

  });

  $('body').on('click','button',function(){
    $(this).parent().remove();
  });

});
