'use strict';

$(document).ready(function() {
    // App logic goes here
    $('form').submit(function(event) {
        event.preventDefault();
        var todoText = $(this).find('#todo').val();
        $('#todo-list').append('<li><input type="checkbox"></input>  ' + todoText + '  <button class="remove-button" type="button">Remove</button></li>');
        $('#todo-list').sortable();
        $('#todo').val('');
    });
});

$('body').on('click', '.remove-button', function(event) {
    event.preventDefault();
    $(this).parent().detach();
});
