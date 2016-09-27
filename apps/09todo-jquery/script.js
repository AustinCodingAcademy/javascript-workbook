'use strict';

$(document).ready(function() {
  $('form').submit(function (event) { // target the form, and put a submit event listener on it. We can capture and pass in the event for us to use
         event.preventDefault();

         var todoText = $(this).find('#todo').val();

         $('#todo-list').append('<li>' + todoText + '</li>');

         $('ul').sortable();
         $('input[type="text"]').val('');
});
});
