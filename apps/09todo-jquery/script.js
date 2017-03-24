'use strict';

$(document).ready(function() {
  // App logic goes here
  $('form').submit(function(event) {
    event.preventDefault();

    var value = $(this).find('input[type="text"]').val();

    $('#todo-list').append('<li><input type="checkbox"/>' + value + '<button>remove</button>');

    $('#todo-list').sortable();
  
});

$('body').on('click''button',function(){
$(this).parent().remove();
})
