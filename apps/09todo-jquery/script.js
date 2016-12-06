'use strict';

$(document).ready(function() {
  // App logic goes here
  $('form').submit(function (event) {
    event.preventDefault();
    var todoText = $(this).find('#todo').val();
    $(this).find('#todo').val('');
    $('#todo-list').append('<li>' + todoText + '<button></button>'+'</li>');
    $('#todo-list').sortable();

    //Inside your callback prevent the default event from occuring when you submit. Then within the $(this) context, .find() the value of #todo and assign it to a variable called todoText.
  });
  // $('button').click(function(){
  //   $(this).parent().remove();
  // });
  $('body').on('click', 'button', function(){
    $(this).parent().remove();
  });
});
