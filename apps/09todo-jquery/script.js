'use strict';

$(document).ready(function() {
    // App logic goes here
    $('#todo-list').sortable();
    $('form').submit(function(event){
      event.preventDefault();
      var $todoText = $(this).find('#todo').val();
      $('#todo-list').append('<li> <input type="checkbox"> ' + $todoText + '  <a href="#" class="killItem"><img src="https://cdn0.iconfinder.com/data/icons/16x16-free-toolbar-icons/16/33.png"></a> </li>');

      $('.killItem').click(function(){
        $(this).closest('li').remove();
      });
    });

});
