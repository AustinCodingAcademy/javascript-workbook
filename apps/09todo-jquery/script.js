'use strict';

$(document).ready(function() {
    // App logic goes here

    $('form').submit(function (event) {
       event.preventDefault();
       var todoText = $(this).find('input[type="text"]').val('#todo');

       console.log( $(this) );
       $('#todo').append('<li>' + todoText + '</li>');
       $(event.currentTarget).find('input[type="text"]'.val(''));


      });
        $('ul').sortable();
});
