'use strict';

$(document).ready(function() {
    // App logic goes here
    $('form').submit(function(event) {
        event.preventDefault();
        var todoText = $(this).find('#todo').val();
        $('#todo-list').append('<li>' + '<label>' + '<input type="checkbox">' + todoText + '</label>' + '</li>');
        //or <label>
        $('input[type="text"]').val('');
        $('#todo-list').sortable();
    });
});
