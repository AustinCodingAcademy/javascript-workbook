'use strict';

$(document).ready(function() {
  // App logic goes here
  $('form').submit(function(event) {
    event.preventDefault();
    var toDo = $(this).find('#todo').val();
    $('#todo-list').append('<li><input type="checkbox" class="ckbx"/>' + toDo + '<button>Remove</button></li>');
    $('#todo-list').sortable();
    $('li').addClass('newLi');
    $('li').css({'color': 'blue', 'height': '25px', 'width': '250px'});
    
  });  

  $('body').on('click', 'button', function()  {
   $(this).parent().remove();

  });
   
});
