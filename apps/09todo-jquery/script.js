'use strict';

$(document).ready(function() {
  
  $('form').submit(function(event) {

    event.preventDefault();

    var value = $(this).find('input[type=text]').val(); 

    $('#todo-list').append('<li>' + value + ' <button>remove</button></li>');

    $('#todo-list').sortable();

  })

  $('body').on('click', 'button', function() {
    $(this).parent().remove();
  })
});
