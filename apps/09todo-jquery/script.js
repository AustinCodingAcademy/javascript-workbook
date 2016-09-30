'use strict';

  $(document).ready(function() {
    $('form').on('submit',function(event){
      event.preventDefault();
      var text= $(event.currentTarget).find('input[type="text"]').val();
      $('#todo-list').append('<li>' + text + '</li>');
      $(event.currentTarget).find('input[type="text"]').val('');
    });
    
   $('ul').sortable();

  });
