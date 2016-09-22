'use strict';

$(document).ready(function() {
    // App logic goes here

    $('form').submit(function (event) {
       event.preventDefault();
       var todoText = $(this).find('input[type="text"]').val();

       console.log( $(this) );
       // add item to list
       $('#todo-list').append('<li>' + todoText + '</li>');
       // clear
       $(event.currentTarget).find('input[type="text"]').val('');

      });
      // makes sortable
        $('ul').sortable();
});
